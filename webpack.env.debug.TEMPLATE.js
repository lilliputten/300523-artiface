/** @module webpack.env.local.js
 *  @desc Override webpack parameters from 'webpack.env.js'. May be overrided with command-line `--env.*` options.
 *  @since 2020.02.01, 12:00
 *  @changed 2021.05.06, 12:30
 */
module.exports = {

  /** DEV_DEBUG: Enable extra debug level (on developer's machine, useful for include in `webpack.env.debug.js`) */
  DEV_DEBUG: true,

  /** Default remote server ip address */
  HOST: '192.168.10.188',

  /** Default remote server protocol (http, https) */
  // PROTOCOL: 'http',

  /** Default remote server port */
  // PORT: '11117',

  /** DEV_TEST_SSO: Test sso mode (using fake html entry with embedded sso
   * token instead default 'html/default.html`; see initialization of
   * `htmlEntry` value in webpack.config.js)
   */
  // DEV_TEST_SSO: false,

};
