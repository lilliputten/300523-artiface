/** @module config.modals
 *  @description Core app config
 *  @since 2019.09.10, 14:25
 *  @changed 2020.12.22, 00:32
 */

const modalsConfig = { // Common-used app variables...

  // Id for modals & modals wrapper
  containerId: 'ModalsContainer',

  // Controller reference (`ModalsContainer` instance)
  controller: undefined, // Was (before 2021.03.18): `containerNode`

  // Initialized flag
  isInited: false,

  // __initPromiseResolve: undefined, // See `initPromise` below

};


// Delayed initialization (resolving in `ModalsContainer`)...
modalsConfig.initPromise = new Promise(function(resolve) {
  modalsConfig.__initPromiseResolve = resolve;
});

module.exports = modalsConfig;
