/** @module FormSeparator.fixture
 *  @since 2021.02.20, 13:40
 *  @changed 2021.02.20, 13:40
 */

import React from 'react';
import FormSeparator from './FormSeparator';

import FormButton from '../FormButton';
import FormGroup from '../FormGroup';

// Demo styles for cosmos engine
// import 'demo.pcss';

import './FormSeparator.fixture.pcss';

export default {
  simple: (
    <FormGroup id="OuterGroupFixture">
      <FormSeparator id="FormSeparatorFixture" />
      <FormButton theme="default" text="Outer" id="Outer item" />
    </FormGroup>
  ),
};
