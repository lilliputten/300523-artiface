/** @module ModalProxifiedWindow
 *  @class ModalProxifiedWindow
 *  @since 2021.05.27, 14:44
 *  @changed 2021.07.16, 17:41
 */

import ModalsProxy from 'elements/ModalsProxy';

import config from 'config';

class ModalProxifiedWindow {

  __updateTimer = [];
  __updateCbQueue = [];
  __newProps = undefined; // Unused (no way to receive new props)?
  __newState = undefined;
  __mounted = false;

  constructor(props) {
    this.props = props || {};
    this.modalId = this.props.modalId || this.props.id || this.modalId;
    // console.log('ModalProxifiedWindow:constructor', {
    //   modalId: this.modalId,
    //   props,
    // });
    setTimeout(this.__activateStateHandler.bind(this), 0); // Initialize state change handler after constructor finished
    this.__restartUpdateTimer(); // Start initial update timer
  }

  onDeactivate = (params) => {
    this.__deactivateStateHandler();
    // console.log('ModalProxifiedWindow:onDeactivate', { modalId: this.modalId });
    if (typeof this.componentWillUnmount == 'function') {
      setTimeout(this.componentWillUnmount.bind(this), 0);
    }
    const { onDeactivate } = this.props;
    if (typeof onDeactivate === 'function') {
      // setTimeout(onDeactivate, 0, params);
      onDeactivate(params);
    }
    ModalsProxy.removeModal(this.modalId);
  }

  // Store state control...

  passStateToProps(state, mapStateToProps) {
    if (typeof mapStateToProps !== 'function') {
      return;
    }
    const stateProps = mapStateToProps.call(this, state);
    const { props } = this;
    // Detect changes...
    let hasChanges = false;
    for (let id in stateProps) {
      if (stateProps[id] !== props[id]) {
        hasChanges = true;
        break;
      }
    }
    // console.log('ModalProxifiedWindow:passStateToProps', {
    //   modalId: this.modalId,
    //   state,
    //   props,
    //   hasChanges,
    //   stateProps,
    // });
    if (hasChanges) {
      this.setProps(stateProps);
    }
  }

  onStateChangeHandler(state) {
    // console.log('ModalProxifiedWindow:onStateChangeHandler', {
    //   modalId: this.modalId,
    //   mapStateToProps: this.mapStateToProps,
    //   state,
    // });
    this.passStateToProps(state, this.mapStateToProps);
  }

  __activateStateHandler() {
    const { store } = config.app;
    // console.log('ModalProxifiedWindow:__activateStateHandler', {
    //   store,
    //   modalId: this.modalId,
    //   mapStateToProps: this.mapStateToProps,
    // });
    if (typeof this.mapStateToProps === 'function') {
      // Register update handler...
      this.__registered_onStateChangeHandler = this.onStateChangeHandler.bind(this);
      ModalsProxy.addStoreChangesHandler(this.__registered_onStateChangeHandler);
      // Set initial state props...
      if (store) {
        const state = store.getState();
        this.passStateToProps(state, this.mapStateToProps);
      }
    }
  }

  __deactivateStateHandler() {
    // console.log('ModalProxifiedWindow:__activateStateHandler', {
    //   modalId: this.modalId,
    //   __registered_onStateChangeHandler: this.__registered_onStateChangeHandler,
    // });
    if (this.__registered_onStateChangeHandler) {
      ModalsProxy.removeStoreChangesHandler(this.__registered_onStateChangeHandler);
    }
  }

  // Render...

  __render() {
    let children;
    if (typeof this.render === 'function') {
      children = this.render();
    }
    const updateProps = {
      ...this.props,
      onDeactivate: this.onDeactivate,
      children,
    };
    // console.log('ModalProxifiedWindow:__render', {
    //   modalId: this.modalId,
    //   props: this.props,
    //   updateProps,
    // });
    if (!this.__mounted) {
      ModalsProxy.addModal(updateProps);
      // TODO: Use `ModalsProxy.getProxyModalNode(modalId)` & overrided `onComponentDidUpdate`?
      if (typeof this.componentDidMount === 'function') {
        setTimeout(this.componentDidMount.bind(this), 0);
      }
      this.__mounted = true;
    }
    else {
      ModalsProxy.updateModal(this.modalId, updateProps);
    }
  }

  // Update...

  __update = () => {
    // Reset timer...
    if (this.__updateTimer) {
      clearTimeout(this.__updateTimer);
      this.__updateTimer = null;
    }
    // Save old & set new props...
    const prevProps = this.props;
    if (this.__newProps) {
      this.props = { ...prevProps, ...this.__newProps };
      this.__newProps = undefined;
    }
    // Save old & set new state...
    const prevState = this.state;
    if (this.__newState) {
      this.state = { ...prevState, ...this.__newState };
      this.__newState = undefined;
    }
    // console.log('ModalProxifiedWindow:__update', {
    //   modalId: this.modalId,
    //   props: this.props,
    //   prevProps,
    //   state: this.state,
    //   prevState,
    // });
    // Call all callbacks...
    let cb;
    while ((cb = this.__updateCbQueue.shift()) != null) {
      setTimeout(cb, 0);
    }
    // Call update handler...
    if (typeof this.componentDidUpdate === 'function') {
      this.componentDidUpdate(prevProps, prevState); // TODO: Use `bind`, use `setTimeout`?
    }
    // Make render...
    this.__render();
  }

  __restartUpdateTimer() {
    // TODO: Control multiple subsequenced timer restarts? (Force update for n sequential restarts?)
    if (this.__updateTimer) {
      clearTimeout(this.__updateTimer);
      this.__updateTimer = null;
    }
    this.__updateTimer = setTimeout(this.__update, 20);
  }

  setState(data, cb) {
    // console.log('ModalProxifiedWindow:setState', { modalId: this.modalId, data, cb });
    if (typeof data === 'function') {
      data = data(this.state);
    }
    Object.assign(this.__newState || (this.__newState = {}), data);
    if (typeof cb === 'function') {
      this.__updateCbQueue.push(cb);
    }
    this.__restartUpdateTimer();
  }

  setProps(data, cb) {
    // console.log('ModalProxifiedWindow:setProps', { modalId: this.modalId, data, cb });
    if (typeof data === 'function') {
      data = data(this.props);
    }
    Object.assign(this.__newProps || (this.__newProps = {}), data);
    if (typeof cb === 'function') {
      this.__updateCbQueue.push(cb);
    }
    this.__restartUpdateTimer();
  }

  // Actions

  close() {
    const controller = ModalsProxy.getModalsController();
    const modal = controller.getProxyModalNode(this.modalId);
    modal.close();
  }

}

export default ModalProxifiedWindow;
