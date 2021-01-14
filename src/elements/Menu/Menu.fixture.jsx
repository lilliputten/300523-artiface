/** @module Menu.fixture
 *  @since 2020.10.27, 02:58
 *  @changed 2020.10.27, 21:16
 */
/* eslint-disable no-console */

import React from 'react';
import Menu from './Menu';
import MenuItem from '../MenuItem';

// import FormButton from 'forms/FormButton'
// import FormGroup from '../FormGroup'

// import { // Icons (solid)...
//   faCheck,
// } from '@fortawesome/free-solid-svg-icons'

// Demo styles for cosmos engine
import 'demo.pcss';

// export const DemoWrapper = FormGroup // ({ children }) => {

// NOTE: Menu items can be provided as `MenuItem` elements or description objects (`{ val: 2, text: 'Skiing' }`).
const items = [
  { val: 1, text: 'Swimming' },
  { val: 2, text: 'Skiing' },
];
const itemElems = items.map((props, i) => {
  return i ? props : React.createElement(MenuItem, { ...props, key: props.val });
});

const onChange = ({ checkedValues }) => {
  console.log('Menu.fixture: onChange handler', checkedValues);
  // debugger
};
const onClick = ({ val }) => {
  console.log('Menu.fixture: onClick handler', val);
  // debugger
};

export default {
  // simple: (
  //   <Menu id="simple">
  //     {itemElems}
  //   </Menu>
  // ),
  horizontal: (
    <Menu id="horizontal" _checkable={true} layout="horizontal" onClick={onClick}>
      {itemElems}
    </Menu>
  ),
  checkableMultiply: (
    <Menu id="checkableMultiply" checkable={true} singleChoice="forced" onChange={onChange}>
      {itemElems}
    </Menu>
  ),
  checkableSingle: (
    <Menu id="checkableSingle" checkable={true} singleChoice="forced" onChange={onChange}>
      {itemElems}
    </Menu>
  ),
};
