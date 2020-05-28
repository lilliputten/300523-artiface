/** @module config.constants
 *  @description Basic constants
 *  @since 2019.09.10, 14:25
 *  @changed 2020.05.10, 06:13
 */

/** AuthResCode values ([id]: code)... */
export const AuthResCodes = {
  ACCESS_DENIED: 0,
  ACCESS_GRANTED: 1,
  ACCOUNT_NOT_FOUND: 2,
  INVALID_PWD: 3,
  TEMP_PWD_EXPIRED: 4,
  ACCOUNT_BLOCKED: 5,
  PWD_AUTH_DISABLED: 6,
  CARD_AUTH_DISABLED: 7,
  PWD_CHANGE_REQUIRED: 8,
  CARD_EXPIRED: 9,
  CARD_NOT_FOUND: 10,
  EXCEEDED_AUTH_ATTEMPTS: 11,
  LOGIN_CONFIRMATION_REQUIRED: 12, // LoginConfirmationRequired
}
/** Reversed AuthResCode values ([code]: id)... */
export const AuthResIds = Object.entries(AuthResCodes).reduce((result, [id, code]) => (
  { ...result, [code]: id }
), {})

/** Date conversion & presentation templates... */
export const dateFormat = 'DD.MM.YYYY HH:mm'
export const timeFormat = 'HH:mm'

/** App title parts delimiter */
export const pageDelim = ' – ' // en-dash
// export const pageDelim = ' — ' // em-dash
