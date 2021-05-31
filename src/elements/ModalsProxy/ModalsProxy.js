/** @module ModalsProxy
 *  @class ModalsProxy
 *  @since 2021.05.14, 14:38
 *  @changed 2021.05.31, 16:57
 */

import config from 'config';

class ModalsProxy {

  _inited = false; // 'Was initialized' flag
  _proxyModalsList = []; // List of modals (passed to `ModalsController` state to direct render
  _modalsController = null; // Will be initialized with `ModalsController` instance reference promise in `config/modals`.
  _storeHandlers = [];

  getProxyModalNode(id) {
    return this._modalsController.getProxyModalNode(id);
  }

  updateProxyModalsList() { // Using `this._modalsController.updateProxyModalsList`
    if (this._modalsController) {
      return this._modalsController.updateProxyModalsList(this._proxyModalsList);
    }
  }

  initialize = () => {
    this._modalsController = config.modals.controller;
    this._inited = true;
    if (this._proxyModalsList.length) {
      this.updateProxyModalsList(); // Using `this._modalsController.updateProxyModalsList`
    }
    this._initStore();
  }

  constructor() {
    const initPromise = this.getInitPromise();
    initPromise.then(this.initialize);
  }

  getInitPromise() {
    return config.modals.initPromise;
  }

  getModalsController() {
    return this._modalsController;
  }

  // Store methods...

  _initStore() {
    const { store } = config.app;
    if (store) {
      store.subscribe(this._onStoreChange);
    }
  }

  _onStoreChange = () => {
    const { store } = config.app;
    const state = store.getState();
    this._storeHandlers.forEach(cb => {
      (typeof cb === 'function') && cb(state);
    });
  }

  addStoreChangesHandler(cb) {
    this._storeHandlers.push(cb);
  }

  removeStoreChangesHandler(cb) {
    const idx = this._storeHandlers.indexOf(cb);
    if (idx !== -1) {
      this._storeHandlers.splice(idx, 1);
    }
  }

  /* External modal proxy interface...
   *
   * - addModal
   * - removeModal
   * - getModal
   * - isModalExists
   * - updateModal
   *
   * regexp: \<\(addModal\|removeModal\|getModal\|isModalExists\|updateModal\)\>
   *
   */

  addModal(modalData) {
    const modalId = modalData.modalId || modalData.id; // || 'modal' + n;
    // Check not-empty id and id uniqueness
    if (!modalId || this.getModal(modalId)) {
      const error = new Error('An unique modalId must be specified');
      console.error('ModalsController:addModal: error', { error, modalData }); // eslint-disable-line no-console
      debugger; // eslint-disable-line no-debugger
      throw error;
    }
    // Extend modal data...
    modalData = {
      key: modalId,
      id: modalId,
      ...modalData,
      __saved__OnDeactivate: modalData.onDeactivate, // Save passed handler, using in `onModalDeactivate` handler, see below
      onDeactivate: this.onModalDeactivate, // Overwrite with our own deactivate handler
    };
    // console.log('ModalsProxy:addModal', {
    //   modalId,
    //   modalData,
    // });
    this._proxyModalsList = this._proxyModalsList.concat(modalData);
    this.updateProxyModalsList(); // Using `this._modalsController.updateProxyModalsList`
  }
  removeModal(modalId) {
    // console.log('ModalsProxy:addModal', {
    //   modalId,
    //   'this._proxyModalsList': this._proxyModalsList,
    // });
    // TODO: Call some actions (on close modal)?
    this._proxyModalsList = this._proxyModalsList.filter(modalData => modalData.modalId !== modalId);
    this.updateProxyModalsList(); // Using `this._modalsController.updateProxyModalsList`
    this._modalsController.removeProxyModalNode(modalId);
  }
  getModal(modalId) {
    const { _proxyModalsList } = this;
    const found = _proxyModalsList.find(modalData => modalData.modalId === modalId);
    return found;
  }
  isModalExists(modalId) {
    const found = this.getModal(modalId);
    return !!found;
  }
  updateModal(modalId, options) {
    const newModals = this._proxyModalsList.map(modalData => {
      if (modalData.modalId === modalId) {
        modalData = { ...modalData, ...options };
      }
      return modalData;
    });
    this._proxyModalsList = newModals;
    this.updateProxyModalsList(); // Using `this._modalsController.updateProxyModalsList`
  }
  onModalDeactivate = (data) => {
    let { modalId, id } = data;
    modalId = modalId || id;
    const modalData = this.getModal(modalId);
    if (!modalData) {
      const error = new Error('Proxy modal not found for modalId="' + modalId + '"');
      console.error('ModalsController:onModalDeactivate: error', { error, modalId }); // eslint-disable-line no-console
      debugger; // eslint-disable-line no-debugger
      throw error;
    }
    const {
      __saved__OnDeactivate: onDeactivate,
      onModalDeactivate,
    } = modalData;
    // console.log('ModalsProxy:onModalDeactivate', { modalId, modalData });
    this.removeModal(modalId);
    // Use try/catch?
    if (typeof onDeactivate === 'function') {
      onDeactivate(data);
    }
    if (typeof onModalDeactivate === 'function') {
      onModalDeactivate(data);
    }
  }

  // TODO: Implement `mapStateToProps` (as method of `ModalProxifiedWindow`?)

}

const ModalsProxySingleton = new ModalsProxy();
export default ModalsProxySingleton;
