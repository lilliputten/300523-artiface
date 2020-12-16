/** @module FormSelect.fixture
 *  @since 2020.10.28, 22:49
 *  @changed 2020.10.29, 03:14
 */
/* eslint-disable no-console */

import React from 'react'
import FormSelect from './FormSelect'
import FormGroup from '../FormGroup'
// import FormButton from '../FormButton'

// Demo styles for cosmos engine
import 'demo.pcss'

export const DemoWrapper = FormGroup // ({ children }) => {

const demoOptions = [
  { val: 1, text: 'Swimming' },
  { val: 2, text: 'Skiing', checked: true },
]

const demoChange = (props) => {
  console.log('demoChange', props)
  debugger
}

export default {
  default: (
    <FormSelect
      title="Select title"
      text="Select"
      options={demoOptions}
    />
  ),
  withExtraOptions: (
    <FormSelect
      title="Select title"
      text="Select"
      options={demoOptions}
      singleChoice
      closeOnSelect
      controlButtonTheme="success"
      onChange={demoChange}
      show
    />
  ),
}
