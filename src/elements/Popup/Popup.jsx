/** @module Popup
 *  @class Popup
 *  @since 2020.10.27, 00:39
 *  @changed 2020.10.29, 03:14
 */

import React from 'react'
import PropTypes from 'prop-types'
// import connect from 'react-redux/es/connect/connect'
import { cn } from 'utils'
// import withOnClickOutside from 'react-onclickoutside' // To use?

import './Popup.pcss'

const cnPopup = cn('Popup')

const delayedClickTimeout = 200
const globalClickEventName = 'mousedown'
const globalKeyPressEventName = 'keydown'

class Popup extends React.PureComponent /** @lends @Popup.prototype */ {

  static propTypes = {
    className: PropTypes.string,
    // closeOnClickOutside: PropTypes.oneOfType([ PropTypes.bool, PropTypes.string ]), // true, false, 'force'
    closeOnClickOutside: PropTypes.bool,
    closeOnEscPressed: PropTypes.bool,
    id: PropTypes.string,
    onControlClick: PropTypes.func,
    onEscPressed: PropTypes.func,
    onKeyPress: PropTypes.func,
    popupContent: PropTypes.oneOfType([ PropTypes.func, PropTypes.object ]).isRequired,
    popupControl: PropTypes.oneOfType([ PropTypes.func, PropTypes.object ]).isRequired,
    registerHideStopper: PropTypes.func, // registerHideStopper(handler = this.clearDelayedClickTimerHandler) -- handler stored by parent component and called when detected click on pulldown menu -- prevents popup content closing
    showPopup: PropTypes.bool,
  }

  static defaultProps = {
    className: null,
    closeOnClickOutside: true,
    closeOnEscPressed: true,
    id: null,
    onControlClick: null,
    onEscPressed: null,
    onKeyPress: null,
    // popupContent: null,
    // popupControl: null,
    registerHideStopper: null,
    showPopup: false,
  }

  delayedClickTimerHandler = null
  globalHandlersRegistered = false

  // Helpers...

  delayedGlobalClickHandler = () => { // Close popup
    // console.log('Popup:delayedGlobalClickHandler')
    this.setState({ show: false })
  }

  clearDelayedClickTimerHandler = () => {
    // console.log('Popup:clearDelayedClickTimerHandler', this.delayedClickTimerHandler)
    if (this.delayedClickTimerHandler) {
      clearTimeout(this.delayedClickTimerHandler)
      this.delayedClickTimerHandler = null
    }
  }

  globalClickHandler = () => {
    // console.log('Popup:globalClickHandler (set handler)', this.delayedClickTimerHandler)
    this.clearDelayedClickTimerHandler()
    this.delayedClickTimerHandler = setTimeout(this.delayedGlobalClickHandler, delayedClickTimeout)
  }

  globalKeyPressHandler = (event) => {
    var { keyCode } = event
    const {
      id,
      onKeyPress,
      onEscPressed,
      closeOnEscPressed,
    } = this.props
    const cbProps = { event, id, keyCode }
    if (typeof onKeyPress === 'function') {
      onKeyPress(cbProps)
    }
    const isEsc = keyCode === 27 // Esc?
    if (isEsc) {
      if (typeof onEscPressed === 'function') {
        onEscPressed(cbProps)
      }
      if (closeOnEscPressed) {
        this.setState({ show: false })
      }
    }
  }

  registerGlobalClickHandler() {
    // window?
    document.addEventListener(globalClickEventName, this.globalClickHandler)
  }

  unregisterGlobalClickHandler() {
    this.clearDelayedClickTimerHandler()
    document.removeEventListener(globalClickEventName, this.globalClickHandler)
  }

  registerGlobalKeyPressHandler() {
    document.addEventListener(globalKeyPressEventName, this.globalKeyPressHandler)
  }

  unregisterGlobalKeyPressHandler() {
    document.removeEventListener(globalKeyPressEventName, this.globalKeyPressHandler)
  }

  registerGlobalHandlers() {
    if (!this.globalHandlersRegistered) {
      const { closeOnClickOutside/* , closeOnEscPressed */ } = this.props
      closeOnClickOutside && this.registerGlobalClickHandler()
      /* closeOnEscPressed && */ this.registerGlobalKeyPressHandler()
      this.globalHandlersRegistered = true
    }
  }
  unregisterGlobalHandlers() {
    if (this.globalHandlersRegistered) {
      const { closeOnClickOutside/* , closeOnEscPressed */ } = this.props
      closeOnClickOutside && this.unregisterGlobalClickHandler()
      /* closeOnEscPressed && */ this.unregisterGlobalKeyPressHandler()
      this.globalHandlersRegistered = false
    }
  }

  updateGlobalClickHandlerByState = (state) => {
    const { show } = state
    if (show) {
      this.registerGlobalHandlers()
    }
    else {
      this.unregisterGlobalHandlers()
    }
  }

  // Lifecycle...

  constructor(props) {
    super(props)
    const { showPopup, registerHideStopper } = props
    this.state = {
      // show: false, // Is content element displaying now?
      // wasShown: false, // Memorized state: did content element once displayed?
      show: showPopup, // Is content element displaying now?
      wasShown: showPopup, // Memorized state: did content element once displayed?
    }
    if (typeof registerHideStopper === 'function') { // External hide canceler (FormSelect: on Menu click etc)
      registerHideStopper(this.clearDelayedClickTimerHandler)
    }
  }

  componentDidMount() {
    const { show } = this.state
    if (show) {
      this.registerGlobalHandlers()
    }
  }

  componentWillUnmount() {
    this.unregisterGlobalHandlers()
    // TODO: unregisterHideStopper -- is it required?
  }

  componentDidUpdate(prevProps, prevState) {
    const prevShowPopup = prevProps.showPopup
    const showPopup = this.props.showPopup
    if (prevShowPopup !== showPopup) {
      this.setState(({ wasShown }) => ({
        show: showPopup,
        wasShown: wasShown || showPopup,
      }), this.updateGlobalClickHandlerByState)
    }
    else if (prevState.show !== this.state.show) {
      this.updateGlobalClickHandlerByState(this.state)
    }
  }

  // Handlers...

  onControlClick = ({ show }) => {
    this.clearDelayedClickTimerHandler()
    if (show == null) { // Toggle state if no value passed
      show = !this.state.show
    }
    this.setState(({ wasShown }) => ({
      show,
      wasShown: wasShown || show,
    }))
    const { onControlClick } = this.props
    if (typeof onControlClick === 'function') {
      onControlClick({ show })
    }
  }

  /* // UNUSED? handleClickOutside -- form withOnClickOutside
   * handleClickOutside = (ev) => {
   *   console.log(ev)
   *   debugger
   * }
   */

  // Helper methods...

  getClassName() {
    const {
      id,
    } = this.props
    const {
      show,
      // wasShown,
    } = this.state
    const className = cnPopup({
      id,
      show,
    }, [this.props.className])
    return className
  }

  // Render...

  renderPopupControl() {
    let { popupControl } = this.props

    const {
      show,
      // wasShown,
    } = this.state

    const controlProps = popupControl && popupControl.props

    const content = {
      ...popupControl,
      props: {
        ...controlProps,
        onClick: /* controlProps.onControlClick || */ this.onControlClick,
        checked: show,
      },
    }

    return (
      <div className={cnPopup('ControlWrapper')}>
        {content}
      </div>
    )
  }

  renderPopupContent() {
    let { popupContent } = this.props

    const {
      show,
      wasShown,
    } = this.state

    if (!show && !wasShown) { // Content hidden and was not initialized
      return null
    }

    return (
      <div className={cnPopup('ContentWrapper', { show })}>
        {popupContent}
      </div>
    )
  }

  render() {

    const {
      id,
      // onChange,
    } = this.props

    const renderProps = {
      id,
      className: this.getClassName(),
    }

    const renderPopupControl = this.renderPopupControl()
    const renderPopupContent = this.renderPopupContent()

    return (
      <div {...renderProps}>
        {renderPopupControl}
        {renderPopupContent}
      </div>
    )
  }

}

export default Popup
// export default withOnClickOutside(Popup) // To use?
