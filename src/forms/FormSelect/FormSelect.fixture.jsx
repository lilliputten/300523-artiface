/** @module FormSelect.fixture
 *  @since 2020.10.28, 22:49
 *  @changed 2020.10.29, 03:14
 */

import React from 'react'
import FormSelect from './FormSelect'
import FormGroup from '../FormGroup'
// import FormButton from '../FormButton'

// Demo styles for cosmos engine
import 'demo.pcss'

// export const DemoWrapper = FormGroup // ({ children }) => {

const options = [
  { val: 1, text: 'Swimming' },
  { val: 2, text: 'Skiing', checked: true },
]

export default {
  default: (
    <FormSelect
      title="Select title"
      text="Select"
      options={options}
    />
  ),
  withItem: (
    <FormGroup>
      <FormSelect
        title="Select title"
        text="Select"
        options={options}
        singleChoice
        closeOnSelect
        show
      />
    </FormGroup>
  ),
}
