/** @module FormPasswordInput.fixture
 *  @since 2020.10.29, 23:50
 *  @changed 2020.10.30, 00:03
 */

import React from 'react'
import FormPasswordInput from './FormPasswordInput'
import FormGroup from '../FormGroup'

// Demo styles for cosmos engine
import 'demo.pcss'

export const DemoWrapper = FormGroup // ({ children }) => {

export default {
  default: <FormPasswordInput
    className="addClassName"
    id="defaultPassword"
    inputId="defaultPasswordControl"
    value="initial password"
    placeholder="Password placeholder"
    title="title"
  />,
}
