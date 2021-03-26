/** @module FormContainer.fixture
 *  @since 2021.02.20, 16:55
 *  @changed 2021.02.20, 16:56
 */
/* eslint-disable react/jsx-max-depth */

import React from 'react';

import FormButton from '../FormButton';
import FormGroup from '../FormGroup';

import FormContainer from './FormContainer';

// Demo styles for cosmos engine
// import 'demo.pcss';

import './FormContainer.fixture.pcss';

export default {
  simple: (
    <FormContainer>
      <FormGroup shaded padded flow fullWidth>
        <FormButton theme="default" text="Item" />
        <FormButton theme="default" text="Item" />
      </FormGroup>
    </FormContainer>
  ),
  formGroupWithContainer: (
    <FormGroup container shaded padded spaced flow wrap fullWidth>
      <FormButton theme="default" text="Item" />
      <FormButton theme="default" text="Item" />
      <FormButton theme="default" text="Item" />
      <FormButton theme="default" text="Item" />
    </FormGroup>
  ),
};
