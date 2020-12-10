/** @module Popup.fixture
 *  @since 2020.10.27, 00:39
 *  @changed 2020.10.29, 03:14
 */

import React from 'react'

import Popup from './Popup'
// import { Popup } from 'elements'
// import FormGroup from 'forms/FormGroup'
import FormButton from 'forms/FormButton'
import Menu from 'elements/Menu'

// Demo styles for cosmos engine
import 'demo.pcss'

import './Popup.fixture.pcss'

// export const DemoWrapper = FormGroup // ({ children }) => {

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

const fixtureDefault = (
  <Popup
    showPopup={true}
    popupControl={popupControlEl}
    popupContent={popupContentEl}
    // popupControl={PopupControl}
    // popupContent={PopupContent}
  />
)

const fixtureWithButton = (
  <Popup
    showPopup={true}
    popupControl={<FormButton icon="faChevronDown" rightIcon theme="primary" variation="popupControl" text="Button" />}
    popupContent={popupContentEl}
    // popupControl={PopupControl}
    // popupContent={PopupContent}
  />
)

const menuOnChange = (params) => {
  console.log('Popup.fixture: menuOnChange', { params })
}
const menuOnClick = (params) => {
  console.log('Popup.fixture: menuOnClick', { params })
}
const buttonOnClick = (params) => {
  console.log('Popup.fixture: buttonOnClick', { params })
}
const demoMenu = (
  <Menu checkable={true} _singleChoice="mandatory" onChange={menuOnChange} onClick={menuOnClick}>
    {[
      { val: 1, text: 'Swimming' },
      { val: 2, text: 'Skiing', checked: true },
    ]}
  </Menu>
)

const fixtureWithMenu = (
  <Popup
    showPopup={true}
    onControlClick={buttonOnClick}
    popupControl={<FormButton icon="faChevronDown" rightIcon theme="primary" variation="popupControl" text="Button" />}
    popupContent={demoMenu}
    // popupControl={PopupControl}
    // popupContent={PopupContent}
  />
)

export default {
  default: fixtureDefault,
  withButton: fixtureWithButton,
  withMenu: fixtureWithMenu,
}
