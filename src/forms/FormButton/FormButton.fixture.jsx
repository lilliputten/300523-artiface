/** @module FormButton.fixture
 *  @since 2020.07.20, 19:07
 *  @changed 2020.10.05, 20:34
 */

import React from 'react'
import FormButton from './FormButton'
import FormGroup from '../FormGroup'

import { // Icons (solid)...
  faCheck,
} from '@fortawesome/free-solid-svg-icons'

// Demo styles for cosmos engine
import 'demo.pcss'

export const DemoWrapper = FormGroup // ({ children }) => {

export default {
  default: <FormButton style="default" text="Default button" />,
  defaultWithIcon: <FormButton icon={faCheck} style="default" text="Default button with icon" />,
}
