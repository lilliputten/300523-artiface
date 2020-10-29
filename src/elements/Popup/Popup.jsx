/** @module Popup
 *  @class Popup
 *  @since 2020.10.27, 00:39
 *  @changed 2020.10.29, 03:14
 */

import React from 'react'
// import PropTypes from 'prop-types'
// import connect from 'react-redux/es/connect/connect'
import { cn } from '@bem-react/classname'

import './Popup.pcss'

const cnPopup = cn('Popup')

const delayedClickTimeout = 100
const globalClickEventName = 'mousedown'

class Popup extends React.Component /** @lends @Popup.prototype */ {

  delayedClickTimerHandler = null

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
    this.clearDelayedClickTimerHandler()
    this.delayedClickTimerHandler = setTimeout(this.delayedGlobalClickHandler, delayedClickTimeout)
    // console.log('Popup:globalClickHandler (set handler)', this.delayedClickTimerHandler)
  }

  registerGlobalClickHandler() {
    window.addEventListener(globalClickEventName, this.globalClickHandler)
  }

  unregisterGlobalClickHandler() {
    this.clearDelayedClickTimerHandler()
    window.removeEventListener(globalClickEventName, this.globalClickHandler)
  }

  updateGlobalClickHandlerByState = (state) => {
    const { show } = state
    if (show) {
      this.registerGlobalClickHandler()
    }
    else {
      this.unregisterGlobalClickHandler()
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
      this.registerGlobalClickHandler()
    }
  }

  componentWillUnmount() {
    this.unregisterGlobalClickHandler()
  }

  componentDidUpdate(prevProps, prevState) {
    const prevShowPopup = prevProps.showPopup
    const showPopup = this.props.showPopup
    if (prevShowPopup !== showPopup) {
      this.setState({
        show: showPopup,
        wasShown: this.state.wasShown || showPopup,
      }, this.updateGlobalClickHandlerByState)
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
    this.setState({
      show,
      wasShown: this.state.wasShown || show,
    })
    const { onControlClick } = this.props
    if (typeof onControlClick === 'function') {
      onControlClick({ show })
    }
  }

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
