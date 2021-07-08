/** @module FormLabeledGroup.fixture
 *  @since 2021.07.08, 15:01
 *  @changed 2021.07.08, 16:41
 */
/* eslint-disable react/jsx-max-depth, no-console */

import React from 'react';

import FormLabeledGroup from 'forms/FormLabeledGroup';

import FormSelect from 'forms/FormSelect';
import FormGroup from 'forms/FormGroup';
import FormTextInput from 'forms/FormTextInput';

// import InlineIcon from 'elements/InlineIcon';
import FormIcon from 'forms/FormIcon';

// Demo styles for cosmos engine
// import 'demo.pcss';

import './FormLabeledGroup.fixture.pcss';

// export const DemoWrapper = FormGroup // ({ children }) => {
export const DemoWrapper = <FormGroup stack id="Wrapper" />; // ({ children }) => {

const demoOptions = [
  { val: 1, text: 'Ruinning' },
  { val: 2, text: 'Swimming extra long text item name string value' },
];

const demoChange = (params) => {
  const { id, selected, value } = params;
  console.log('FormLabeledGroup.fixture:demoChange', { id, selected, value, params });
  // debugger
};

export default {
  withSelect: (
    <FormLabeledGroup id="withSelect" htmlFor="withSelect-Label" title="With Select Label" fullWidth flow>
      <FormSelect
        inputId="withSelect-Label"
        title="Select question"
        placeholder="Select some option"
        selected={[2]}
        onChange={demoChange}
        options={demoOptions}
        controlButtonTheme="default"
        fullWidth
      />
    </FormLabeledGroup>
  ),
  withInputAndIcon: (
    <FormLabeledGroup id="withInputAndIcon" htmlFor="withInputAndIcon-Label" title="Label" fullWidth flow>
      <FormTextInput fullWidth />
      <FormIcon icon="faCheck" />
    </FormLabeledGroup>
  ),
  withInputAndIconFullWidth: (
    <FormLabeledGroup id="withInputAndIconFullWidth" htmlFor="withInputAndIcon-Label" title="Label" fullWidth flow>
      <FormTextInput fullWidth />
      <FormIcon icon="faCheck" />
    </FormLabeledGroup>
  ),
};
