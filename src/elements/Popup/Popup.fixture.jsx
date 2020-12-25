/** @module Popup.fixture
 *  @since 2020.10.27, 00:39
 *  @changed 2020.12.18, 01:32
 */
/* eslint-disable react/no-multi-comp, no-console */

import React from 'react'

// import { FormItemPopup } from './Popup'
import Popup from './Popup'
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
      <div className="DemoPopupContent-Container">
        DemoPopupContent
      </div>
    </div>
  )
}

const popupControlEl = <PopupControl />
const popupContentEl = <PopupContent />

const menuOnChange = ({ checked, value }) => { // `value` passed only for `singleChoice` mode, `checked` is array
  console.log('Popup.fixture: menuOnChange', { checked, value })
  // debugger
}
const menuOnClick = ({ value }) => {
  console.log('Popup.fixture: menuOnClick', { value })
  // debugger
  // cbHideStopper && cbHideStopper()
}
const buttonOnClick = ({ show }) => {
  console.log('Popup.fixture: buttonOnClick', { show })
  // debugger
}

const demoOptions = [
  { val: 1, text: 'Swimming' },
  { val: 2, text: 'Skiing' },
]
const demoMenu = (
  <Menu
    checkable={true}
    _singleChoice="forced"
    onChange={menuOnChange}
    onClick={menuOnClick}
  >
    {demoOptions}
  </Menu>
)

const simple = (
  <div className="simpleContainer">
    <div className="simpleStub">simpleStub</div>
    <Popup
      id="simple"
      popupControl={popupControlEl}
      popupContent={popupContentEl}
    />
  </div>
)

const withMenu = (
  <Popup
    id="withMenu"
    popupControl={<FormButton icon="faChevronRight" rightIcon theme="primary" variation="popupControl" text="withMenu" />}
    popupContent={demoMenu}
    open
  />
)

const stayOpenAfterItemClick = (
  <Popup
    id="stayOpenAfterItemClick"
    onControlClick={buttonOnClick}
    popupControl={<FormButton icon="faChevronRight" rightIcon theme="primary" variation="popupControl" text="Stay open after item click" />}
    popupContent={demoMenu}
    closeOnClickOutside={true}
    fullWidth
    open
  />
)

export default {
  simple,
  withMenu,
  stayOpenAfterItemClick,
}
