/** @module FormActions.fixture
 *  @since 2021.02.15, 18:03
 *  @changed 2021.02.15, 18:03
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

import FormActions from './FormActions';

import { // Icons (solid)...
  faCheck,
} from '@fortawesome/free-solid-svg-icons';

// Demo styles for cosmos engine
import 'demo.pcss';

import './FormActions.fixture.pcss';

export const demoTitle = 'FormActions component';

export default {
  simple: (
    <FormActions>
      <FormButton theme="default" text="Button" />
      <FormButton icon={faCheck} theme="default" text="Button with icon" />
    </FormActions>
  ),
};
