/** @module build
 *  @desc Library exportable ditributive
 *  @since 2020.05.19, 17:16
 *  @changed 2020.12.28, 01:09
 */

import React from 'react';

import * as config from 'config';
export { config };

export * as utils from 'utils';
export * as helpers from 'helpers';

export * as elements from 'elements';
// export * as forms from 'forms';

// Demo component
// export Hello from './demo/Hello';
import Hello from './demo/Hello';
export { Hello };

// Basic styles
import './build.pcss';

import ModalsContainer from 'elements/ModalsContainer';

// // DEBUG
// import FormTextInput from 'forms/FormTextInput';
// import FormTextInputRaw from 'forms/FormTextInput/FormTextInput';
// console.log('build', {
//   FormTextInput,
//   FormTextInputRaw,
//   Hello,
//   ModalsContainer,
// });
// debugger;
// // export default Hello;

interface IProps {
    children: React.ReactNode;
    autoModalsContainer?: boolean;
}

// TODO: Use WebUiCoreContext?
const WebUiCoreRoot = ({ children, autoModalsContainer }: IProps) => {
  return (
    <React.Fragment>
      {children}
      {autoModalsContainer && <ModalsContainer />}
    </React.Fragment>
  );
};
export default WebUiCoreRoot;
