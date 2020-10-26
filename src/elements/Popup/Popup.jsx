/** @module Popup
 *  @class Popup
 *  @since 2020.10.27, 00:39
 *  @changed 2020.10.27, 00:39
 */

import React from 'react'
// import PropTypes from 'prop-types'
// import connect from 'react-redux/es/connect/connect'
import { cn } from '@bem-react/classname'

import './Popup.pcss'

const cnPopup = cn('Popup')

class Popup extends React.Component /** @lends @Popup.prototype */ {

  constructor(props) {
    super(props)
    const { showPopup } = props
    this.state = {
      show: showPopup, // Is content element displaying now?
      wasShown: showPopup, // Memorized state: did content element once displayed?
    }
  }

  componentDidUpdate(prevProps) {
    const prevShowPopup = prevProps.showPopup
    const showPopup = this.props.showPopup
    if (prevShowPopup !== showPopup) {
      this.setState({
        show: showPopup,
        wasShown: this.state.wasShown || showPopup,
      })
    }
  }

  switchPopup = ({ show }) => {
    if (show == null) { // Toggle state if no value passed
      show = !this.state.show
    }
    // console.log('Popup:switchPopup:', {
    //   show,
    // })
    // debugger
    this.setState({
      show,
      wasShown: this.state.wasShown || show,
    })
  }

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
        switchPopup: controlProps.switchPopup || this.switchPopup,
        showPopup: show,
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

  getClassName() {
    const {
      show,
      // wasShown,
    } = this.state

    const className = cnPopup({
      show,
    }, [this.props.className])
    return className
  }

  render() {

    const {
      id,
      // onChange,
    } = this.props

    const renderProps = {
      id,
      className: this.getClassName(),
      // title,
      // onClick,
    }

    // console.log('Popup:render:', {
    //   popupControl,
    //   popupContent,
    // })
    // debugger

    const renderPopupControl = this.renderPopupControl()
    const renderPopupContent = this.renderPopupContent()

    // const tagName = tag || 'div'
    // const element = React.createElement(tagName, renderProps, content)
    return (
      <div {...renderProps}>
        {renderPopupControl}
        {renderPopupContent}
      </div>
    )
  }

}

export default Popup
