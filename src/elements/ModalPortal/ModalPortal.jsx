/** @module ModalPortal
 *  @class ModalPortal
 *  @since 2020.12.21, 22:58
 *  @changed 2020.12.25, 15:30
 *
 *  External methods (for PopupStack):
 *  - close
 *  - open
 *  - updateGeometry
 */
/* --eslint-disable no-console */

// TODO: Use ModalContext

import React from 'react'
import PropTypes from 'prop-types'
import { cn } from 'utils/configure'
import { Portal } from 'react-portal'
import { // Transitions...
  // Transition,
  CSSTransition,
  // TransitionGroup,
} from 'react-transition-group'
import config from 'config'

// import InlineIcon from 'elements/InlineIcon'
import Loader from 'elements/Loader'
// import FormButton from 'forms/FormButton'

// import { ActionsContextProvider } from 'helpers/ActionsContext' // TODO?

// import './ModalPortal-Geometry.pcss'
// import './ModalPortal-Themes.pcss'
// import './ModalPortal-Transitions.pcss'

const cnModalPortal = cn('ModalPortal')

// const doDebug = false // DEBUG!

const mouseDownEvent = 'mousedown'
const mouseUpEvent = 'mouseup'
const mouseLeaveEvent = 'mouseleave'
const globalKeyPressEventName = 'keydown'

export const selfCloseActionId = '--modal-portal-self-close--'
export const externalCloseActionId = '--modal-portal-external-close--'

export default class ModalPortal extends React.PureComponent /** @lends @ModalPortal.prototype */ {

  // Props...

  static propTypes = {
    useLoader: PropTypes.bool, // Use loader (see `loading`)
    loading: PropTypes.bool, // Show Loader flashback
    onAction: PropTypes.func, // Event fired on action invoked (see `actions` prop)
    // registerCallback: PropTypes.func, // ??? registerCallback(handler = this.someMethod) -- handler stored by parent component and called when detected click on pulldown menu -- prevents popup content closing
    // setModalPortalNodeRef: PropTypes.func, // ??? Demo?
    windowWidth: PropTypes.string, // (Modal only?) ModalPortal window width (predefined variants: xs, sm, md, lg, xl, xxl)
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
  }

  static defaultProps = {
    loaderTheme: 'MediumDark',
  }

  // Instance variables...
  isOutsideClickWaiting = false
  globalHandlersRegistered = false
  wrapperDomNode = null
  windowDomNode = null
  transitionTime = 0

  resolvingAction = null // Resulting action

  // Lifecycle...

  typeId = 'ModalPortal'

  constructor(props) {
    super(props)
    // const popupsInited = config.popups.isInited
    this.state = {
      popupsInited: false,
      activated: false,
      open: false,
    }
    config.popups.initPromise.then(this.setPopupsInited)
    this.transitionTime = config.css.modalAnimateTime
  }

  componentWillUnmount() {
    this.unregisterGlobalHandlers()
  }

  componentDidUpdate(prevProps, prevState) {
    const props = this.props
    const state = this.state
    if (props.open !== prevProps.open && props.open !== state.open) { // New open from props
      if (props.open) {
        this.activate(() => this.setState({ open: true }))
      }
      else {
        this.setState({ open: false })
      }
    }
    else if (state.open !== prevState.open) { // New open from state
      if (!state.activated) { // Is it real case (changing `open` on inactive modal?
        this.activate()
      }
      this.updateShowWithState()
    }
  }

  // External methods...

  isVisible = () => {
    return this.state.open
  }

  activate = (cb) => {
    const { id, onActivate } = this.props
    const { activated } = this.state
    if (!activated) {
      // this.resolvingAction = null // Activating in `open` method
      // console.log('ModalPortal:activate', id, activated)
      this.setState({ activated: true }, () => {
        if (typeof cb === 'function') {
          cb()
        }
        if (typeof onActivate === 'function') {
          onActivate({ id })
        }
      })
    }
    else if (typeof cb === 'function') {
      cb()
    }
  }

  deactivate = () => {
    const { id, onDeactivate } = this.props
    const { activated } = this.state
    if (activated) {
      // console.log('ModalPortal:deactivate', id)
      this.resolveAction() // `resolvingAction` must be defined?
      if (typeof onDeactivate === 'function') {
        onDeactivate({ id })
      }
      this.setState({ activated: false })
    }
  }

  toggle = () => { // External method for using in `ModalPortalStack`
    // const { id } = this.props
    const { open } = this.state
    // console.log('ModalPortal:ctoggle', id, open)
    if (open) {
      this.close()
    }
    else {
      this.open()
    }
  }

  close = () => { // External method for using in `ModalPortalStack`
    const { id, onClose, handleOpenState } = this.props
    const { open } = this.state
    // console.log('ModalPortal:close', id, open)
    if (open) {
      this.setState({ open: false }, (state) => {
        this.updateShowWithState(state)
        setTimeout(this.deactivate, this.transitionTime) // TODO?
      })
      if (typeof onClose === 'function') {
        onClose({ id })
      }
      if (typeof handleOpenState === 'function') {
        handleOpenState({ id, open: false })
      }
    }
  }

  open = () => { // External method for using in `ModalPortalStack`
    const { id, onOpen, handleOpenState } = this.props
    const { open } = this.state
    // console.log('ModalPortal:open', id, open)
    if (!open) {
      this.resolvingAction = null // Reset resolving action
      // First activate portal then enter into opening animation
      this.activate(() => {
        this.setState({ open: true }, () => {
          this.updateShowWithState()
          if (typeof onOpen === 'function') {
            onOpen({ id })
          }
          if (typeof handleOpenState === 'function') {
            handleOpenState({ id, open: true })
          }
        })
      })
      this.activate(() => this.setState({ open: true }, this.updateShowWithState))
    }
  }

  updateGeometry = () => null // External method stub? (For popups only?)

  // Helpers...

  registerGlobalHandlers() {
    const { windowDomNode, wrapperDomNode } = this
    // const { closeOnClickOutside } = this.props
    if (!this.globalHandlersRegistered) {
      this.globalHandlersRegistered = true // Set flag
      // console.log('registerGlobalHandlers')
      if (!windowDomNode || !wrapperDomNode) {
        const error = new Error('ModalPortal: dom nodes is undefined on registerGlobalHandlers')
        console.error(error) // eslint-disable-line no-console
        debugger // eslint-disable-line no-debugger
        throw error // ???
      }
      /* // Update geometry (UNUSED)
       * document.addEventListener(globalScrollEventName, this.updateGeometry)
       * window.addEventListener(globalResizeEventName, this.updateGeometry)
       * if (!this.updateGeometryTimer && updateGeometryTimerDelay) {
       *   this.updateGeometryTimer = setInterval(this.updateGeometry, updateGeometryTimerDelay)
       * }
       */
      document.addEventListener(globalKeyPressEventName, this.onKeyPress)
      if (windowDomNode && wrapperDomNode) {
        wrapperDomNode.addEventListener(mouseDownEvent, this.startOutsideClickWaiting)
        windowDomNode.addEventListener(mouseUpEvent, this.stopOutsideClickWaiting)
      }
    }
  }

  unregisterGlobalHandlers() {
    const { windowDomNode, wrapperDomNode } = this
    // TODO: Check for dom nodes exists during close process
    // const { closeOnClickOutside } = this.props
    if (this.globalHandlersRegistered) {
      this.globalHandlersRegistered = false // Reset flag
      // console.log('unregisterGlobalHandlers')
      if (!windowDomNode || !wrapperDomNode) {
        const error = new Error('ModalPortal: dom nodes is undefined on unregisterGlobalHandlers')
        console.error(error) // eslint-disable-line no-console
        debugger // eslint-disable-line no-debugger
        throw error // ???
      }
      /* // Update geometry (UNUSED)
       * document.removeEventListener(globalScrollEventName, this.updateGeometry)
       * window.removeEventListener(globalResizeEventName, this.updateGeometry)
       * if (!this.updateGeometryTimer && updateGeometryTimerDelay) {
       *   this.updateGeometryTimer = setInterval(this.updateGeometry, updateGeometryTimerDelay)
       * }
       */
      document.removeEventListener(globalKeyPressEventName, this.onKeyPress)
      if (windowDomNode && wrapperDomNode) {
        this.stopOutsideClickWaiting()
        wrapperDomNode.removeEventListener(mouseDownEvent, this.startOutsideClickWaiting)
        windowDomNode.removeEventListener(mouseUpEvent, this.stopOutsideClickWaiting)
      }
    }
  }

  updateShowWithState = (state) => {
    const { open } = state || this.state
    if (open) {
      this.registerGlobalHandlers()
    }
    else {
      this.unregisterGlobalHandlers()
    }
  }

  setPopupsInited = () => {
    this.setState({ popupsInited: true })
    const { open } = this.props
    if (open) { // Immediately open if passed open status
      this.activate(() => this.setState({ open: true }))
    }
  }

  resolveAction() { // Final method on close or on action event with autoClose mode
    const actionId = this.resolvingAction || externalCloseActionId
    /* // UNUSED: Throw an error if actionId is undefined
     * if (!actionId) {
     *   const error = new Error('ModalPortal: resolving action is undefined')
     *   console.error(error) // eslint-disable-line no-console
     *   debugger // eslint-disable-line no-debugger
     *   throw error // ???
     * }
     */
    const { id, onAction } = this.props
    if (typeof onAction === 'function') {
      onAction({ id: actionId, modalId: id })
    }
    this.resolvingAction = null // Reset action back
  }

  // Handlers...

  onAction = (actionProps) => { // Event handler for ActionContext consumed children
    const actionId = actionProps.id
    const { /* id, */ actionsContextNode, autoClose, closeOnCancelAction } = this.props
    this.resolvingAction = actionId
    // console.log('ModalPortal:onAction', id, actionId)
    if (autoClose || (closeOnCancelAction && actionId === 'cancel')) { // Close and call `resolveAction` when window is closed
      this.close()
    }
    else { // ...Or all `resolveAction` immediatelly
      this.resolveAction()
    }
    if (actionsContextNode && typeof actionsContextNode.onAction) { // Use chaining ActionsContext?
      actionsContextNode.onAction(actionProps)
    }
  }

  onKeyPress = (event) => {
    const {
      id,
      onEscPressed,
      closeOnEscPressed,
      loading,
    } = this.props
    if (!loading) {
      var { keyCode } = event
      const isEscPressed = (keyCode === 27)
      const cbProps = { event, id, keyCode }
      if (isEscPressed) {
        if (closeOnEscPressed) {
          this.resolvingAction = selfCloseActionId
          this.close()
        }
        if (typeof onEscPressed === 'function') {
          onEscPressed(cbProps)
        }
      }
    }
  }

  stopOutsideClickWaiting = (/* ev */) => { // Mouse released on window --> cancel waiting for mouse up on wrapper (don't close modal)
    const { wrapperDomNode, windowDomNode } = this
    if (this.isOutsideClickWaiting && wrapperDomNode && windowDomNode) {
      // const type = ev && ev.type
      // const target = ev && ev.target
      // console.log('stopOutsideClickWaiting', type, target)
      wrapperDomNode.removeEventListener(mouseUpEvent, this.onOutsideClickDone)
      windowDomNode.removeEventListener(mouseLeaveEvent, this.stopOutsideClickWaiting)
      this.isOutsideClickWaiting = false
    }
  }
  startOutsideClickWaiting = () => { // Start waiting for mouse up on wrapper (close modal) or window (continue working)
    const { useLoader, loading } = this.props
    if (!loading) {
      const { wrapperDomNode, windowDomNode } = this
      // console.log('startOutsideClickWaiting')
      if (!this.isOutsideClickWaiting && wrapperDomNode && windowDomNode) { // Start waiting for
        this.isOutsideClickWaiting = true
        wrapperDomNode.addEventListener(mouseUpEvent, this.onOutsideClickDone)
        windowDomNode.addEventListener(mouseLeaveEvent, this.stopOutsideClickWaiting)
      }
    }
  }
  onOutsideClickDone = () => { // Mouse released on wrapper --> close modal
    const { id, closeOnClickOutside, onClickOutside } = this.props
    // console.log('onOutsideClickDone')
    this.stopOutsideClickWaiting()
    if (closeOnClickOutside) {
      this.resolvingAction = selfCloseActionId
      this.close()
    }
    if (typeof onClickOutside === 'function') {
      onClickOutside({ id })
    }
  }

  onCloseButtonClick = () => { // Mouse released on wrapper --> close modal
    const { id, closeWithCloseButton, onCloseButtonClick } = this.props
    // console.log('onCloseButtonClick')
    if (closeWithCloseButton) {
      this.resolvingAction = selfCloseActionId
      this.close()
    }
    if (typeof onCloseButtonClick === 'function') {
      onCloseButtonClick({ id })
    }
  }

  setWindowDomRef = (domNode) => {
    this.windowDomNode = domNode
  }

  setWrapperDomRef = (domNode) => {
    this.wrapperDomNode = domNode
  }

  // Render helpers...

  // Render...

  renderWindow() {
    const { windowWidth, windowTheme, theme, windowClassName, children } = this.props
    // TODO: Pass windowDomNode to children?
    // TODO: Determine children type (function, element)?
    const childrenProps = {
      ModalPortal: this,
    }
    const isElement = React.isValidElement(children)
    const childrenType = typeof children
    const isFunction = childrenType === 'function'
    const content = isElement ? React.cloneElement(children, childrenProps) :
      isFunction ? children(childrenProps) : children
    return (
      <div
        className={cnModalPortal('Window', { windowWidth, theme: windowTheme || theme }, [windowClassName])}
        ref={this.setWindowDomRef}
      >
        {content}
      </div>
    )
  }

  renderLoader() {
    const { loading, loaderTheme, handleLoaderCancel } = this.props
    return (
      <Loader mode="local" theme={loaderTheme} show={loading} onCancel={handleLoaderCancel} />
    )
  }

  renderModalPortal() {
    const { id, theme, wrapperTheme, className, wrapperClassName, useLoader } = this.props
    const { open } = this.state
    // console.log('ModalPortal:renderModalPortal', { id, open })
    return (
      <CSSTransition
        key={id}
        // id={id}
        timeout={this.transitionTime}
        in={open}
        classNames={cnModalPortal()} // To generate animations
      >
        <div
          className={cnModalPortal({ id }, [className])} // Root node
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
    )
  }

  render() {
    const { popupsInited, activated } = this.state
    const toDisplay = popupsInited && activated
    return toDisplay && (
      <Portal node={config.popups.domNode}>
        {this.renderModalPortal()}
      </Portal>
    )
  }

}
