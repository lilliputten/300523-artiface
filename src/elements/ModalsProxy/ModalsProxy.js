/** @module ModalsProxy
 *  @class ModalsProxy
 *  @since 2021.05.14, 14:38
 *  @changed 2021.05.27, 14:03
 */

import config from 'config';

class ModalsProxy {

  inited = false; // 'Was initialized' flag
  proxyModalsList = []; // List of modals (passed to `ModalsController` state to direct render
  modalsController = null; // Will be initialized with `ModalsController` instance reference promise in `config/modals`.

  getProxyModalNode(id) {
    return this.modalsController.getProxyModalNode(id);
  }

  updateProxyModalsList() {
    return this.modalsController.updateProxyModalsList(this.proxyModalsList);
  }

  initialize = () => {
    this.modalsController = config.modals.controller;
    this.inited = true;
    if (this.proxyModalsList.length) {
      this.updateProxyModalsList();
    }
  }

  constructor() {
    const initPromise = this.getInitPromise();
    initPromise.then(this.initialize);
  }

  getInitPromise() {
    return config.modals.initPromise;
  }

  getModalsController() {
    return this.modalsController;
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
    const id = modalData.modalId || modalData.id; // || 'modal' + n;
    // Check not-empty id and id uniqueness
    if (!id || this.getModal(id)) {
      const error = new Error('An unique modalId must be specified');
      console.error('ModalsController:addModal: error', { error, modalData }); // eslint-disable-line no-console
      debugger; // eslint-disable-line no-debugger
      throw error;
    }
    // Extend modal data...
    modalData = {
      key: id,
      id: id,
      ...modalData,
      __saved__OnDeactivate: modalData.onDeactivate, // Save passed handler, using in `onModalDeactivate` handler, see below
      onDeactivate: this.onModalDeactivate, // Overwrite with our own deactivate handler
    };
    this.proxyModalsList = this.proxyModalsList.concat(modalData);
    this.updateProxyModalsList();
  }
  removeModal(modalId) {
    // TODO: Call some actions (on close modal)?
    this.proxyModalsList = this.proxyModalsList.filter(modalData => modalData.modalId !== modalId);
    this.updateProxyModalsList();
    this.modalsController.removeProxyModalNode(modalId);
  }
  getModal(modalId) {
    const { proxyModalsList } = this;
    const found = proxyModalsList.find(modalData => modalData.modalId === modalId);
    return found;
  }
  isModalExists(modalId) {
    const found = this.getModal(modalId);
    return !!found;
  }
  updateModal(modalId, options) {
    const newModals = this.proxyModalsList.map(modalData => {
      if (modalData.modalId === modalId) {
        modalData = { ...modalData, ...options };
      }
      return modalData;
    });
    this.proxyModalsList = newModals;
    this.updateProxyModalsList();
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

}

const ModalsProxySingleton = new ModalsProxy();
export default ModalsProxySingleton;
