/** @module FormRadio.fixture
 *  @since 2020.07.20, 19:07
 *  @changed 2020.10.21, 22:52
 */

import React from 'react'
import FormRadio from './FormRadio'
import FormGroup from '../FormGroup'

// Demo styles for cosmos engine
import 'demo.pcss'

export const DemoWrapper = FormGroup // ({ children }) => {

export default {
  default: <FormRadio className="extraButtonClass" />,
  // checked: <FormRadio value={true} />,
}
