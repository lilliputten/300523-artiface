/** @module FormButtonGroup.fixture
 *  @since 2020.10.21, 23:43
 *  @changed 2020.10.21, 23:43
 */

import React from 'react';
import FormButtonGroup from './FormButtonGroup';

import FormButton from '../FormButton';
import FormGroup from '../FormGroup';

import { // Icons (solid)...
  faCheck,
} from '@fortawesome/free-solid-svg-icons';

// Demo styles for cosmos engine
// import 'demo.pcss';

// import './FormButtonGroup.fixture.pcss'

export const demoTitle = 'FormButtonGroup component';

export default {
  default: (
    <FormGroup id="OuterGroupFixture">
      <FormButton theme="default" text="Outer" id="Outer item" />
      <FormButtonGroup id="FormButtonGroupFixture">
        <FormButton theme="default" text="Button" />
        <FormButton icon={faCheck} theme="default" text="Button with icon" />
      </FormButtonGroup>
    </FormGroup>
  ),
};
