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
import 'demo.pcss';

// export const DemoWrapper = FormGroup; // ({ children }) => {
export const DemoWrapper = <FormGroup />; // ({ children }) => {

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
const plain = (
  <FormButton
    icon={inlineIcon}
    text="Style: plain with icon"
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

  simple: <FormButton theme="default" text="Style: default" className="extraButtonClass" />,
  withInlineIcon: <FormButton icon={inlineIcon} theme="default" text="With inline icon" />,
  withIconAsComponent: <FormButton icon={faCheck} theme="default" text="With icon as string" />,
  withIconAsString: <FormButton icon="faCheck" theme="default" text="With icon as text" />,
  submitButton,
  plain,

  /* // TODO:
   * - onlyIcon
   * - largeIcon
   * - rightIcon
   * - theme
   * - fullWidth
   * - type
  */
};
