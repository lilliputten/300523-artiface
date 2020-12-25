/** @module Modal
 *  @class Modal
 *  @since 2020.12.21, 22:58
 *  @changed 2020.12.25, 15:30
 *
 *  External methods (for PopupStack):
 *  - close
 *  - open
 *  - updateGeometry
 */
/* --eslint-disable no-console */

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

import InlineIcon from 'elements/InlineIcon'
import Loader from 'elements/Loader'
import FormButton from 'forms/FormButton'

import { ActionsContextProvider } from 'helpers/ActionsContext'

import './Modal-Geometry.pcss'
import './Modal-Themes.pcss'
import './Modal-Transitions.pcss'

const cnModal = cn('Modal')

// const doDebug = false // DEBUG!

const mouseDownEvent = 'mousedown'
const mouseUpEvent = 'mouseup'
const mouseLeaveEvent = 'mouseleave'
const globalKeyPressEventName = 'keydown'

export const selfCloseActionId = '--modal-self-close--'
export const externalCloseActionId = '--modal-external-close--'

export default class Modal extends React.PureComponent /** @lends @Modal.prototype */ {

  // Props...

  static propTypes = {
    loading: PropTypes.bool, // Show Loader flashback
    onAction: PropTypes.func, // Event fired on action invoked (see `actions` prop)
    // registerCallback: PropTypes.func, // ??? registerCallback(handler = this.someMethod) -- handler stored by parent component and called when detected click on pulldown menu -- prevents popup content closing
    // setModalNodeRef: PropTypes.func, // ??? Demo?
    width: PropTypes.string, // Modal window width (predefined variants: xs, sm, md, lg, xl, xxl)
    handleLoaderCancel: PropTypes.func, // Loader onCancel event handler
    actions: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]), // Actions component(s) (TODO: `ActionsContext` must be used)
    closeOnCancelAction: PropTypes.bool, // Auto-close on `cancel` action event
    closeOnClickOutside: PropTypes.bool, // Close (cancel) modal by click outside modal window (on 'curtain')
    closeOnEscPressed: PropTypes.bool, // Close (cancel) modal on esc key pressed
    closeWithCloseButton: PropTypes.bool, // Close (cancel) modal by click on header 'Close' button
    icon: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]), // Show icon in header
    id: PropTypes.string, // Modal id
    leftContent: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]), // Content at left of main content and actions (ideal place for large visual icon)
    onActivate: PropTypes.func, // Event fired on activate (before open)
    onClickOutside: PropTypes.func, // Event fired on click outside modal
    onCloseButtonClick: PropTypes.func, // Event fired on header 'Close' button click
    onDeactivate: PropTypes.func, // Event fired on deactivate (unmounting from dom)
    onEscPressed: PropTypes.func, // Event fired on esc key pressed
    onOpen: PropTypes.func, // Event fired on modal open
    onClose: PropTypes.func, // Event fired on modal close
    handleOpenState: PropTypes.func, // Event fired on modal open state change (update external open/close state) ({ open, id } => void)
    open: PropTypes.bool, // Show modal by default
    showCloseButton: PropTypes.bool, // Display close button in header
    title: PropTypes.string, // Modal title
    className: PropTypes.string, // Modal class name
    contentClassName: PropTypes.string, // Content element class name
    windowClassName: PropTypes.string, // Modal window class name
    wrapperClassName: PropTypes.string, // Modal wrapper class name
    theme: PropTypes.string, // Modal theme (default theme for all other themed elements, see `*Theme`)
    iconTheme: PropTypes.string, // Icon theme (using `theme` if not specified)
    windowTheme: PropTypes.string, // Window theme (using `theme` if not specified)
    headerTheme: PropTypes.string, // Header theme (using `theme` if not specified)
    wrapperTheme: PropTypes.string, // Wrapper (back-curtain) theme (using `theme` if not specified)
    loaderTheme: PropTypes.string, // Loader theme ('MediumDark' is default)
  }

  static defaultProps = {
    closeOnClickOutside: true, // Close (with `selfCloseActionId` action id) modal by outisde-click.
    closeOnEscPressed: true, // Close (with `selfCloseActionId` action id) modal by esc-key.
    closeWithCloseButton: true, // Close (with `selfCloseActionId` action id) with 'Close button' (if present in layout -- see `showCloseButton`)
    loaderTheme: 'MediumDark',
    showCloseButton: false, // Display 'Close button'?
  }

  // Instance variables...
  isOutsideClickWaiting = false
  globalHandlersRegistered = false
  wrapperDomNode = null
  windowDomNode = null
  transitionTime = 0

  resolvingAction = null // Resulting action

  // Lifecycle...

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
      // console.log('Modal:activate', id, activated)
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
      // console.log('Modal:deactivate', id)
      this.resolveAction() // `resolvingAction` must be defined?
      if (typeof onDeactivate === 'function') {
        onDeactivate({ id })
      }
      this.setState({ activated: false })
    }
  }

  toggle = () => { // External method for using in `ModalStack`
    // const { id } = this.props
    const { open } = this.state
    // console.log('Modal:ctoggle', id, open)
    if (open) {
      this.close()
    }
    else {
      this.open()
    }
  }

  close = () => { // External method for using in `ModalStack`
    const { id, onClose, handleOpenState } = this.props
    const { open } = this.state
    // console.log('Modal:close', id, open)
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

  open = () => { // External method for using in `ModalStack`
    const { id, onOpen, handleOpenState } = this.props
    const { open } = this.state
    // console.log('Modal:open', id, open)
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

  updateGeometry = () => null // External method stub

  // Helpers...

  registerGlobalHandlers() {
    const { windowDomNode, wrapperDomNode } = this
    // const { closeOnClickOutside } = this.props
    if (!this.globalHandlersRegistered) {
      this.globalHandlersRegistered = true // Set flag
      // console.log('registerGlobalHandlers')
      if (!windowDomNode || !wrapperDomNode) {
        const error = new Error('Modal: dom nodes is undefined on registerGlobalHandlers')
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
        const error = new Error('Modal: dom nodes is undefined on unregisterGlobalHandlers')
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
     *   const error = new Error('Modal: resolving action is undefined')
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
    // console.log('Modal:onAction', id, actionId)
    if (autoClose || (closeOnCancelAction && actionId === 'cancel')) { // Close and call `resolveAction` when window is closed
      this.close()
    }
    else { // ...Or all `resolveAction` immediatelly
      this.resolveAction()
    }
    if (actionsContextNode && typeof actionsContextNode.onAction) {
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
    const { loading } = this.props
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

  renderHeaderIcon() {
    const { icon, iconTheme } = this.props
    const theme = iconTheme || this.props.theme
    const showIcon = icon || theme && config.ui.defaultIcons[theme]
    return showIcon && (
      <div key="HeaderIcon" className={cnModal('HeaderIcon', { theme })}>
        <InlineIcon theme={theme} icon={showIcon} />
      </div>
    )
  }
  renderHeaderTitle() {
    const { title } = this.props
    return title && (
      <div key="HeaderTitle" className={cnModal('HeaderTitle')}>
        {title}
      </div>
    )
  }
  renderHeaderCloseButton() {
    const { showCloseButton } = this.props
    return showCloseButton && (
      <div key="HeaderCloseButton" className={cnModal('HeaderCloseButton')}>
        <FormButton
          icon="faTimes"
          largeIcon
          plain
          title="Close window" // TODO; Translate?
          onClick={this.onCloseButtonClick}
        />
        {/* <InlineIcon icon="faTimes" /> */}
      </div>
    )
  }

  renderHeader() {
    const { headerTheme, theme } = this.props
    const content = [
      this.renderHeaderIcon(),
      this.renderHeaderTitle(),
      this.renderHeaderCloseButton(),
    ].filter(Boolean)
    const hasHeader = !!(content && content.length)
    return hasHeader && (
      <div className={cnModal('Header', { theme: headerTheme || theme })}>
        {content}
      </div>
    )
  }

  renderLeftContent() {
    const { leftContent } = this.props
    return leftContent && (
      <div className={cnModal('LeftContent')}>
        {leftContent}
      </div>
    )
  }

  renderContent() {
    const { children, contentClassName } = this.props
    // {[> <div className={cnModal('Container')}> <]}
    // {[> </div> <]}
    return children && (
      <div className={cnModal('Content', [ contentClassName ])}>
        {children}
      </div>
    )
  }

  renderActions() {
    const { actions } = this.props
    return actions && (
      <div className={cnModal('Actions')}>
        <ActionsContextProvider value={this}>
          {actions}
        </ActionsContextProvider>
      </div>
    )
  }

  renderWindow() {
    const { width, windowTheme, theme, windowClassName } = this.props
    return (
      <div
        className={cnModal('Window', { width, theme: windowTheme || theme }, [windowClassName])}
        ref={this.setWindowDomRef}
      >
        {this.renderHeader()}
        <div className={cnModal('Layout')}>
          {this.renderLeftContent()}
          <div className={cnModal('Main')}>
            {this.renderContent()}
            {this.renderActions()}
          </div>
          {/* renderRightContent? */}
        </div>
      </div>
    )
  }

  renderLoader() {
    const { loading, loaderTheme, handleLoaderCancel } = this.props
    return (
      <Loader mode="local" theme={loaderTheme} show={loading} onCancel={handleLoaderCancel} />
    )
  }

  renderModal() {
    const { id, theme, wrapperTheme, className, wrapperClassName } = this.props
    const { open } = this.state
    // console.log('Modal:renderModal', { id, open })
    return (
      <CSSTransition
        key={id}
        // id={id}
        timeout={this.transitionTime}
        in={open}
        classNames={cnModal()}
      >
        <div
          className={cnModal({ id }, [className])}
          ref={this.setRootDomRef}
        >
          <div
            className={cnModal('Wrapper', { theme: wrapperTheme || theme }, [wrapperClassName])}
            ref={this.setWrapperDomRef}
          >
            {this.renderWindow()}
            {this.renderLoader()}
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
        {this.renderModal()}
      </Portal>
    )
  }

}
