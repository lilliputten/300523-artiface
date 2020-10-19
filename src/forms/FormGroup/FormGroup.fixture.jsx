/** @module FormGroup.fixture
 *  @since 2020.07.20, 19:07
 *  @changed 2020.07.20, 19:07
 */

import React from 'react'
import FormGroup from './FormGroup'
import FormButton from '../FormButton'
import FormTextInput from '../FormTextInput'

import { // Icons (solid)...
  faCheck,
} from '@fortawesome/free-solid-svg-icons'

// Demo styles for cosmos engine
import 'demo.pcss'

export const demoTitle = 'FormGroup component'

export default {
  default: (
    <FormGroup>
      <FormButton style="default" text="Button" />
      <FormButton icon={faCheck} style="default" text="Button with icon" />
    </FormGroup>
  ),
  fullWidth: (
    <FormGroup fullWidth>
      <FormTextInput
        type="text"
        name="name"
        id="fullWidthInput"
        fullWidth
      />
    </FormGroup>
  ),
}
