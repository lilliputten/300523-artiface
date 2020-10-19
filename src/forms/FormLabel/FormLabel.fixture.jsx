/** @module FormLabel.fixture
 *  @since 2020.10.06, 23:45
 *  @changed 2020.10.06, 23:46
 */

import React from 'react'
import FormLabel from './FormLabel'
import FormGroup from '../FormGroup'
import FormTextInput from '../FormTextInput'

// Demo styles for cosmos engine
import 'demo.pcss'

export const DemoWrapper = FormGroup // ({ children }) => {

export default {
  onlyLabel: <FormLabel title="Only title">
      Only label
  </FormLabel>,
  withInput: <FormGroup fullWidth>
    <FormLabel htmlFor="testId" title="Label title">Label</FormLabel>
    <FormTextInput
      className="addClassName"
      type="text"
      name="testName"
      inputId="testId"
      placeholder="Input placeholder"
      title="Input title"
    />
  </FormGroup>,
}
