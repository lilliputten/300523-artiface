/** @module Menu.fixture
 *  @since 2020.10.27, 02:58
 *  @changed 2020.10.27, 21:16
 */

import React from 'react'
import Menu from './Menu'
import MenuItem from '../MenuItem'

// import FormButton from 'forms/FormButton'
// import FormGroup from '../FormGroup'

// import { // Icons (solid)...
//   faCheck,
// } from '@fortawesome/free-solid-svg-icons'

// Demo styles for cosmos engine
import 'demo.pcss'

// export const DemoWrapper = FormGroup // ({ children }) => {

// NOTE: Menu items can be provided as `MenuItem` elements or description objects (`{ val: 2, text: 'Skiing', checked: true }`).
const items = [
  { val: 1, text: 'Swimming' },
  { val: 2, text: 'Skiing', checked: true },
]
const itemElems = items.map((props, i) => {
  return i ? props : React.createElement(MenuItem, { ...props, key: props.val })
})

const onChange = ({ checkedValues }) => {
  console.log('Menu.fixture: onChange handler', checkedValues)
  // debugger
}
const onClick = ({ val }) => {
  console.log('Menu.fixture: onClick handler', val)
  // debugger
}

export default {
  default: (
    <Menu layout="vertical" onClick={onClick}>
      {itemElems}
    </Menu>
  ),
  checkable: (
    <Menu checkable={true} _singleChoice="mandatory" onChange={onChange}>
      {itemElems}
    </Menu>
  ),
  // button: (
  //   <FormButton style="default" text="Style: default" className="extraButtonClass" />
  // ),
}
