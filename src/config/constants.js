/** @module config.constants
 *  @description Basic constants
 *  @since 2019.09.10, 14:25
 *  @changed 2021.05.14, 15:33
 */

/** Date conversion & presentation templates... */

// Date/time formats for use in DatePicker, see https://date-fns.org/v2.16.1/docs/format
// export const dateFormat = 'DD.MM.YYYY HH:mm';
// export const timeFormat = 'HH:mm';
export const dateFormat = 'dd.MM.yyyy';
export const timeFormat = 'HH:mm';
export const timeSecFormat = 'HH:mm:ss';
export const timeMsFormat = 'HH:mm:ss:SSS';
export const dateTimeFormat = dateFormat + ' ' + timeFormat;
export const dateTimeSecFormat = dateFormat + ' ' + timeSecFormat;
export const dateTimeMsFormat = dateFormat + ' ' + timeMsFormat;
export const dateRangeDelim = ' – ';

export const timeIntervals = 60;
export const dayTicks = 1000 * 60 * 60 * 24;
export const weekTicks = dayTicks *7;

// dateStringFormat: 'yyyy.mm.dd HH:MM:ss',
// dateTagFormat: 'yymmdd-HHMM',

/** App title parts delimiter */
// export const pageDelim = ' – ' // en-dash

export const defaultQuote = '"';
export const squareOpen = '[';
export const squareClose = ']';
export const curlyOpen = '{';
export const curlyClose = '}';

export const promiseStatusTexts = { // Only for `vow` module
  0: 'PENDING',
  1: 'RESOLVED',
  2: 'FULFILLED',
  3: 'REJECTED',
};

export const errRegExp = /^Error[:\n\r\s]*/m;
export const errDelim = '\n'; // <br/>\n';
export const errDelim2 = errDelim + errDelim;
export const ellipsis = '…'; // '...';


export const maxShowStringLength = 300;
