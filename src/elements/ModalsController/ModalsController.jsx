/** @module ModalsController
 *  @class ModalsController
 *  @desc Modals dom container & controller interface object
 *  @since 2020.12.21, 23:37
 *  @changed 2021.05.27, 14:03
 */

import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Portal } from 'react-portal';
import { cn } from 'utils/configure';
import * as config from 'config';
import ErrorContainer from 'elements/ErrorContainer';
import { ErrorBoundary } from 'react-error-boundary';
// import { Provider } from 'react-redux';
// import { app as appConfig } from 'config';

import ModalWindow from 'elements/ModalWindow';

import './ModalsController.pcss';

const cnModalsController = cn('ModalsController');

// const doDebug = false // DEBUG!

class ModalsController extends React.PureComponent /** @lends @ModalsController.prototype */ {

  static propTypes = {
    usePortal: PropTypes.bool, // Render container at end of dom tree root level
  }

  // Internal variables...

  domNode = undefined;
  modalsStack = [];
  modalWindows = [];
  proxyModalNodes = {};

  // Lifecycle...

  // UNUSED lifecycle methods
  constructor(props) {
    super(props);
    this.state = {
      proxyModalsList: [], // Active proxy modals list; see `...ProxyModal...` functionality below
    };
  }

  componentDidMount() {
    // Uncaught errors handler...
    this.__saved_onunhandledrejection = window.onunhandledrejection;
    this.__saved_onerror = window.onerror;
    window.onunhandledrejection = this.onCatchedError;
    window.onerror = this.onCatchedError;

    // this.registerGlobalHandlers()
    // Initialize global references & parameters...
    if (typeof config.modals.__initPromiseResolve == 'function') {
      config.modals.__initPromiseResolve();
    }
    config.modals.isInited = true;
    config.modals.controller = this;
    /* // UNUSED: Old method to obtain dom node re3ference (see setRef below).
     * // eslint-disable-next-line react/no-find-dom-node
     * const domNode = ReactDOM.findDOMNode(this); // TODO: Find alternate legal method to get dom node? (refs doesn't works due to high-level element (`TransitionGroup`) rendering)
     * // console.log('ModalsController:componentDidMount', { domNode });
     * this.domNode = domNode;
     * config.modals.domNode = domNode;
     */
  }

  componentWillUnmount() {
    // this.unregisterGlobalHandlers()

    // Reset uncaught errors handler...
    window.onunhandledrejection = this.__saved_onunhandledrejection;
    window.onerror = this.__saved_onerror;
  }

  // Handlers...

  setRef = (domNode) => { // Get dom node reference. Used as portals root (with `config.modals.controller.getDomNode()`).
    // console.log('ModalsController:setRef', { domNode });
    this.domNode = domNode;
    // config.modals.domNode = domNode;
  }

  onCatchedError = (error) => { // Error handler
    const errorMessage = error && (error.message || error.reason);
    console.error('ModalsController:onCatchedError', errorMessage, error); // eslint-disable-line no-console
    debugger; // eslint-disable-line no-debugger
    // this.setState({ errors: error });
    // this.props.setErrorNotify(error);
    throw error;
  }

  // External methods...

  getDomNode() { // Get dom node
    return this.domNode || document.body;
  }

  registerModal = (modal/*: React.ReactNode*/) => { // Add item to modals stack
    // console.log('ModalsController:registerModal', modal.props.type, modal.props.id);
    // debugger;
    if (!this.modalsStack.includes(modal)) { // Add to stack if not exist
      this.modalsStack.push(modal);
    }
  }

  unregisterModal = (modal/*: React.ReactNode*/) => { // Remove item from modals stack
    // console.log('ModalsController:unregisterModal', modal.props.type, modal.props.id)
    // debugger;
    const idx = this.modalsStack.indexOf(modal);
    if (idx !== -1) { // Remove if found...
      this.modalsStack.splice(idx, 1);
    }
  }

  getModalById/*: React.ReactNode*/ = (id) => {
    for (let n = this.modalsStack.length - 1; n >= 0; n--) {
      const modal = this.modalsStack[n];
      const modalId = modal && modal.props && modal.props.id;
      if (modalId && modalId === id) {
        return modal;
      }
    }
    return true;
  }

  getTopmostVisibleModal = () => { // Get topmost modal element
    // Look for items from last (topmost) to first (bottommost) for first visible
    for (let n = this.modalsStack.length - 1; n >= 0; n--) {
      const modal = this.modalsStack[n];
      const isVisible = modal.isVisible();
      if (isVisible) {
        return modal;
      }
    }
  }

  isModalTopmostVisible = (modal) => { // Is modal modal element is top-most visible?
    const topmost = this.getTopmostVisibleModal();
    return (modal === topmost);
  }

  // Proxy modals functionality...

  setPortalProxyRef = (ref) => {
    this.PortalProxy = ref;
  }

  // External proxy methods...

  updateProxyModalsList(proxyModalsList) {
    this.setState({ proxyModalsList });
  }

  /* DEPRECATED: Moved to ModalProxy...
  addProxyModal(modalData) {
    modalData = {
      key: id,
      id: id,
      ...modalData,
      onDeactivate: this.onProxyModalDeactivate,
    };
    const id = modalData.modalId; // || 'modal' + n;
    // TODO: Check not-empty id and id uniqueness
    if (!id || this.getProxyModal(id)) {
      const error = new Error('An unique modalId must be specified');
      console.error('ModalsController:addProxyModal: error', { error, modalData }); // eslint-disable-line no-console
      debugger; // eslint-disable-line no-debugger
      throw error;
    }
    this.setState(({ proxyModalsList }) => {
      return { proxyModalsList: proxyModalsList.concat(modalData) };
    });
  }
  removeProxyModal(modalId) {
    // TODO: Call some actions (on close modal)?
    this.setState(({ proxyModalsList }) => {
      proxyModalsList = proxyModalsList.filter(modalData => modalData.modalId !== modalId);
      return { proxyModalsList };
    });
  }
  getProxyModal(modalId) {
    const { proxyModalsList } = this.state;
    const found = proxyModalsList.find(modalData => modalData.modalId === modalId);
    return found;
  }
  isProxyModalExists(modalId) {
    const found = this.getProxyModal(modalId);
    return !!found;
  }
  updateProxyModal(modalId, options) {
    this.setState(({ proxyModalsList }) => {
      const foundIdx = proxyModalsList.findIndex(modalData => modalData.modalId === modalId);
      if (foundIdx !== -1) {
        const modalData = proxyModalsList[foundIdx];
        // Clone array...
        const newModals = proxyModalsList.slice();
        const newModalData = { ...modalData, ...options };
        newModals[foundIdx] = newModalData;
        return { proxyModalsList: newModals };
      }
    });
  }
  onProxyModalDeactivate = (data) => {
    let { modalId, id } = data;
    modalId = modalId || id;
    const modal = this.getProxyModal(modalId);
    if (!modal) {
      const error = new Error('Proxy modal not found for modalId="' + modalId + '"');
      console.error('ModalsController:onProxyModalDeactivate: error', { error, modalId }); // eslint-disable-line no-console
      debugger; // eslint-disable-line no-debugger
      throw error;
    }
    const { onDeactivate, onModalDeactivate } = modal;
    console.log('RulesModals:onModalDeactivate', { modalId, modal });
    // debugger;
    this.removeProxyModal(modalId);
    // Use try/catch?
    if (typeof onDeactivate === 'function') {
      onDeactivate(data);
    }
    if (typeof onModalDeactivate === 'function') {
      onModalDeactivate(data);
    }
  }
  */

  saveProxyModalNode = (node) => {
    const props = node && node.props || {};
    const id = props.modalId || props.id;
    if (id) {
      this.proxyModalNodes[id] = node;
    }
    // console.log('ModalsController:saveProxyModalNode', id, node);
    // debugger;
  }

  removeProxyModalNode = (id) => {
    if (typeof id === 'object' && id.props) {
      id = id.props.modalId || id.props.id;
    }
    // console.log('ModalsController:removeProxyModalNode', id);
    // debugger;
    const modalNode = this.proxyModalNodes[id];
    if (modalNode) {
      if (typeof modalNode.onRemove === 'function') {
        modalNode.onRemove();
      }
      delete this.proxyModalNodes[id];
    }
  }

  // TODO: closeProxyModalNode?

  getProxyModalNode = (id) => {
    if (this.proxyModalNodes[id]) {
      return this.proxyModalNodes[id];
    }
  }

  // Render...

  renderProxyModal(modalData/* , n */) {
    // const id = modalData.modalId; // || 'modal' + n;
    // // Non-empty unique id ensured in `addProxyModal`
    // const modalProps = {
    //   key: id,
    //   id: id,
    //   ...modalData,
    //   onDeactivate: this.onProxyModalDeactivate,
    // };
    // return <ModalWindow {...modalProps} />;
    return <ModalWindow {...modalData} ref={this.saveProxyModalNode} />;
  }

  renderProxyModals() {
    const { proxyModalsList } = this.state;
    return proxyModalsList.map(this.renderProxyModal, this);
  }

  renderModalsController() {
    const { containerId } = config.modals;
    const className = cnModalsController(null, [this.props.className/* , cnModalsController('TransitionGroup') */]);
    const renderProps = {
      key: containerId || 'ModalsController',
      id: containerId,
      className,
      ref: this.setRef, // Get dom node handler
    };
    /* // UNUSED: Failed `ModalsContext` test implementation
     * return (
     *   <ModalsContextProvider value={this}>
     *     <div {...renderProps} />
     *   </ModalsContextProvider>
     * )
     */
    return (
      <ErrorBoundary FallbackComponent={ErrorContainer} onError={this.onCatchedError}>
        <div {...renderProps}>
          <div className={cnModalsController('PortalProxy')} ref={this.setPortalProxyRef}>
            {this.renderProxyModals()}
          </div>
        </div>
      </ErrorBoundary>
    );
  }

  render() {
    let content = this.renderModalsController();
    const { usePortal } = this.props;
    // const { store } = appConfig;
    // if (store) {
    //   content = <Provider store={store}>{content}</Provider>;
    // }
    if (usePortal) {
      // console.log('ModalsController:render', {
      //   store,
      //   Provider,
      // });
      const node = document.body; // Render as new node in top level of dom tree
      content = <Portal node={node}>{content}</Portal>;
    }
    return content;
  }

}

export default ModalsController;
