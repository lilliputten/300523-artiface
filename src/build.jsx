/** @module build
 *  @desc Library exportable ditributive
 *  @since 2020.05.19, 17:16
 *  @changed 2021.05.31, 16:24
 */

import React from 'react';
// import connect from 'react-redux/lib/connect/connect'; // DEBUG: Test redux state

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
const WebUiCoreRoot = ({
  // // store, // DEBUG: Test redux state
  // stateTest, // DEBUG: Test redux state
  // models, // DEBUG: Test redux state
  children,
  autoModalsController,
}) => {
  // console.log('WebUiCoreRoot', { // DEBUG: Test redux state
  //   'config.app.store': config.app.store,
  //   // store,
  //   stateTest,
  //   models,
  // });
  // debugger;
  return (
    <React.Fragment>
      {children}
      {autoModalsController && <ModalsController />}
    </React.Fragment>
  );
};

// // DEBUG: Test redux state
// const mapStateToProps = store => ({
//   // language: store.language.components.adminPage.terminals,
//   // user: store.user,
//   // models: store.printerModels.models,
//   // store: store,
//   stateTest: store && store.demo && store.demo.stateTest,
//   models: store && store.printerModels && store.printerModels.models,
// });
// export default connect(mapStateToProps)(WebUiCoreRoot);
export default WebUiCoreRoot;
