/** @module Popup.fixture
 *  @since 2020.10.27, 00:39
 *  @changed 2020.10.27, 00:39
 */

import React from 'react'

import Popup from './Popup'
// import { Popup } from 'elements'
// import FormGroup from 'forms/FormGroup'

// Demo styles for cosmos engine
import 'demo.pcss'

import './Popup.fixture.pcss'

// export const DemoWrapper = FormGroup // ({ children }) => {

const PopupControl = (props) => {
  const { switchPopup } = props
  // console.log('DemoPopupControl:', props)
  // debugger
  return (
    <div className="DemoPopupControl" onClick={switchPopup}>
      DemoPopupControl
    </div>
  )
}

const PopupContent = () => {
  return (
    <div className="DemoPopupContent">
      DemoPopupContent
    </div>
  )
}

const popupControlEl = <PopupControl />
const popupContentEl = <PopupContent />

export default {
  default: (
    <Popup
      showPopup={true}
      popupControl={popupControlEl}
      popupContent={popupContentEl}
      // popupControl={PopupControl}
      // popupContent={PopupContent}
    />
  ),
}
