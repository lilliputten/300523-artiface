/** @module Modal
 *  @class Modal
 *  @since 2020.12.21, 22:58
 *  @changed 2020.12.23, 00:43
 *
 *  External methods (for PopupStack):
 *  - close
 *  - open
 *  - updateGeometry
 */
/* eslint-disable no-console */

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

import './Modal.pcss'

const cnModal = cn('Modal')

// const doDebug = false // DEBUG!

const mouseDownEvent = 'mousedown'
const mouseUpEvent = 'mouseup'
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
    // actions: PropTypes.oneOfType([ PropTypes.array, PropTypes.object ]),
    // loading: PropTypes.bool, // Show Loader flashback
    // onAction: PropTypes.func,
    // onKeyPress: PropTypes.func,
    // registerCallback: PropTypes.func, // registerCallback(handler = this.someMethod) -- handler stored by parent component and called when detected click on pulldown menu -- prevents popup content closing
    // setModalNodeRef: PropTypes.func,
    // title: PropTypes.string,
    className: PropTypes.string,
    closeOnClickOutside: PropTypes.bool,
    closeOnEscPressed: PropTypes.bool,
    id: PropTypes.string,
    onActivate: PropTypes.func,
    onClickOutside: PropTypes.func,
    onClose: PropTypes.func,
    onDeactivate: PropTypes.func,
    onEscPressed: PropTypes.func,
    onOpen: PropTypes.func,
    show: PropTypes.bool,
    windowClassName: PropTypes.string,
    windowTheme: PropTypes.string,
    wrapperClassName: PropTypes.string,
    wrapperTheme: PropTypes.string,
  }

  static defaultProps = {
    // actions: null,
    // className: null,
    // loading: false,
    // onKeyPress: null,
    // popupContent: null,
    // popupControl: null,
    // registerCallback: null,
    // setModalNodeRef: null,
    // title: null,
    className: null,
    closeOnClickOutside: true,
    closeOnEscPressed: true,
    id: null,
    onActivate: null,
    onClickOutside: null,
    onClose: null,
    onDeactivate: null,
    onEscPressed: null,
    onOpen: null,
    show: false,
    windowClassName: null,
    windowTheme: null,
    wrapperClassName: null,
    wrapperTheme: null,
  }

  // Instance variables...

  waitForWrapperMouseUp = false
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
      console.log('Modal:activate', id, active)
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
      console.log('Modal:deactivate', id)
      this.setState({ active: false }, () => {
        if (typeof onDeactivate === 'function') {
          onDeactivate({ id })
        }
      })
    }
  }

  toggle = () => { // External method for using in `ModalStack`
    const { id } = this.props
    const { show } = this.state
    console.log('Modal:ctoggle', id, show)
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
    console.log('Modal:close', id, show)
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
    console.log('Modal:open', id, show)
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
      console.log('registerGlobalHandlers')
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
        wrapperDomNode.addEventListener(mouseDownEvent, this.onWrapperMouseDown)
        windowDomNode.addEventListener(mouseUpEvent, this.onWindowMouseUp)
      }
    }
  }

  unregisterGlobalHandlers() {
    const { windowDomNode, wrapperDomNode } = this
    // TODO: Check for dom nodes exists during close process
    // const { closeOnClickOutside } = this.props
    if (this.globalHandlersRegistered) {
      this.globalHandlersRegistered = false // Reset flag
      console.log('unregisterGlobalHandlers')
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
        if (this.waitForWrapperMouseUp) {
          wrapperDomNode.removeEventListener(mouseUpEvent, this.onWrapperMouseUp)
          this.waitForWrapperMouseUp = false
        }
        wrapperDomNode.removeEventListener(mouseDownEvent, this.onWrapperMouseDown)
        windowDomNode.removeEventListener(mouseUpEvent, this.onWindowMouseUp)
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
    this.setState({ show })
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
    } = this.props
    const isEscPressed = (keyCode === 27)
    const cbProps = { event, id, keyCode }
    // onKeyPress && onKeyPress(cbProps)
    if (isEscPressed) {
      onEscPressed && onEscPressed(cbProps)
      if (closeOnEscPressed) {
        this.close()
      }
    }
  }

  onWindowMouseUp = () => { // Mouse released on window --> cancel waiting for mouse up on wrapper (don't close modal)
    const { wrapperDomNode } = this
    console.log('onWindowMouseUp')
    if (wrapperDomNode && this.waitForWrapperMouseUp) {
      wrapperDomNode.removeEventListener(mouseUpEvent, this.onWrapperMouseUp)
      this.waitForWrapperMouseUp = false
    }
  }
  onWrapperMouseDown = () => { // Start waiting for mouse up on wrapper (close modal) or window (continue working)
    const { wrapperDomNode } = this
    console.log('onWrapperMouseDown')
    if (wrapperDomNode) { // Start waiting for
      this.waitForWrapperMouseUp = true
      wrapperDomNode.addEventListener(mouseUpEvent, this.onWrapperMouseUp)
    }
  }
  onWrapperMouseUp = () => { // Mouse released on wrapper --> close modal
    const { id, onClickOutside } = this.props
    console.log('onWrapperMouseUp')
    const { closeOnClickOutside } = this.props
    if (closeOnClickOutside) {
      this.close()
    }
    if (typeof onClickOutside === 'function') {
      onClickOutside({ id })
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

  renderModalWindow() {
    const { id, windowTheme, windowClassName } = this.props
    // const { show } = this.state
    return (
      <div
        id={id}
        className={cnModal('Window', { theme: windowTheme }, [windowClassName])}
        ref={this.setWindowDomRef}
      >
        Modal {id}
      </div>
    )
  }

  renderModal() {
    const { id, wrapperTheme, className, wrapperClassName } = this.props
    const { show } = this.state
    console.log('Modal:renderModal', { id, show })
    return (
      <CSSTransition
        key={id}
        id={id}
        timeout={this.transitionTime}
        in={show}
        classNames={cnModal()}
      >
        <div
          className={cnModal({ id }, [className])}
          ref={this.setRootDomRef}
        >
          <div
            className={cnModal('Wrapper', { theme: wrapperTheme }, [wrapperClassName])}
            ref={this.setWrapperDomRef}
          >
            {this.renderModalWindow()}
            {/* TODO: Optional Loader */}
          </div>
        </div>
      </CSSTransition>
    )
  }

  render() {
    const { id } = this.props
    const { popupsInited, active, show } = this.state
    const toDisplay = popupsInited && active
    console.log('Modal:render', { id, popupsInited, active, show })
    return toDisplay && (
      <Portal node={config.popups.domNode}>
        {this.renderModal()}
      </Portal>
    )
  }

}

export default Modal
