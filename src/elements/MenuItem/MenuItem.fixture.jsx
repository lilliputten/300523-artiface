/** @module MenuItem.fixture
 *  @since 2020.10.27, 03:05
 *  @changed 2020.10.27, 03:06
 */

import React from 'react';
import MenuItem from './MenuItem';

// import FormGroup from '../FormGroup'

// import { // Icons (solid)...
//   faCheck,
// } from '@fortawesome/free-solid-svg-icons'

// Demo styles for cosmos engine
import 'demo.pcss';

// export const DemoWrapper = FormGroup // ({ children }) => {

const items = [
  { val: 1, content: 'Swimming' },
  { val: 2, content: 'Skiing' },
];
export default {
  default: (
    <MenuItem>
      {items}
    </MenuItem>
  ),
};
