/** @module strings
 *  @description Objects utilities
 *  @since 2019.04.03, 14:38
 *  @changed 2020.05.29, 13:35
 */

import React from 'react'

const strings = {

  /**
   * @param {string} val
   * @return {number}
   */
  toNumber: function(val) {
    return (val && !isNaN(val)) ? Number(val) : 0
  },
  /**
   * @param {string} val
   * @return {String}
   */
  toString: function(val) {
    return val // String(val);
  },
  /**
   * @param {string} val
   * @return {boolean}
   */
  toBoolean: function(val) {
    return !!(val && val !== 'false' && val !== '0')
  },

  /** Returns length of common parts of two strings
   * @param {String} a
   * @param {String} b
   * @return {Number}
   */
  getCommonLength: function(a, b) {
    var maxLen = Math.min(a.length, b.length)
    var commonLen = 0
    for (var len = 1; len < maxLen; len++) {
      var s = a.substr(0, len)
      if (b.indexOf(s) === 0) {
        commonLen = len
      }
    }
    return commonLen
  },

  /** Uppercase first letter of string
   * @param {string} str
   * @return {str}
   */
  ucFirst: function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1) // .toLowerCase();
  },

  /** Convert string to desired type
   * @param {string} type
   * @param {string} val
   * @return {*}
   */
  toType: function(type, val) {
    var methodName = 'to' + this.ucFirst(type)
    if (/* this.hasOwnProperty(methodName) && */ typeof this[methodName] === 'function') {
      val = this[methodName](val)
    }
    return val
  },

  /**
   * @param {Number} length - Target hex string length
   * @return {String}
   */
  randomHexString: function(length) {
    var result = ''
    for (var i = 0; i < length; i++) {
      result += Math.floor((Math.random()) * 0xf).toString(16)
    }
    return result
  },

  /** Convert (mostly error responses) html to text
   * @param {String} html
   * @return {String}
   */
  html2string: function(html) {
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
      .trim() // Trim
  },

  // TODO: Move to react strings helper?
  splitMultiline: function(text, opt) {
    opt = opt || {}
    const textClassName = opt.textClassName || 'Text'
    const lineClassName = opt.lineClassName || 'TextLine'
    return text.split('\n\n').map((text, n) => {
      const lines = text.split('\n').map((line, n) => {
        return React.createElement('div', { key: 'line' + String(n), className: lineClassName }, line)
      })
      return React.createElement('div', { key: 'text' + String(n), className: textClassName }, lines)
    })
  },

}

// module.exports = strings
export default strings
