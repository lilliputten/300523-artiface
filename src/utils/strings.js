/** @module strings
 *  @description Strings utilities
 *  @since 2019.04.03, 14:38
 *  @changed 2021.07.13, 12:34
 */

import React from 'react';

import { defaultQuote } from 'config/constants';

/**
 * @param {string} val
 * @return {number}
 */
export const toNumber = (val) => {
  return (val && !isNaN(val)) ? Number(val) : 0;
};
/**
 * @param {string} val
 * @return {String}
 */
export const toString = (val) => {
  return val; // String(val);
};
/**
 * @param {string} val
 * @return {boolean}
 */
export const toBoolean = (val) => {
  return !!(val && val !== 'false' && val !== '0');
};

export const typeTransforms = {
  toNumber,
  toString,
  toBoolean,
};

/** Returns length of common parts of two strings
 * @param {String} a
 * @param {String} b
 * @return {Number}
 */
export const getCommonLength = (a, b) => {
  var maxLen = Math.min(a.length, b.length);
  var commonLen = 0;
  for (var len = 1; len < maxLen; len++) {
    var s = a.substr(0, len);
    if (b.indexOf(s) === 0) {
      commonLen = len;
    }
  }
  return commonLen;
};

/** Uppercase first letter of string
 * @param {string} str
 * @return {str}
 */
export const ucFirst = (str) => {
  str = String(str);
  return str && (str.charAt(0).toUpperCase() + str.slice(1)); // .toLowerCase();
};

/** Convert string to desired type
 * @param {string} type
 * @param {string} val
 * @return {*}
 */
export const toType = (type, val) => {
  var methodName = 'to' + ucFirst(type);
  if (/* typeTransforms.hasOwnProperty(methodName) && */ typeof typeTransforms[methodName] === 'function') {
    val = this[methodName](val);
  }
  return val;
};

/**
 * @param {Number} length - Target hex string length
 * @return {String}
 */
export const randomHexString = (length) => {
  var result = '';
  for (var i = 0; i < length; i++) {
    result += Math.floor((Math.random()) * 0xf).toString(16);
  }
  return result;
};

/** Convert (mostly error responses) html to text
 * @param {String} html
 * @return {String}
 */
export const html2string = (html) => {
  return html && html // Process error from (html) response body
    // .replace(/\s*<head>[\s\S]*<\/head>/m, '')
    .replace(/\s*<style>[\s\S]*<\/style>/gm, '')
    .replace(/<title>(.+)<\/title>/gi, '$1:\n')
    .replace(/<[^<>]*>/g, ' ')
    .replace(/\r/gm, '\n') // Newlines
    .replace(/[ \t]+\n/gm, '\n') // Hanged spaces
    .replace(/\n[ \t]+/gm, '\n') // Hanged spaces
    .replace(/\n{3,}/gm, '\n\n') // Extra newlines
    .replace(/\n(.+):*[ \t\n]+\1\n/gm, '\n$1:\n') // Remove repeating titles
    // .replace(/\n/gm, '\\n') // DEBUG: newlines
    .trim(); // Trim
};

// TODO: Move to react strings helper?
export const splitMultiline = (text, opt) => {
  opt = opt || {};
  const textClassName = opt.textClassName || 'Text';
  const lineClassName = opt.lineClassName || 'TextLine';
  return text.split('\n\n').map((text, n) => {
    const lines = text.split('\n').map((line, n) => {
      return React.createElement('div', { key: 'line' + String(n), className: lineClassName }, line);
    });
    return React.createElement('div', { key: 'text' + String(n), className: textClassName }, lines);
  });
};

export function padNumber(num, size) {
  return String(num).padStart(size, '0');
}

/** Make periods for long numbers. Returns string presentation of number.
 * @param {String|Number} num
 * @param {String} [periodChar=' ']
 * @return {String}
 */
export function periodizeNumber(num, periodChar) {
  periodChar = periodChar || ' ';
  num = String(num);
  // If long number...
  if (num.length > 3 && !num.match(/\D/)) {
    num = num.replace(/\B(?=(\d{3})+(?!\d))/g, periodChar);
  }
  return num;
}

/** humanizeId -- Make human-readable string from id (eg, 'thisId' -> 'This Id')
 * @param {String} id
 * @return {String}
 */
export function humanizeId(id) {
  return ucFirst(String(id)).replace(/\B([A-Z][a-z]+)/g, ' $1');
}

export function safeEscape(str, quote, addQuotes) {
  // Passed only addQuotes flag
  if (quote === true && addQuotes == null) {
    addQuotes = true;
    quote = null;
  }
  quote = (quote && typeof quote === 'string') ? quote : defaultQuote;
  var quoteReg = new RegExp(quote, 'g');
  str = String(str)
    .replace(/\\/g, '\\\\')
    .replace(quoteReg, '\\' + quote)
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t')
    // .replace(/\b/g, '\\b')
    .replace(/\f/g, '\\f')
  ;
  if (addQuotes === true && quote) {
    str = quote + str + quote;
  }
  return str;
}

