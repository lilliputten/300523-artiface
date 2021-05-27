/** @module ModalProxifiedWindow
 *  @class ModalProxifiedWindow
 *  @since 2021.05.27, 14:44
 *  @changed 2021.05.27, 16:57
 */

import ModalsProxy from 'elements/ModalsProxy';

// import config from 'config';

class ModalProxifiedWindow {

  __updateTimer = [];
  __updateCbQueue = [];
  __newProps = undefined; // Unused (no way to receive new props)?
  __newState = undefined;
  __mounted = false;

  constructor(props) {
    this.props = props || {};
    const modalId = this.props.modalId || this.props.id || this.modalId;
    this.modalId = modalId;
    // console.log('ModalProxifiedWindow:constructor', { modalId, props });
    // debugger;
    this.__restartUpdateTimer();
  }

  onDeactivate = (params) => {
    // console.log('ModalProxifiedWindow:onDeactivate', { modalId: this.modalId });
    // debugger;
    if (typeof this.componentWillUnmount == 'function') {
      setTimeout(this.componentWillUnmount.bind(this), 0);
    }
    const { onDeactivate } = this.props;
    if (typeof onDeactivate === 'function') {
      // setTimeout(onDeactivate, 0, params);
      onDeactivate(params);
    }
  }

  // onRemove = () => { // Called from `ModalsController:removeProxyModalNode`
  //   console.log('ModalProxifiedWindow:onRemove', { modalId: this.modalId });
  //   debugger;
  //   if (typeof this.componentWillUnmount == 'function') {
  //     setTimeout(this.componentWillUnmount.bind(this), 0);
  //   }
  // }

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
    // debugger;
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

  __update = () => {
    // Reset timer...
    if (this.__updateTimer) {
      clearTimeout(this.__updateTimer);
      this.__updateTimer = null;
    }
    // Save old & set new props...
    const prevProps = this.props;
    if (this.__newProps) {
      this.props = this.__newProps;
      this.__newProps = undefined;
    }
    // Save old & set new state...
    const prevState = this.state;
    if (this.__newState) {
      this.state = this.__newState;
      this.__newState = undefined;
    }
    // console.log('ModalProxifiedWindow:__update', {
    //   modalId: this.modalId,
    //   props: this.props,
    //   prevProps,
    //   state: this.state,
    //   prevState,
    // });
    // debugger;
    // Call all callbacks...
    let cb;
    while ((cb = this.__updateCbQueue.shift()) != null) {
      setTimeout(cb, 0);
    }
    // Call update handler...
    if (typeof this.componentDidUpdate === 'function') {
      this.componentDidUpdate(prevProps, prevState); // TODO: Use `bind`?
    }
    // Make render...
    this.__render();
  }

  __restartUpdateTimer() {
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

}

export default ModalProxifiedWindow;
