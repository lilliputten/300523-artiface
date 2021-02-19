/** @module ModalPortal
 *  @class ModalPortal
 *  @since 2020.12.21, 22:58
 *  @changed 2020.12.29, 19:58
 *
 *  External methods (for PopupStack, ModalWindow etc):
 *
 *  - activate
 *  - close
 *  - deactivate
 *  - isVisible
 *  - open
 *  - toggle
 *  - updateGeometry
 */
/* --eslint-disable no-console */

// TODO: Use ModalContext

import React from 'react';
// import { compose } from 'redux'
import PropTypes from 'prop-types';
import { cn } from 'utils/configure';
import { Portal } from 'react-portal';
import { // Transitions...
  // Transition,
  CSSTransition,
  // TransitionGroup,
} from 'react-transition-group';
import config from 'config';

// import { withModalsContext } from 'helpers/ModalsContext'

// import InlineIcon from 'elements/InlineIcon'
import Loader from 'elements/Loader';
// import FormButton from 'forms/FormButton'

// import { ActionsContextProvider } from 'helpers/ActionsContext' // TODO?

import './ModalPortal-Geometry.pcss';
import './ModalPortal-Themes.pcss';
import './ModalPortal-Transitions.pcss';

const cnModalPortal = cn('ModalPortal');

// const doDebug = [>DEBUG<] false && config.build.DEV_DEBUG || // DEBUG!
//   false

//
const mouseDownEvent = 'mousedown';
const mouseUpEvent = 'mouseup';
const mouseLeaveEvent = 'mouseleave';
const globalKeyPressEventName = 'keydown';

export const passModalPortalProps = [
  'id',
  'className',
  'closeOnClickOutside',
  'closeOnEscPressed',
  'handleLoaderCancel',
  'useLoader',
  'loaderTheme',
  'loading',
  'onAction',
  'onClickOutside',
  'onCloseButtonClick',
  'onEscPressed',
  'onOpen',
  'onClose',
  'onActivate',
  'onDeactivate',
  'open',
  'theme',
  'windowClassName',
  'windowWidth',
  'wrapperClassName',
  'wrapperTheme',
];

export const selfCloseActionId = '--modal-portal-self-close--';
export const externalCloseActionId = '--modal-portal-external-close--';

class ModalPortal extends React.PureComponent /** @lends @ModalPortal.prototype */ {

  // Props...

  static propTypes = {
    useLoader: PropTypes.bool, // Use loader (see `loading`)
    loading: PropTypes.bool, // Show Loader flashback
    onAction: PropTypes.func, // Event fired on action invoked (see `actions` prop)
    // registerCallback: PropTypes.func, // ??? registerCallback(handler = this.someMethod) -- handler stored by parent component and called when detected click on pulldown menu -- prevents popup content closing
    // setModalPortalNodeRef: PropTypes.func, // ??? Demo?
    windowWidth: PropTypes.string, // (ModalWindow only?) ModalPortal window width (predefined variants: xs, sm, md, lg, xl, xxl)
    handleLoaderCancel: PropTypes.func, // Loader onCancel event handler
    closeOnClickOutside: PropTypes.bool, // Close (cancel) modal by click outside modal window (on 'curtain')
    closeOnEscPressed: PropTypes.bool, // Close (cancel) modal on esc key pressed
    closeWithCloseButton: PropTypes.bool, // Close (cancel) modal by click on header 'Close' button
    id: PropTypes.string, // ModalPortal id
    onActivate: PropTypes.func, // Event fired on activate (before open)
    onClickOutside: PropTypes.func, // Event fired on click outside modal
    onCloseButtonClick: PropTypes.func, // Event fired on header 'Close' button click
    onDeactivate: PropTypes.func, // Event fired on deactivate (unmounting from dom)
    onEscPressed: PropTypes.func, // Event fired on esc key pressed
    onOpen: PropTypes.func, // Event fired on modal open
    onClose: PropTypes.func, // Event fired on modal close
    handleOpenState: PropTypes.func, // Event fired on modal open state change (update external open/close state) ({ open, id } => void)
    open: PropTypes.bool, // Show modal by default
    className: PropTypes.string, // ModalPortal class name
    windowClassName: PropTypes.string, // ModalPortal window class name
    wrapperClassName: PropTypes.string, // ModalPortal wrapper class name
    theme: PropTypes.string, // ModalPortal theme (default theme for all other themed elements, see `*Theme`)
    windowTheme: PropTypes.string, // Window theme (using `theme` if not specified)
    wrapperTheme: PropTypes.string, // Wrapper (back-curtain) theme (using `theme` if not specified)
    loaderTheme: PropTypes.string, // Loader theme ('MediumDark' is default)
    setPortalNode: PropTypes.func, // Get reference to `ModalPortal` instance node
  }

  static defaultProps = {
    loaderTheme: 'MediumDark',
  }

  // Instance variables...
  isOutsideClickWaiting = false
  globalHandlersRegistered = false
  globalDomNode = document
  wrapperDomNode = null
  windowDomNode = null
  transitionTime = 0

  resolvingResult = null // Resulting action

  // Lifecycle...

  // typeId = 'ModalPortal'

  constructor(props) {
    super(props);
    // const popupsInited = config.modals.isInited
    this.state = {
      popupsInited: false,
      activated: false,
      open: false,
    };
    config.modals.initPromise.then(this.onPopupsInited);
    this.transitionTime = config.css.modalAnimateTime;
    this.modalType = props.type;
    if (typeof props.setPortalNode === 'function') {
      props.setPortalNode(this);
    }
    /* // UNUSED: Failed `ModalsContext` test implementation
     * const {
     *   modalsContainerNode, // ModalsContext Provider
     * } = props
     * console.log(modalsContainerNode)
     * debugger
     */
  }

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    if (!this.unregisterGlobalHandlers) {
      const error = new Error('ModalPortal: unregisterGlobalHandlers method is undefined');
      console.error(error); // eslint-disable-line no-console
      /*DEBUG*/ debugger; // eslint-disable-line no-debugger
      throw error; // ???
    }
    this.unregisterGlobalHandlers();
    this.mounted = false;
  }

  componentDidUpdate(prevProps, prevState) {
    const props = this.props;
    const state = this.state;
    // console.log('ModalPortal:componentDidUpdate', {
    //   'props.open': props.open,
    //   'state.open': state.open,
    // })
    if (props.open !== prevProps.open && props.open !== state.open) { // New open from props
      if (props.open) {
        this.activate(() => this.setState({ open: true }));
      }
      else {
        this.setState({ open: false });
      }
    }
    else if (state.open !== prevState.open) { // New open from state
      if (!state.activated) { // Is it real case (changing `open` on inactive modal?
        this.activate();
      }
      this.updateShowWithState();
    }
  }

  // External methods...

  getId = () => this.props.id
  getType = () => this.props.type

  isVisible = () => this.state.open

  activate = (cb) => {
    const { id, onActivate } = this.props;
    const { activated } = this.state;
    if (!activated) {
      // this.resolvingResult = null // Activating in `open` method
      // console.log('ModalPortal:activate', id, activated)
      this.setState({ activated: true }, () => {
        if (typeof cb === 'function') {
          cb();
        }
        if (typeof onActivate === 'function') {
          onActivate({ id });
        }
      });
      config.modals.containerNode.registerModal(this);
    }
    else if (typeof cb === 'function') {
      cb();
    }
  }

  deactivate = () => {
    const { id, onDeactivate } = this.props;
    const { activated } = this.state;
    if (activated) {
      // console.log('ModalPortal:deactivate', id)
      this.resolveResult(); // `resolvingResult` must be defined?
      if (this.mounted) {
        this.setState({ activated: false });
      }
      if (typeof onDeactivate === 'function') {
        onDeactivate({ id });
      }
      config.modals.containerNode.unregisterModal(this);
    }
  }

  toggle = (open) => { // External method for using in `ModalPortalStack`
    // const { id } = this.props
    // console.log('ModalPortal:toggle', this.props.id, open)
    if (open == null) {
      open = !this.state.open;
    }
    else if (open === this.state.open) {
      return false;
    }
    if (open) {
      this.open();
    }
    else {
      this.close();
    }
  }

  close = () => { // External method for using in `ModalPortalStack`
    const { open: prevOpen } = this.state;
    // console.log('ModalPortal:close', this.props.id, prevOpen)
    if (prevOpen) {
      this.setState({ open: false }, this.updateShowWithState);
    }
  }

  open = () => { // External method for using in `ModalPortalStack`
    const { open: prevOpen } = this.state;
    // console.log('ModalPortal:open', this.props.id, prevOpen);
    if (!prevOpen) {
      const open = true;
      this.resolvingResult = null; // Reset resolving action
      // First activate portal then enter into opening animation
      this.activate(() => {
        this.setState({ open }, this.updateShowWithState);
      });
      this.activate(() => this.setState({ open }, this.updateShowWithState));
    }
  }

  updateGeometry = () => null // External method stub? (For popups only?)

  // Helpers...

  registerGlobalHandlers() {
    const { globalDomNode, windowDomNode } = this;
    // const { closeOnClickOutside } = this.props
    if (!this.globalHandlersRegistered) {
      this.globalHandlersRegistered = true; // Set flag
      // console.log('ModalPortal:registerGlobalHandlers')
      if (!windowDomNode || !globalDomNode) {
        const error = new Error('ModalPortal: dom nodes is undefined on registerGlobalHandlers');
        console.error(error); // eslint-disable-line no-console
        /*DEBUG*/ debugger; // eslint-disable-line no-debugger
        throw error; // ???
      }
      /* // Update geometry (UNUSED)
       * document.addEventListener(globalScrollEventName, this.updateGeometry)
       * window.addEventListener(globalResizeEventName, this.updateGeometry)
       * if (!this.updateGeometryTimer && updateGeometryTimerDelay) {
       *   this.updateGeometryTimer = setInterval(this.updateGeometry, updateGeometryTimerDelay)
       * }
       */
      document.addEventListener(globalKeyPressEventName, this.onKeyPress);
      if (windowDomNode && globalDomNode) {
        globalDomNode.addEventListener(mouseDownEvent, this.startOutsideClickWaiting);
        windowDomNode.addEventListener(mouseUpEvent, this.stopOutsideClickWaiting);
      }
    }
  }

  unregisterGlobalHandlers() {
    const { globalDomNode, windowDomNode } = this;
    // TODO: Check for dom nodes exists during close process
    // const { closeOnClickOutside } = this.props
    if (this.globalHandlersRegistered) {
      this.globalHandlersRegistered = false; // Reset flag
      // console.log('ModalPortal:unregisterGlobalHandlers')
      // if (!windowDomNode || !globalDomNode) {
      //   const error = new Error('ModalPortal: dom nodes is undefined on unregisterGlobalHandlers')
      //   console.error(error) // eslint-disable-line no-console
      //   [>DEBUG<] debugger // eslint-disable-line no-debugger
      //   throw error // ???
      // }
      /* // Update geometry (UNUSED)
       * document.removeEventListener(globalScrollEventName, this.updateGeometry)
       * window.removeEventListener(globalResizeEventName, this.updateGeometry)
       * if (!this.updateGeometryTimer && updateGeometryTimerDelay) {
       *   this.updateGeometryTimer = setInterval(this.updateGeometry, updateGeometryTimerDelay)
       * }
       */
      document.removeEventListener(globalKeyPressEventName, this.onKeyPress);
      // if (windowDomNode && globalDomNode) {
      this.stopOutsideClickWaiting();
      globalDomNode && globalDomNode.removeEventListener(mouseDownEvent, this.startOutsideClickWaiting);
      windowDomNode && windowDomNode.removeEventListener(mouseUpEvent, this.stopOutsideClickWaiting);
      // }
    }
  }

  updateShowWithState = (state) => {
    const { open } = state || this.state;
    const { id, onOpen, onClose, handleOpenState } = this.props;
    if (open) {
      this.registerGlobalHandlers();
      if (typeof onOpen === 'function') {
        onOpen({ id });
      }
    }
    else {
      this.unregisterGlobalHandlers();
      if (typeof onClose === 'function') {
        onClose({ id });
      }
      setTimeout(this.deactivate, this.transitionTime); // TODO?
    }
    if (typeof handleOpenState === 'function') {
      handleOpenState({ id, open });
    }
  }

  onPopupsInited = () => {
    this.setState({ popupsInited: true });
    const { open } = this.props;
    if (open) { // Immediately open if passed open status
      // this.activate(() => this.setState({ open: true }))
      this.activate(() => this.setState({ open: true }), this.updateShowWithState);
    }
  }

  setResult(result) {
    this.resolvingResult = result;
  }

  resolveResult() { // Final method on close or on action event with autoClose mode
    const actionId = this.resolvingResult || externalCloseActionId;
    /* // UNUSED: Throw an error if actionId is undefined
     * if (!actionId) {
     *   const error = new Error('ModalPortal: resolving action is undefined')
     *   console.error(error) // eslint-disable-line no-console
     *   debugger // eslint-disable-line no-debugger
     *   throw error // ???
     * }
     */
    const { id, onAction } = this.props;
    if (typeof onAction === 'function') {
      onAction({ id: actionId, modalId: id });
    }
    this.resolvingResult = null; // Reset action back
  }

  // Handlers...

  onAction = (actionProps) => { // Event handler for ActionContext consumed children
    const actionId = actionProps.id;
    const { id, actionsContextNode, autoClose, closeOnCancelAction } = this.props;
    this.setResult(actionId);
    // console.log('ModalPortal:ModalPortal:onAction', id, actionId)
    if (autoClose || (closeOnCancelAction && actionId === 'cancel')) { // Close and call `resolveResult` when window is closed
      this.close();
    }
    else { // ...Or all `resolveResult` immediatelly
      this.resolveResult();
    }
    if (actionsContextNode && typeof actionsContextNode.onAction === 'function') { // Use chaining ActionsContext?
      actionsContextNode.onAction({ ...actionProps, modalPortalId: id });
    }
  }

  onKeyPress = (event) => {
    var {
      key,
      keyCode,
      charCode,
    } = event;
    const {
      id,
      onEscPressed,
      closeOnEscPressed,
      loading,
    } = this.props;
    // @see https://keycode.info/
    const isEscPressed = (key === 'Escape'); // (keyCode === 27);
    const cbProps = { event, id, key, keyCode, charCode };
    // console.log('ModalPortal:onKeyPress', cbProps);
    if (isEscPressed && !loading) {
      const isTopmost = config.modals.containerNode.isModalTopmostVisible(this);
      // console.log('ModalPortal:onKeyPress', id, isTopmost)
      if (isTopmost) {
        // event.stopPropagation()
        if (closeOnEscPressed) {
          this.setResult(selfCloseActionId);
          this.close();
        }
        if (typeof onEscPressed === 'function') {
          onEscPressed(cbProps);
        }
      }
    }
  }

  stopOutsideClickWaiting = (/* ev */) => { // Mouse released on window --> cancel waiting for mouse up on wrapper (don't close modal)
    const { globalDomNode, windowDomNode } = this;
    if (this.isOutsideClickWaiting /* && globalDomNode && windowDomNode */) {
      // console.log('ModalPortal:stopOutsideClickWaiting', ev && ev.type, ev && ev.currentTarget)
      globalDomNode && globalDomNode.removeEventListener(mouseUpEvent, this.onOutsideClickCatched);
      windowDomNode && windowDomNode.removeEventListener(mouseLeaveEvent, this.stopOutsideClickWaiting);
      this.isOutsideClickWaiting = false;
    }
  }
  startOutsideClickWaiting = () => { // Start waiting for mouse up on wrapper (close modal) or window (continue working)
    const { loading } = this.props;
    const isTopmost = config.modals.containerNode.isModalTopmostVisible(this);
    if (!loading && isTopmost) {
      const { globalDomNode, windowDomNode } = this;
      // console.log('ModalPortal:startOutsideClickWaiting')
      if (!this.isOutsideClickWaiting && globalDomNode && windowDomNode) { // Start waiting for
        this.isOutsideClickWaiting = true;
        globalDomNode.addEventListener(mouseUpEvent, this.onOutsideClickCatched);
        windowDomNode.addEventListener(mouseLeaveEvent, this.stopOutsideClickWaiting);
      }
    }
  }
  onOutsideClickCatched = () => { // Mouse released on wrapper --> close modal
    const { id, closeOnClickOutside, onClickOutside } = this.props;
    // console.log('ModalPortal:onOutsideClickCatched', id);
    this.stopOutsideClickWaiting();
    if (closeOnClickOutside) {
      this.setResult(selfCloseActionId);
      this.close();
    }
    if (typeof onClickOutside === 'function') {
      onClickOutside({ id });
    }
  }

  onCloseButtonClick = () => { // Mouse released on wrapper --> close modal
    const { id, closeWithCloseButton, onCloseButtonClick } = this.props;
    // console.log('ModalPortal:onCloseButtonClick')
    if (closeWithCloseButton) {
      this.setResult(selfCloseActionId);
      this.close();
    }
    if (typeof onCloseButtonClick === 'function') {
      onCloseButtonClick({ id });
    }
  }

  setWindowDomRef = (domNode) => {
    this.windowDomNode = domNode;
  }

  setWrapperDomRef = (domNode) => {
    this.wrapperDomNode = domNode;
  }

  // Render helpers...

  // Render...

  renderWindow() {
    const { windowWidth, windowTheme, theme, windowClassName, children } = this.props;
    const { wrapperDomNode, windowDomNode } = this;
    // console.log('ModalPortal:renderWindow', { windowWidth })
    // TODO: Pass windowDomNode to children?
    const childrenProps = {
      ModalPortal: this,
      windowDomNode,
      wrapperDomNode,
    };
    const isElement = React.isValidElement(children);
    const childrenType = typeof children;
    const isFunction = childrenType === 'function';
    // Extend element or call function with children' props
    const content = isElement ? React.cloneElement(children, childrenProps) :
      isFunction ? children(childrenProps) : children;
    return (
      <div
        className={cnModalPortal('Window', { width: windowWidth, theme: windowTheme || theme }, [windowClassName])}
        ref={this.setWindowDomRef}
      >
        {content}
      </div>
    );
  }

  renderLoader() {
    const { loading, loaderTheme, handleLoaderCancel } = this.props;
    return (
      <Loader mode="local" theme={loaderTheme} show={loading} onCancel={handleLoaderCancel} />
    );
  }

  renderModalPortal() {
    const { type, id, theme, wrapperTheme, className, wrapperClassName, useLoader, loading } = this.props;
    if (loading && !useLoader) {
      const error = new Error('ModalPortal: `useLoader` must be enabled for using `loading` prop');
      console.error(error); // eslint-disable-line no-console
      /*DEBUG*/ debugger; // eslint-disable-line no-debugger
      throw error; // ???
    }
    const { open } = this.state;
    return (
      <CSSTransition
        key={id}
        // id={id}
        timeout={this.transitionTime}
        in={open}
        classNames={cnModalPortal()} // Generate animation classes
      >
        <div
          className={cnModalPortal({ type, id }, [className])} // Root node
          ref={this.setRootDomRef}
        >
          <div
            className={cnModalPortal('Wrapper', { theme: wrapperTheme || theme }, [wrapperClassName])}
            ref={this.setWrapperDomRef}
          >
            {this.renderWindow()}
            {useLoader && this.renderLoader()}
          </div>
        </div>
      </CSSTransition>
    );
  }

  render() {
    const { popupsInited, activated } = this.state;
    const toDisplay = popupsInited && activated;
    if (!toDisplay) {
      return null;
    }
    const node = config.modals.domNode;
    if (!node) {
      const error = new Error('ModalPortal: config.modals.domNode is undefined. Don\'t forget to use WebUiCoreRoot with autoModalsContainer mode or render ModalsContainer manually.');
      console.error(error); // eslint-disable-line no-console
      /*DEBUG*/ debugger; // eslint-disable-line no-debugger
      throw error; // ???
    }
    // console.log('ModalPortal:render', this.props.children)
    return (
      <Portal node={node}>
        {this.renderModalPortal()}
      </Portal>
    );
  }

}

export default ModalPortal;
/* // UNUSED: Failed `ModalsContext` test implementation
 * export default compose(
 *   withModalsContext,
 * )(ModalPortal)
 */
