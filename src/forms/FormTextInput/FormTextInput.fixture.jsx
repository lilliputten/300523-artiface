/** @module FormTextInput.fixture
 *  @since 2020.10.07, 00:20
 *  @changed 2020.10.29, 23:44
 */

import React from 'react';
import FormTextInput from './FormTextInput';
import FormGroup from '../FormGroup';
import FormLabel from '../FormLabel';

// Demo styles for cosmos engine
import 'demo.pcss';

import './FormTextInput.fixture.pcss';

// export const DemoWrapper = FormGroup // ({ children }) => {
export const DemoWrapper = <FormGroup stack id="Wrapper" />; // ({ children }) => {

export default {
  default: <FormTextInput
    className="addClassName"
    type="text"
    name="name"
    id="defaultInput"
    inputId="defaultInputControl"
    value="text value"
    placeholder="placeholder"
    title="title"
    hasClear
    fullWidth
    /*
    defaultValue="defaultValue"
    onChange={this.onLimitChange}
    onFocusOut={this.validateValues}
    disabled={false}
    */
  />,
  withIcon: <FormTextInput
    icon="faEye"
    iconTitle="Show value"
  />,
  fullWidth: <FormTextInput
    type="text"
    name="name"
    id="fullWidthInput"
    fullWidth
  />,
  withLabel: (
    <FormGroup flow fullWidth>
      <FormLabel htmlFor="testId" title="Label title">Label</FormLabel>
      <FormTextInput
        className="addClassName"
        type="text"
        name="testName"
        inputId="testId"
        placeholder="Input placeholder"
        title="Input title"
        fullWidth
      />
    </FormGroup>
  ),
};
