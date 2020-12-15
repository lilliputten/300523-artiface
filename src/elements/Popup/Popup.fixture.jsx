/** @module Popup.fixture
 *  @since 2020.10.27, 00:39
 *  @changed 2020.10.29, 03:14
 */
/* eslint-disable react/no-multi-comp, no-console */

import React from 'react'

import Popup from './Popup'
// import FormGroup from 'forms/FormGroup'
import FormButton from 'forms/FormButton'
import Menu from 'elements/Menu'

// Demo styles for cosmos engine
import 'demo.pcss'

import './Popup.fixture.pcss'

// export const DemoWrapper = FormGroup // ({ children }) => {

let cbHideStopper = null
const registerHideStopper = (cbStopper) => {
  cbHideStopper = cbStopper
}
const PopupControl = (props) => {
  const { onClick } = props
  // console.log('DemoPopupControl:', props)
  // debugger
  return (
    <div className="DemoPopupControl" onClick={onClick}>
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

const menuOnChange = (params) => {
  console.log('Popup.fixture: menuOnChange', { params })
  // debugger
}
const menuOnClick = (params) => {
  console.log('Popup.fixture: menuOnClick', { params })
  // debugger
  cbHideStopper && cbHideStopper()
}
const buttonOnClick = (params) => {
  console.log('Popup.fixture: buttonOnClick', { params })
  // debugger
}

const demoOptions = [
  { val: 1, text: 'Swimming' },
  { val: 2, text: 'Skiing', checked: true },
]
const demoMenu = (
  <Menu checkable={true} _singleChoice="forced" onChange={menuOnChange} onClick={menuOnClick}>
    {demoOptions}
  </Menu>
)

const simple = (
  <Popup
    id="simple"
    showPopup={false}
    popupControl={popupControlEl}
    popupContent={popupContentEl}
  />
)

const closingImmediately = (
  <Popup
    id="closingImmediately"
    showPopup={false}
    popupControl={<FormButton icon="faChevronRight" rightIcon theme="primary" variation="popupControl" text="Closing immediately" />}
    popupContent={demoMenu}
  />
)

const stayOpenAfterItemClick = (
  <Popup
    id="stayOpenAfterItemClick"
    showPopup={false}
    onControlClick={buttonOnClick}
    popupControl={<FormButton icon="faChevronRight" rightIcon theme="primary" variation="popupControl" text="Stay open after item click" />}
    popupContent={demoMenu}
    closeOnClickOutside={true}
    registerHideStopper={registerHideStopper}
  />
)

export default {
  simple,
  closingImmediately,
  stayOpenAfterItemClick,
}
