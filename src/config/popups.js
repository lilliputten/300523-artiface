/** @module config.app
 *  @description Core app config
 *  @since 2019.09.10, 14:25
 *  @changed 2020.12.22, 00:32
 */

const popupsConfig = { // Common-used app variables...

  // Id for modals & popups wrapper
  containerId: 'PopupsContainer',
  // containerClass: 'PopupsContainer',

  containerNode: null,
  domNode: null,

  isInited: false,

}

popupsConfig._initPromiseResolve = null
popupsConfig.initPromise = new Promise(function(resolve) {
  popupsConfig._initPromiseResolve = resolve
})

module.exports = popupsConfig
