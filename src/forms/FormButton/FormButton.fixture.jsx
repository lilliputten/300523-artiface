/** @module FormButton.fixture
 *  @since 2020.07.20, 19:07
 *  @changed 2020.10.21, 22:52
 */

import React from 'react';
import FormButton from './FormButton';
import FormGroup from '../FormGroup';
import InlineIcon from 'elements/InlineIcon';

import { // Icons (solid)...
  faCheck,
} from '@fortawesome/free-solid-svg-icons';

// Demo styles for cosmos engine
// import 'demo.pcss';

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

const submitButton = (
  <FormButton
    text="Submit button"
    icon={inlineIcon}
    tag="button"
    type="submit"
    theme="default"
    plain
  />
);

export default {
  /* // Old cosmos-classic format example...
   * default: {
   *   component: FormButton,
   *   props: {
   *     icon: inlineIcon,
   *     theme: 'default',
   *     text: 'Compare with default',
   *   },
   * },
   */

  simple: <FormButton text="Simple" className="passedExtraButtonClass" />,
  plain: <FormButton text="Plain" plain />,
  themeDefault: <FormButton theme="default" text="Theme: default" />,
  darkPlain: <DarkBg><FormButton icon={inlineIcon} plain onDark text="Plain on dark" /></DarkBg>,
  darkDefault: <DarkBg><FormButton icon={inlineIcon} theme="default" onDark text="Default on dark" /></DarkBg>,
  defaultPlainWithIcon: <FormButton icon={inlineIcon} text="Default plain with icon" theme="default" plain />,
  themePrimary: <FormButton theme="primary" text="Theme: primary" />,
  themeError: <FormButton theme="error" text="Theme: error" />,
  withInlineIcon: <FormButton icon={inlineIcon} theme="default" text="With inline icon" />,
  withIconAsComponent: <FormButton icon={faCheck} theme="default" text="With icon as string" />,
  withIconAsString: <FormButton icon="faCheck" theme="default" text="With icon as text" />,
  submitButton,

  /* // TODO:
   * - onlyIcon
   * - largeIcon
   * - rightIcon
   * - theme
   * - fullWidth
   * - type
  */
};
