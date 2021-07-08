/** @module InlineIcon.fixture
 *  @since 2020.10.07, 02:08
 *  @changed 2020.10.07, 02:08
 */

import React from 'react';
import InlineIcon from 'elements/InlineIcon';

import { // Icons (solid)...
  faCheck,
} from '@fortawesome/free-solid-svg-icons';

// Demo styles for cosmos engine
// import 'demo.pcss';

// export const DemoWrapper = FormGroup // ({ children }) => {

export default {
  withIconAsComponent: <InlineIcon icon={faCheck} />,
  withIconAsString: <InlineIcon icon="faCheck" />,
};
