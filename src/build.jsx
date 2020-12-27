/** @module build
 *  @desc Library exportable ditributive
 *  @since 2020.05.19, 17:16
 *  @changed 2020.12.28, 01:09
 */

import React from 'react'

export config from 'config'
export * as utils from 'utils'
export * as helpers from 'helpers'

export * from './elements'
export * from './forms'

// Demo component
export Hello from './demo/Hello'

// Basic styles
import './build.pcss'

import ModalsContainer from './elements/ModalsContainer'

// TODO: Use WebUiCoreContext?
const WebUiCoreRoot = ({ children }) => (
  <React.Fragment>
    {children}
    <ModalsContainer />
  </React.Fragment>
)
export default WebUiCoreRoot
