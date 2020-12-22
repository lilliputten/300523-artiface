/** @module build
 *  @desc Library exportable ditributive
 *  @since 2020.05.19, 17:16
 *  @changed 2020.12.22, 00:32
 */

export config from 'config'
export * as utils from 'utils'

export * from './elements'
export * from './forms'

// Demo component
export Hello from './demo/Hello'

// Basic styles
import './build.pcss'

import PopupsContainer from './elements/PopupsContainer'

export default PopupsContainer

