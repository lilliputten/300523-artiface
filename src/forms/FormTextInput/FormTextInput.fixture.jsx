/** @module FormTextInput.fixture
 *  @since 2020.10.07, 00:20
 *  @changed 2021.01.19, 16:08
 */

import React from 'react';
import FormTextInput from './FormTextInput';
import FormGroup from '../FormGroup';
import FormLabel from '../FormLabel';

// Demo styles for cosmos engine
import 'demo.pcss';

import './FormTextInput.fixture.pcss';

import { FormContextProvider } from 'helpers/FormContext';

// export const DemoWrapper = FormGroup // ({ children }) => {
export const DemoWrapper = <FormGroup stack id="Wrapper" />; // ({ children }) => {

class WithFormContext extends React.PureComponent /** @lends @ModalsContainer.prototype */ {
  onInputEnterPressed = ({ id }) => {
    console.log('FormTextInput.fixture:onInputEnterPressed', id); // eslint-disable-line no-console
    debugger; // eslint-disable-line no-debugger
  }
  render() {
    return (
      <FormContextProvider value={this}>
        <FormTextInput
          className="WithFormContext"
          type="text"
          id="WithFormContext"
          value="With Form Context"
          placeholder="placeholder"
          title="title"
        />
      </FormContextProvider>
    );
  }
}
const wrappedWithFormContext = <WithFormContext />;

const simple = (
  <FormTextInput
    className="addClassName"
    type="text"
    name="name"
    id="simpleInput"
    inputId="simpleInputControl"
    value="text value"
    placeholder="placeholder"
    title="title"
    hasClear
    fullWidth
    /*
    simpleValue="simpleValue"
    onChange={this.onLimitChange}
    onFocusOut={this.validateValues}
    disabled={false}
    */
  />
);
const withIcon = (
  <FormTextInput
    icon="faEye"
    iconTitle="Show value"
  />
);
const fullWidth = (
  <FormTextInput
    type="text"
    name="name"
    id="fullWidthInput"
    fullWidth
  />
);
const withLabel = (
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
);

export default {
  simple,
  withIcon,
  fullWidth,
  withLabel,
  wrappedWithFormContext,
};
