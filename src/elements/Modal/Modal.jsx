/** @module Modal
 *  @class Modal
 *  @since 2020.12.21, 22:58
 *  @changed 2020.12.24, 03:06
 *
 *  External methods (for PopupStack):
 *  - close
 *  - open
 *  - updateGeometry
 */
/* --eslint-disable no-console */

import React from 'react'
import PropTypes from 'prop-types'
// import connect from 'react-redux/es/connect/connect'
import { cn } from 'utils/configure'
// import withOnClickOutside from 'react-onclickoutside' // To use?
// import { strings } from 'utils'
// import { debounce } from 'throttle-debounce'
// import { PortalWithState } from 'react-portal'
import { Portal } from 'react-portal'
import { // Transitions...
  // Transition,
  CSSTransition,
  // TransitionGroup,
} from 'react-transition-group'
import config from 'config'

import InlineIcon from 'elements/InlineIcon'
import FormButton from 'forms/FormButton'

import './Modal-Geometry.pcss'
import './Modal-Themes.pcss'
import './Modal-Transitions.pcss'

const cnModal = cn('Modal')

// const doDebug = false // DEBUG!

const mouseDownEvent = 'mousedown'
const mouseUpEvent = 'mouseup'
const mouseLeaveEvent = 'mouseleave'
const globalKeyPressEventName = 'keydown'

// // Unused events:
// const globalScrollEventName = 'scroll'
// const globalResizeEventName = 'resize'

/* // DEBUG: Demo for prevent closing underlaying popups. (Can be used for modal windows. See crrsp styles & html layout.)
 * const debugHide = document.getElementById('DebugHide')
 * setTimeout(() => {
 *   if (debugHide) {
 *     debugHide.style.display = 'block'
 *   }
 * }, 3000)
 * const debugHideListener = (ev) => {
 *   // ev.stopImmediatePropagation()
 *   ev.stopPropagation()
 * }
 * debugHide && debugHide.addEventListener('click', debugHideListener)
 */

class Modal extends React.PureComponent /** @lends @Modal.prototype */ {

  // Props...

  static propTypes = {
    // loading: PropTypes.bool, // Show Loader flashback
    // onAction: PropTypes.func, // Event fired on action invoked (see `actions` prop)
    // registerCallback: PropTypes.func, // ??? registerCallback(handler = this.someMethod) -- handler stored by parent component and called when detected click on pulldown menu -- prevents popup content closing
    // setModalNodeRef: PropTypes.func, // ??? Demo?
    // size: PropTypes.string, // Modal window width (predefined variants: xs, sm, md, lg, xl, xxl)
    actions: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]), // Actions component(s) (TODO: `ActionsContext` must be used)
    className: PropTypes.string, // Modal class name
    closeOnClickOutside: PropTypes.bool, // Close (cancel) modal by click outside modal window (on 'curtain')
    closeOnEscPressed: PropTypes.bool, // Close (cancel) modal on esc key pressed
    closeWithCloseButton: PropTypes.bool, // Close (cancel) modal by click on header 'Close' button
    content: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]), // Main modal content
    icon:  PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]), // Show icon in header
    id: PropTypes.string, // Modal id
    leftContent: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]), // Content at left of main content and actions (ideal place for large visual icon)
    onActivate: PropTypes.func, // Event fired on activate (before show)
    onCancel: PropTypes.func, // Event fired on forced close (by click-outside, esc-pressed or close-button)
    onClickOutside: PropTypes.func, // Event fired on click outside modal
    onClose: PropTypes.func, // Event fired on modal close
    onCloseButtonClick: PropTypes.func, // Event fired on header 'Close' button click
    onDeactivate: PropTypes.func, // Event fired on deactivate (unmounting from dom)
    onEscPressed: PropTypes.func, // Event fired on esc key pressed
    onOpen: PropTypes.func, // Event fired on modal open
    show: PropTypes.bool, // Show modal by default
    showCloseButton: PropTypes.bool, // Display close button in header
    title: PropTypes.string, // Modal title
    windowClassName: PropTypes.string, // Modal window class name
    wrapperClassName: PropTypes.string, // Modal wrapper class name
    theme: PropTypes.string, // Modal theme (default theme for all other themed elements, see `*Theme`)
    iconTheme: PropTypes.string, // Icon theme (using `theme` if not specified)
    windowTheme: PropTypes.string, // Window theme (using `theme` if not specified)
    headerTheme: PropTypes.string, // Header theme (using `theme` if not specified)
    wrapperTheme: PropTypes.string, // Wrapper (back-curtain) theme (using `theme` if not specified)
  }

  static defaultProps = {
    closeOnClickOutside: true, // Close (cancel, with `onCancel` event) modal by outisde-click.
    closeOnEscPressed: true, // Close (cancel, with `onCancel` event) modal by esc-key.
    closeWithCloseButton: true, // Close (cancel, with `onCancel` event) with 'Close button' (if present in layout -- see `showCloseButton`) show: false, // Show modal by default
    showCloseButton: false, // Display 'Close button'?
  }

  // Instance variables...
  isOutsideClickWaiting = false
  globalHandlersRegistered = false
  wrapperDomNode = null
  windowDomNode = null
  transitionTime = 0

  // Lifecycle...

  constructor(props) {
    super(props)
    // const popupsInited = config.popups.isInited
    this.state = {
      popupsInited: false,
      active: false,
      show: false,
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
    if (props.show !== prevProps.show && props.show !== state.show) { // New show from props
      if (props.show) {
        this.activate(() => this.setState({ show: true }))
      }
      else {
        this.setState({ show: false })
      }
    }
    else if (state.show !== prevState.show) { // New show from state
      if (!state.active) { // Is it real case (changing `show` on inactive modal?
        this.activate()
      }
      this.updateShowWithState()
    }
  }

  // External methods...

  isVisible = () => {
    return this.state.show
  }

  activate = (cb) => {
    const { id, onActivate } = this.props
    const { active } = this.state
    if (!active) {
      // console.log('Modal:activate', id, active)
      this.setState({ active: true }, () => {
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
    const { active } = this.state
    if (active) {
      // console.log('Modal:deactivate', id)
      this.setState({ active: false }, () => {
        if (typeof onDeactivate === 'function') {
          onDeactivate({ id })
        }
      })
    }
  }

  toggle = () => { // External method for using in `ModalStack`
    // const { id } = this.props
    const { show } = this.state
    // console.log('Modal:ctoggle', id, show)
    if (show) {
      this.close()
    }
    else {
      this.open()
    }
  }

  close = () => { // External method for using in `ModalStack`
    const { id, onClose } = this.props
    const { show } = this.state
    // console.log('Modal:close', id, show)
    if (show) {
      this.setState({ show: false }, (state) => {
        this.updateShowWithState(state)
        setTimeout(this.deactivate, this.transitionTime) // TODO?
      })
      if (typeof onClose === 'function') {
        onClose({ id })
      }
    }
  }

  open = () => { // External method for using in `ModalStack`
    const { id, onOpen } = this.props
    const { show } = this.state
    // console.log('Modal:open', id, show)
    if (!show) {
      // First activate portal then enter into opening animation
      this.activate(() => {
        this.setState({ show: true }, () => {
          this.updateShowWithState()
          if (typeof onOpen === 'function') {
            onOpen({ id })
          }
        })
      })
      this.activate(() => this.setState({ show: true }, this.updateShowWithState))
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
    const { show } = state || this.state
    if (show) {
      this.registerGlobalHandlers()
    }
    else {
      this.unregisterGlobalHandlers()
    }
  }

  setPopupsInited = () => {
    this.setState({ popupsInited: true })
    const { show } = this.props
    if (show) { // Immediately open if passed show status
      this.activate(() => this.setState({ show: true }))
    }
  }

  // Handlers...

  onKeyPress = (event) => {
    var { keyCode } = event
    const {
      id,
      // onKeyPress,
      // onEnterPressed,
      onEscPressed,
      closeOnEscPressed,
      onCancel,
    } = this.props
    const isEscPressed = (keyCode === 27)
    const cbProps = { event, id, keyCode }
    // onKeyPress && onKeyPress(cbProps)
    if (isEscPressed) {
      if (closeOnEscPressed) {
        this.close()
        if (typeof onCancel === 'function') {
          onCancel({ id })
        }
      }
      if (typeof onEscPressed === 'function') {
        onEscPressed(cbProps)
      }
    }
  }

  stopOutsideClickWaiting = (/* ev */) => { // Mouse released on window --> cancel waiting for mouse up on wrapper (don't close modal)
    const { wrapperDomNode, windowDomNode } = this
    if (this.isOutsideClickWaiting && wrapperDomNode && windowDomNode) {
      // const type  = ev && ev.type
      // const target  = ev && ev.target
      // console.log('stopOutsideClickWaiting', type, target)
      wrapperDomNode.removeEventListener(mouseUpEvent, this.onOutsideClickDone)
      windowDomNode.removeEventListener(mouseLeaveEvent, this.stopOutsideClickWaiting)
      this.isOutsideClickWaiting = false
    }
  }
  startOutsideClickWaiting = () => { // Start waiting for mouse up on wrapper (close modal) or window (continue working)
    const { wrapperDomNode, windowDomNode } = this
    // console.log('startOutsideClickWaiting')
    if (!this.isOutsideClickWaiting && wrapperDomNode && windowDomNode) { // Start waiting for
      this.isOutsideClickWaiting = true
      wrapperDomNode.addEventListener(mouseUpEvent, this.onOutsideClickDone)
      windowDomNode.addEventListener(mouseLeaveEvent, this.stopOutsideClickWaiting)
    }
  }
  onOutsideClickDone = () => { // Mouse released on wrapper --> close modal
    const { id, closeOnClickOutside, onClickOutside, onCancel } = this.props
    // console.log('onOutsideClickDone')
    this.stopOutsideClickWaiting()
    if (closeOnClickOutside) {
      this.close()
      if (typeof onCancel === 'function') {
        onCancel({ id })
      }
    }
    if (typeof onClickOutside === 'function') {
      onClickOutside({ id })
    }
  }

  onCloseButtonClick = () => { // Mouse released on wrapper --> close modal
    const { id, closeWithCloseButton, onCloseButtonClick, onCancel } = this.props
    // console.log('onCloseButtonClick')
    if (closeWithCloseButton) {
      this.close()
      if (typeof onCancel === 'function') {
        onCancel({ id })
      }
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

  renderHeaderTitle() {
    const { title } = this.props
    return title && (
      <div className={cnModal('HeaderTitle')}>
        {title}
      </div>
    )
  }
  renderHeaderCloseButton() {
    const { showCloseButton } = this.props
    return showCloseButton && (
      <div className={cnModal('HeaderCloseButton')}>
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
  renderHeaderIcon() {
    const { icon, iconTheme } = this.props
    const theme = iconTheme || this.props.theme
    return icon && (
      <div className={cnModal('HeaderIcon', { theme })}>
        <InlineIcon theme={theme} icon={icon} />
      </div>
    )
  }

  renderHeader() {
    const { headerTheme, theme } = this.props
    return (
      <div className={cnModal('Header', { theme: headerTheme || theme })}>
        {this.renderHeaderIcon()}
        {this.renderHeaderTitle()}
        {this.renderHeaderCloseButton()}
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
    const { content } = this.props
    return content && (
      <div className={cnModal('Container')}>
        <div className={cnModal('Content')}>
          {content}
        </div>
      </div>
    )
  }

  renderActions() {
    const { actions } = this.props
    return actions && (
      <div className={cnModal('Actions')}>
        {actions}
      </div>
    )
  }

  renderWindow() {
    const { windowTheme, theme, windowClassName } = this.props
    return (
      <div
        className={cnModal('Window', { theme: windowTheme || theme }, [windowClassName])}
        ref={this.setWindowDomRef}
      >
        {this.renderHeader()}
        <div className={cnModal('Layout')}>
          {this.renderLeftContent()}
          <div className={cnModal('LayoutMain')}>
            {this.renderContent()}
            {this.renderActions()}
          </div>
        </div>
      </div>
    )
  }

  renderModal() {
    const { id, theme, wrapperTheme, className, wrapperClassName } = this.props
    const { show } = this.state
    // console.log('Modal:renderModal', { id, show })
    return (
      <CSSTransition
        key={id}
        // id={id}
        timeout={this.transitionTime}
        in={show}
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
            {/* TODO: Optional Loader */}
          </div>
        </div>
      </CSSTransition>
    )
  }

  render() {
    // const { id } = this.props
    const { popupsInited, active/* , show */ } = this.state
    const toDisplay = popupsInited && active
    // console.log('Modal:render', { id, popupsInited, active, show })
    return toDisplay && (
      <Portal node={config.popups.domNode}>
        {this.renderModal()}
      </Portal>
    )
  }

}

export default Modal
