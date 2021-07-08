/** @module FormIcon.fixture
 *  @since 2021.07.08, 15:20
 *  @changed 2021.07.08, 15:20
 */

import React from 'react';
import FormIcon from './FormIcon';
import FormGroup from '../FormGroup';
import InlineIcon from 'elements/InlineIcon';
import FormButton from 'forms/FormButton';

import { // Icons (solid)...
  faCheck,
} from '@fortawesome/free-solid-svg-icons';

// Demo styles for cosmos engine
// import 'demo.pcss';

import './FormIcon.fixture.pcss';

// export const DemoWrapper = FormGroup; // ({ children }) => {
export const DemoWrapper = <FormGroup />; // ({ children }) => {

export const DarkBg = ({ children }) => {
  return (
    <FormGroup className="DarkBg" id="Dark">
      {children}
    </FormGroup>
  );
};

const inlineIcon = <InlineIcon icon={faCheck} className="extraIconClass" />;

export default {
  // simple: <FormIcon icon={inlineIcon} title="Title" />,
  withButton: (
    <FormGroup flow>
      <FormButton icon="faCheck" text="Button" theme="default" />
      <FormButton icon="faCheck" title="FormButton:default" />
      <FormButton icon="faCheck" largeIcon title="FormButton:largeIcon" />
      <FormIcon icon="faCheck" title="FormIcon:default" />
      <FormIcon icon={inlineIcon} largeIcon title="FormIcon:largeIcon" />
      {/*
      */}
    </FormGroup>
  ),
  // // largeIcon: <FormIcon icon={inlineIcon} largeIcon />,
  // darkPlain: <DarkBg><FormIcon icon={inlineIcon} plain onDark /></DarkBg>,
  // darkDefault: <DarkBg><FormIcon icon={inlineIcon} theme="default" onDark /></DarkBg>,
  // defaultPlainWithIcon: <FormIcon icon={inlineIcon} theme="default" plain />,
  // themePrimary: <FormIcon icon="faCheck" theme="primary" />,
  // themeError: <FormIcon icon="faExclamation" theme="error" />,
  // withInlineIcon: <FormIcon icon={inlineIcon} />,
  // withIconAsComponent: <FormIcon icon={faCheck} />,
  // withIconAsString: <FormIcon icon="faCheck" />,
};
