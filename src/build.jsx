/** @module build
 *  @desc Library exportable ditributive
 *  @since 2020.05.19, 17:16
 *  @changed 2020.12.28, 01:09
 */

import React from 'react';

// export config from 'config';
import * as config from 'config';
export { config };

export * as utils from 'utils';
// export * as utils from 'utils';
export * as helpers from 'helpers';

export * from 'elements';
export * from 'forms';

// Demo component
// export Hello from './demo/Hello';
import Hello from './demo/Hello';
export { Hello };

// Basic styles
import './build.pcss';

import ModalsController from 'elements/ModalsController';

// TODO: Use WebUiCoreContext?
const WebUiCoreRoot = ({ children, autoModalsController }) => {
  return (
    <React.Fragment>
      {children}
      {autoModalsController && <ModalsController />}
    </React.Fragment>
  );
};
export default WebUiCoreRoot;
