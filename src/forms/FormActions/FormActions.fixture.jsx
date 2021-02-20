/** @module FormActions.fixture
 *  @since 2021.02.15, 18:03
 *  @changed 2021.02.19, 17:51
 */
/* eslint-disable react/jsx-max-depth, no-console */

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

function handleAction(params) {
  const { result, id, actionsId } = params;
  console.log('FormActions.fixture:handleAction', { actionsId, id, result, params });
  // debugger;
}

function handleClick(params) {
  const { id } = params;
  console.log('FormActions.fixture:handleClick', { id, params });
  // debugger;
}

const actionItems = [
  { id: 'separator' },
  {
    id: 'update',
    onClick: handleClick,
    text: 'Update',
    icon: 'faSync',
    // theme: 'default',
  },
];

const menuItems = [
  {
    id: 'test',
    onClick: handleClick,
    text: 'Test',
    icon: 'faCheck',
    // theme: 'default',
  },
  { id: 'separator' },
  {
    id: 'update',
    onClick: handleClick,
    text: 'Update',
    icon: 'faSync',
    // theme: 'default',
  },
];

export default {
  simple: (
    <FormActions id="simple" onAction={handleAction}>
      <FormButton id="default" theme="default" text="Button" />
      <FormButton id="withIcon" icon={faCheck} theme="default" text="Button with icon" />
    </FormActions>
  ),
  fromList: (
    <FormActions
      id="fromList"
      onAction={handleAction}
      fullWidth
      flow
    >
      {actionItems}
    </FormActions>
  ),
  withMenu: (
    <FormActions
      id="withMenu"
      onAction={handleAction}
      menu={menuItems}
      // withMenu
      fullWidth
      flow
      wrap
      shaded
      padded
      spaced
      withContainer
      // padded
      // theme="MediumGray"
      // layout="Padded"
    >
      {actionItems}
    </FormActions>
  ),
};
