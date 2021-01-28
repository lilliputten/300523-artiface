/** @module FormButton.fixture
 *  @since 2020.07.20, 19:07
 *  @changed 2020.12.08, 13:35
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

// export const DemoWrapper = ({ children }) => {
//   return (
//     <FormGroup>
//       {children}
//     </FormGroup>
//   )
// }

const DarkBg = ({ children }) => {
  return (
    <FormGroup className="DarkBg" id="Dark">
      {children}
    </FormGroup>
  );
};

const inlineIcon = <InlineIcon icon={faCheck} className="extraIconClass" />;

export default {
  // default: <DarkBg><FormButton icon={inlineIcon} theme="default" text="Compare with default" /></DarkBg>,
  plain: <DarkBg><FormButton icon={inlineIcon} plain onDark text="Style: plain" /></DarkBg>,
  default: <DarkBg><FormButton icon={inlineIcon} theme="default" onDark text="Style: default, onDark" /></DarkBg>,
};
