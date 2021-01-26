/** @module FormDateRange.fixture
 *  @since 2021.01.26, 13:19
 *  @changed 2021.01.26, 13:19
 */
/* eslint-disable react/jsx-max-depth, no-console */

import React from 'react';

import FormDateRange from './FormDateRange';

import FormGroup from '../FormGroup';

// Demo styles for cosmos engine
import 'demo.pcss';

import './FormDateRange.fixture.pcss';

export const DemoWrapper = FormGroup;
// export const DemoWrapper = <FormGroup stack id="Wrapper" />; // ({ children }) => {

const dayTicks = 1000 * 60 * 60 * 24;
const thisDate = Date.now() - 2 * dayTicks;

const onDateChanged = (params) => {
  console.log('FormDateRange.fixture:onDateChanged', params);
  // debugger;
};

const simple = (
  <FormDateRange
    id="simple"
    title="DateTime title"
    // text="DateTime text"
    placeholder="DateTime placeholder"
    startDate={thisDate}
    endDate={thisDate + 2 * dayTicks}
    onChange={onDateChanged}
    // closeOnSelect
  />
);

const showTime = (
  <FormDateRange
    id="showTime"
    title="DateTime title"
    // text="DateTime text"
    placeholder="DateTime placeholder"
    startDate={thisDate}
    endDate={thisDate + 2 * dayTicks}
    onChange={onDateChanged}
    showTime
  />
);

export default {
  simple,
  showTime,
  // selectsRange,
};
