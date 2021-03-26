/** @module MenuItem.fixture
 *  @since 2020.10.27, 03:05
 *  @changed 2021.02.20, 14:23
 */
/* eslint-disable no-console */

import React from 'react';
import MenuItem from './MenuItem';

// import FormGroup from '../FormGroup'

// Demo styles for cosmos engine
// import 'demo.pcss';

// export const DemoWrapper = FormGroup // ({ children }) => {

function handleClick(params) {
  const { id, val, component } = params;
  console.log({ id, val, component, params });
  // debugger;
}

export default {
  simple: (
    <MenuItem
      val="1"
      text="simple"
      onClick={handleClick}
    />
  ),
  complex: (
    <MenuItem
      id="complex"
      text="complex"
      onClick={handleClick}
      theme="success"
      icon="faCheck"
      hasIcon
    />
  ),
};
