/** @module FormGroup.fixture
 *  @since 2020.07.20, 19:07
 *  @changed 2020.07.20, 19:07
 */
/* eslint-disable react/jsx-max-depth */

import React from 'react';

import FormLabeledGroup from '../FormLabeledGroup';
import FormRadio from '../FormRadio';
import FormDelim from '../FormDelim';

import FormLabel from '../FormLabel';
import FormButton from '../FormButton';
import FormTextInput from '../FormTextInput';
import FormPasswordInput from '../FormPasswordInput';

import FormGroup from './FormGroup';

import { // Icons (solid)...
  faCheck,
} from '@fortawesome/free-solid-svg-icons';

// Demo styles for cosmos engine
import 'demo.pcss';

import './FormGroup.fixture.pcss';

export const demoTitle = 'FormGroup component';

export default {
  simple: (
    <FormGroup>
      <FormButton theme="default" text="Button" />
      <FormButton icon={faCheck} theme="default" text="Button with icon" />
    </FormGroup>
  ),
  nested: (
    <FormGroup id="nested">
      <FormGroup id="nested-1-a" tagged>
        <FormGroup id="nested-2">
          <FormButton theme="default" text="1a" />
          <FormButton theme="default" text="1b" />
        </FormGroup>
        <FormButton theme="default" text="2a" />
        <FormButton theme="default" text="2b" />
      </FormGroup>
      <FormGroup id="nested-1-b" tagged>
        <FormButton theme="default" text="3a" />
        <FormButton theme="default" text="3b" />
      </FormGroup>
    </FormGroup>
  ),
  flow: (
    <FormGroup flow>
      <FormButton theme="default" text="Button1" />
      <FormButton theme="default" text="Button2" />
    </FormGroup>
  ),
  center: (
    <FormGroup flow alignItems="center">
      <FormButton theme="default" text="Button" />
    </FormGroup>
  ),
  fullWidth: (
    <FormGroup fullWidth id="FormGroupFixture">
      <FormLabel htmlFor="fullWidthControl" title="Label">Label</FormLabel>
      <FormTextInput
        type="text"
        name="name"
        id="fullWidthInput"
        inputId="fullWidthControl"
        fullWidth
      />
    </FormGroup>
  ),
  LoginForm: (
    <FormGroup stack={true} id="Form">
      <FormLabeledGroup htmlFor="login" title="Login" fullWidth flow>
        <FormTextInput
          id="login"
          value="login"
          fill
        />
      </FormLabeledGroup>
      <FormLabeledGroup htmlFor="password" title="Password" fullWidth flow>
        <FormPasswordInput
          id="password"
          value="password"
          fill
        />
      </FormLabeledGroup>
      <FormDelim />
      <FormGroup fullWidth flow>
        <FormRadio
          id="domain"
        />
        <FormLabel htmlFor="domain" title="Domain Auth" />
      </FormGroup>
      <FormDelim />
      <FormGroup id="Actions" fullWidth flow>
        <FormGroup id="ActionsMain">
          <FormButton
            id="Go"
            tag="button"
            type="submit"
            text="goButton"
            icon="faCheck"
            theme="default"
          />
        </FormGroup>
        <FormGroup id="ActionsRight" align="right">
          <FormButton
            id="Restore"
            text="resetPassw"
            theme="plain"
            icon="solid:faHistory"
          />
        </FormGroup>
      </FormGroup>
    </FormGroup>
  ),
};
