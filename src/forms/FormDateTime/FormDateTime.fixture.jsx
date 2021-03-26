/** @module FormDateTime.fixture
 *  @since 2021.01.23, 19:44
 *  @changed 2021.01.23, 19:44
 */
/* eslint-disable react/jsx-max-depth, no-console */

import React from 'react';

import FormDateTime from './FormDateTime';

// import FormGroup from '../FormGroup';

// Demo styles for cosmos engine
// import 'demo.pcss';

import './FormDateTime.fixture.pcss';

// export const DemoWrapper = FormGroup // ({ children }) => {
// export const DemoWrapper = <FormGroup stack id="Wrapper" />; // ({ children }) => {

const dayTicks = 1000 * 60 * 60 * 24;
const thisDate = Date.now() - 2 * dayTicks;

const onDateChanged = (params) => {
  console.log('FormDateTime.fixture:onDateChanged', params);
  // debugger;
};

const simple = (
  <FormDateTime
    id="simple"
    title="DateTime title"
    // text="DateTime text"
    placeholder="DateTime placeholder"
    value={thisDate}
    onChange={onDateChanged}
    closeOnSelect
  />
);

const showTime = (
  <FormDateTime
    id="showTime"
    title="DateTime title"
    // text="DateTime text"
    placeholder="DateTime placeholder"
    value={thisDate}
    onChange={onDateChanged}
    showTime
  />
);

/*
 * const selectsRange = (
 *   <FormDateTime
 *     id="selectsRange"
 *     title="DateTime title"
 *     // text="DateTime text"
 *     placeholder="DateTime placeholder"
 *     startDate={thisDate}
 *     endDate={thisDate + dayTicks}
 *     selectsRange
 *     onChange={onDateChanged}
 *   />
 * );
 */

export default {
  simple,
  showTime,
  // selectsRange,
};
