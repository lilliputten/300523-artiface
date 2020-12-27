/** @module config.modals
 *  @description Core app config
 *  @since 2019.09.10, 14:25
 *  @changed 2020.12.22, 00:32
 */

const modalsConfig = { // Common-used app variables...

  // Id for modals & modals wrapper
  containerId: 'ModalsContainer',
  // containerClass: 'ModalsContainer',

  containerNode: null,
  domNode: null,

  isInited: false,

}

modalsConfig._initPromiseResolve = null
modalsConfig.initPromise = new Promise(function(resolve) {
  modalsConfig._initPromiseResolve = resolve
})

module.exports = modalsConfig
