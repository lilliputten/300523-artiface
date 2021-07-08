/** @module FormLabeledGroup.fixture
 *  @since 2021.07.08, 15:01
 *  @changed 2021.07.08, 15:01
 */
/* eslint-disable react/jsx-max-depth, no-console */

import React from 'react';

import FormLabeledGroup from './FormLabeledGroup';

import FormSelect from '../FormSelect';
import FormGroup from '../FormGroup';

// Demo styles for cosmos engine
// import 'demo.pcss';

// import './FormLabeledGroup.fixture.pcss';

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
};
