/** @module FormText.fixture
 *  @since 2020.10.29, 21:25
 *  @changed 2020.10.29, 22:42
 */

import React from 'react';
import FormText from './FormText';
import FormGroup from '../FormGroup';
import FormTextInput from '../FormTextInput';

// Demo styles for cosmos engine
// import 'demo.pcss';

export const DemoWrapper = FormGroup; // ({ children }) => {

export default {
  simple: <FormText title="Title" text="Text" />,
  withInput: (
    <FormGroup fullWidth>
      <FormText title="Title" text="Text" clickable hoverable={false} />
      <FormTextInput
        className="addClassName"
        type="text"
        name="testName"
        inputId="testId"
        placeholder="Input placeholder"
        title="Input title"
      />
    </FormGroup>
  ),
};
