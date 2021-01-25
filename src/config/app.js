/** @module config.app
 *  @description Core app config
 *  @since 2019.09.10, 14:25
 *  @changed 2021.01.24, 21:42
 */

module.exports = { // Common-used app variables...

  defaultPageSize: 20, // Number of entries per page

  useCssModules: false, // To use css-module mappings (see `cssMappings` below)

  // Css-modules mappings in format `{ [originalClassName]: transformedClassName }`.
  // Set it with `WebUiCore.utils.setFactoryOptions(React, { useCssModules: true, cssMappings })`
  cssMappings: null,

  // cssModulePrefix: 'WebUiCore', // UNUSED

  lang: null, // i18n language texts provider (from target project) // TODO
  // Mostly using texts from `lang.components.common`

  defaultLocale: 'ru-RU', // One of: 'ru-RU', 'en-US'
};
