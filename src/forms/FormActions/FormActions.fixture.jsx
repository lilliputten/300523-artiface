/** @module FormActions.fixture
 *  @since 2021.02.15, 18:03
 *  @changed 2021.02.15, 18:03
 */
/* eslint-disable react/jsx-max-depth */

import React from 'react';

// import FormLabeledGroup from '../FormLabeledGroup';
// import FormRadio from '../FormRadio';
// import FormDelim from '../FormDelim';

// import FormLabel from '../FormLabel';
import FormButton from '../FormButton';
// import FormTextInput from '../FormTextInput';
// import FormPasswordInput from '../FormPasswordInput';

import FormActions from './FormActions';

import { // Icons (solid)...
  faCheck,
} from '@fortawesome/free-solid-svg-icons';

// Demo styles for cosmos engine
import 'demo.pcss';

import './FormActions.fixture.pcss';

export const demoTitle = 'FormActions component';

function handleAction({ result, id }) {
  console.log('FormActions.fixture:handleAction', { result, id });
  // debugger;
}

export default {
  simple: (
    <FormActions id="simpleActions" onAction={handleAction}>
      <FormButton id="default" theme="default" text="Button" />
      <FormButton id="withIcon" icon={faCheck} theme="default" text="Button with icon" />
    </FormActions>
  ),
};
