/** @module Menu.fixture
 *  @since 2020.10.27, 02:58
 *  @changed 2020.10.27, 02:58
 */

import React from 'react'
import Menu from './Menu'
import MenuItem from '../MenuItem'

// import FormButton from 'forms/FormButton'
// import FormGroup from '../FormGroup'

import { // Icons (solid)...
  faCheck,
} from '@fortawesome/free-solid-svg-icons'

// Demo styles for cosmos engine
import 'demo.pcss'

// export const DemoWrapper = FormGroup // ({ children }) => {

const items = [
  { val: 1, text: 'Swimming' },
  { val: 2, text: 'Skiing' },
]
const itemElems = items.map((props) => {
  return React.createElement(MenuItem, { ...props, key: props.val })
})

export default {
  default: (
    <Menu>
      {itemElems}
    </Menu>
  ),
  // button: (
  //   <FormButton style="default" text="Style: default" className="extraButtonClass" />
  // ),
}
