/** @module FormInputGroup.fixture
 *  @since 2020.10.21, 23:43
 *  @changed 2020.10.21, 23:43
 */

import React from 'react';
import FormInputGroup from './FormInputGroup';

import FormButton from '../FormButton';
import FormTextInput from '../FormTextInput';
import FormGroup from '../FormGroup';

import { // Icons (solid)...
  faCheck,
} from '@fortawesome/free-solid-svg-icons';

// Demo styles for cosmos engine
// import 'demo.pcss';

// import './FormInputGroup.fixture.pcss'

export const demoTitle = 'FormInputGroup component';

export default {
  default: (
    <FormGroup id="OuterGroupFixture">
      <FormButton theme="default" text="Outer" id="Outer item" />
      <FormInputGroup id="FormInputGroupFixture">
        <FormTextInput
          type="text"
          name="name"
          id="Input"
          inputId="InputControl"
        />
        <FormButton icon={faCheck} theme="default" text="Button" />
      </FormInputGroup>
    </FormGroup>
  ),
};
