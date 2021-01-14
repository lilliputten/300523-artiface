/** @module FormRadio.fixture
 *  @since 2020.07.20, 19:07
 *  @changed 2020.10.21, 22:52
 */

import React from 'react';
import config from 'config';
import FormRadio from './FormRadio';
import FormGroup from '../FormGroup';

// Demo styles for cosmos engine
import 'demo.pcss';

export const DemoWrapper = FormGroup; // ({ children }) => {

const items = Object.keys(config.css.themeColors).reduce((items, name) => {
  const item = <FormRadio key={name} theme={name} />;
  return { ...items, [name]: item };
}, {});

export default items;

