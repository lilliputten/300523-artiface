/** @module ModalsContainer
 *  @class ModalsContainer
 *  @desc Modals dom container & controller interface object
 *  @since 2020.12.21, 23:37
 *  @changed 2020.12.21, 23:37
 */

// import React from 'react';
import * as React from 'react';
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
import * as PropTypes from 'prop-types';
import { Portal } from 'react-portal';
// import { cssMapping } from 'utils/configure';
// import { cn } from '../../utils/configure';
import { cn } from 'utils/configure';
// import { cn } from '~/utils/configure.js';
import * as config from 'config';
// import * as config from '../../config/config';
// import config from 'config/config';
// import { ModalsContextProvider } from 'helpers/ModalsContext';

import './ModalsContainer.pcss';

const cnModalsContainer = cn('ModalsContainer');

// const doDebug = false // DEBUG!

class ModalsContainer extends React.PureComponent /** @lends @ModalsContainer.prototype */ {

  static propTypes = {
    usePortal: PropTypes.bool, // Render container at end of dom tree root level
  }

  // Internal variables...

  domNode = undefined;
  modalsStack = [];
  modalWidnows = [];

  // Lifecycle...

  /* // UNUSED lifecycle methods
   * constructor(props) {
   *   super(props);
   *   // ???
   *   // const {
   *   //   modalsContainerNode, // ModalsContext Provider
   *   // } = props
   *   // console.log(modalsContainerNode)
   *   // debugger
   * }
   * componentWillUnmount() {
   *   // this.unregisterGlobalHandlers()
   * }
   */

  componentDidMount() {
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
     * // console.log('ModalsContainer:componentDidMount', { domNode });
     * this.domNode = domNode;
     * config.modals.domNode = domNode;
     */
  }

  // Handlers...

  setRef = (domNode) => { // Get dom node reference. Used as portals root (with `config.modals.controller.getDomNode()`).
    // console.log('ModalsContainer:setRef', { domNode });
    this.domNode = domNode;
    // config.modals.domNode = domNode;
  }

  // External methods...

  getDomNode() { // Get dom node
    return this.domNode || document.body;
  }

  registerModal = (modal: React.ReactNode) => { // Add item to modals stack
    console.log('ModalsContainer:registerModal', modal.props.type, modal.props.id);
    debugger;
    if (!this.modalsStack.includes(modal)) { // Add to stack if not exist
      this.modalsStack.push(modal);
    }
  }

  unregisterModal = (modal: React.ReactNode) => { // Remove item from modals stack
    // console.log('ModalsContainer:unregisterModal', modal.props.type, modal.props.id)
    const idx = this.modalsStack.indexOf(modal);
    if (idx !== -1) { // Remove if found...
      this.modalsStack.splice(idx, 1);
    }
  }

  getModalById: React.ReactNode = (id) => {
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

  // Render...

  renderModalsContainer() {
    const { containerId } = config.modals;
    const className = cnModalsContainer(null, [this.props.className/* , cnModalsContainer('TransitionGroup') */]);
    const renderProps = {
      key: containerId || 'ModalsContainer',
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
      <div {...renderProps} />
    );
  }

  render() {
    const node = document.body; // Render as new node in top level of dom tree
    const container = this.renderModalsContainer();
    const { usePortal } = this.props;
    const content = usePortal ? <Portal node={node}>{container}</Portal> : container;
    return content;
  }

}

export default ModalsContainer;
