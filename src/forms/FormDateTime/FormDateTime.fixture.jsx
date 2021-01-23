/** @module FormDateTime.fixture
 *  @since 2021.01.23, 19:44
 *  @changed 2021.01.23, 19:44
 */
/* eslint-disable react/jsx-max-depth, no-console */

import React from 'react';

import FormDateTime from './FormDateTime';
// import FormGroup from '../FormGroup';
// import FormLabeledGroup from '../FormLabeledGroup';
// import FormLabel from '../FormLabel';


// Demo styles for cosmos engine
import 'demo.pcss';

import './FormDateTime.fixture.pcss';

// export const DemoWrapper = FormGroup // ({ children }) => {
// export const DemoWrapper = <FormGroup stack id="Wrapper" />; // ({ children }) => {

const thisDateTime = Date.now() - 1000 * 60 * 60 * 24;

const simple = (
  <FormDateTime
    title="DateTime title"
    text="DateTime text"
    placeholder="DateTime placeholder"
    value={thisDateTime}
  />
);
export default {
  simple,
};
