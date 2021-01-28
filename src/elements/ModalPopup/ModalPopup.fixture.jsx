/** @module ModalPopup.fixture
 *  @since 2020.10.27, 00:39
 *  @changed 2020.12.18, 01:32
 */
/* eslint-disable react/no-multi-comp, no-console */

import React from 'react';

// import { FormItemModalPopup } from './ModalPopup'
import ModalPopup from './ModalPopup';
// import FormGroup from 'forms/FormGroup'
import FormButton from 'forms/FormButton';
import Menu from 'elements/Menu';

// Demo styles for cosmos engine
import 'demo.pcss';

import './ModalPopup.fixture.pcss';

// export const DemoWrapper = FormGroup // ({ children }) => {

const ModalPopupControl = (props) => {
  const { onClick } = props;
  // console.log('DemoModalPopupControl:', props)
  // debugger
  return (
    <div className="DemoModalPopupControl" onClick={onClick}>
      DemoModalPopupControl
    </div>
  );
};

const ModalPopupContent = () => {
  return (
    <div className="DemoModalPopupContent">
      <div className="DemoModalPopupContent-Container">
        DemoModalPopupContent Extra long text line for wrapping tests
      </div>
    </div>
  );
};

const popupControlEl = <ModalPopupControl />;
const popupContentEl = <ModalPopupContent />;

const menuOnChange = (params) => { // `value` passed only for `singleChoice` mode, `selected` is array
  const { selected, value } = params;
  console.log('ModalPopup.fixture: menuOnChange', { selected, value, params });
  // debugger
};
const menuOnClick = (params) => {
  const { value } = params;
  console.log('ModalPopup.fixture: menuOnClick', { value, params });
  // debugger
  // cbHideStopper && cbHideStopper()
};
const buttonOnClick = (params) => {
  const { show } = params;
  console.log('ModalPopup.fixture: buttonOnClick', { show, params });
  // debugger
};

const demoOptions = [
  { val: 1, text: 'Swimming' },
  { val: 2, text: 'Skiing' },
];
const demoMenu = (
  <Menu
    checkable={true}
    _singleChoice="forced"
    onChange={menuOnChange}
    onClick={menuOnClick}
  >
    {demoOptions}
  </Menu>
);

const simple = (
  <div className="simpleContainer">
    {/*
    <div className="simpleStub">simpleStub</div>
    */}
    <ModalPopup
      id="simple"
      popupControl={popupControlEl}
      popupContent={popupContentEl}
    />
  </div>
);

const withMenu = (
  <ModalPopup
    id="withMenu"
    popupControl={<FormButton icon="faChevronRight" rightIcon theme="primary" variation="popupControl" text="withMenu" />}
    popupContent={demoMenu}
  />
);

const stayOpenAfterItemClick = (
  <ModalPopup
    id="stayOpenAfterItemClick"
    onControlClick={buttonOnClick}
    popupControl={<FormButton icon="faChevronRight" rightIcon theme="primary" variation="popupControl" text="Stay open after item click" />}
    popupContent={demoMenu}
    closeOnClickOutside={true}
    fullWidth
  />
);

export default {
  simple,
  withMenu,
  stayOpenAfterItemClick,
};
