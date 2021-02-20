/** @module Menu.fixture
 *  @since 2020.10.27, 02:58
 *  @changed 2021.01.28, 21:55
 */
/* eslint-disable no-console */

import React from 'react';
import Menu from './Menu';
import MenuItem from '../MenuItem';

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

const onChange = (params) => {
  const { selected } = params;
  console.log('Menu.fixture: onChange handler', { selected, params });
};
const onClick = (params) => {
  const { value } = params;
  console.log('Menu.fixture: onClick handler', { value, params });
};

export default {
  simple: (
    <Menu id="simple">
      {itemElems}
    </Menu>
  ),
  withSeparator: (
    <Menu id="withSeparator" onClick={onClick}>
      {[
        { val: 1, text: 'Swimming' },
        { val: 2, text: 'Skiing' },
        { id: 'separator' },
        { val: 3, text: 'Skiing' },
      ]}
    </Menu>
  ),
  horizontal: (
    <Menu id="horizontal" _selectable={true} layout="horizontal" onClick={onClick}>
      {itemElems}
    </Menu>
  ),
  selectableMultiply: (
    <Menu id="selectableMultiply" selectable={true} onChange={onChange}>
      {itemElems}
    </Menu>
  ),
  selectableSingle: (
    <Menu id="selectableSingle" selectable={true} singleChoice="forced" onChange={onChange}>
      {itemElems}
    </Menu>
  ),
};
