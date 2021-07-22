/** @module objects
 *  @description Objects utilities
 *  @since 2021.04.22, 13:47
 *  @changed 2021.07.22, 17:56
 */
/* global jQuery, BemEntity */

import {
  // defaultQuote,
  squareOpen,
  squareClose,
  curlyOpen,
  curlyClose,
  promiseStatusTexts,
  errRegExp,
  errDelim,
  errDelim2,
  // ellipsis,
  maxShowStringLength,
} from 'config/constants';

import { safeEscape } from './strings';

export function reverseKeyAndValue(result, [key, val]) {
  return { ...result, [val]: key };
}
export function reverseDataHash(hash) {
  return Object.entries(hash).reduce(reverseKeyAndValue, {});
}

export function isDomElement(obj) {
  return !!obj && (typeof HTMLElement === 'object' ? obj instanceof HTMLElement : // DOM2
    typeof obj === 'object' && obj.nodeType === 1 && typeof obj.nodeName === 'string'
  );
}

export function arrayIndexOf(arr, find) {
  if (!(arr instanceof Array) || !arr.length) {
    return -1;
  }
  // else if (typeof arr.indexOf === 'function') {
  //   return arr.indexOf(find);
  // }
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === find) {
      return i;
    }
  }
  return -1;
}

export function asyncPromiseState(promise) { // See also `config.constants:promiseStatusTexts` -- for `vow` module
  const temp = {};
  return Promise.race([promise, temp])
    .then(value => (value === temp) ? 'PENDING' : 'FULFILLED', () => 'REJECTED')
  ;
}

/**
 * @param {} errors
 * @return {object}
 */
export function errorToPlainString(error/* , opt */) {

  // opt = opt || {};

  var
    text = '',
    plusText,
    // maxShowStringLength = config.app.maxShowStringLength || 300,
    errType = typeof error,
    match
  ;

  try {

    if ( errType === 'string' && ( match = error.match(/<soap:Text.*?>([\s\S]*)\s*<\/soap:Text/m) ) != null && match[0] ) {
      text = '<b>Ошибка SOAP:</b> ' + match[1];
    }
    // Если ошибка уже обработана или пуста, то ничего не показываем
    else if ( !error || error.processed ) {
      return '';
    }
    // Если ошибка -- не объект, показываем, как строку
    else if ( errType !== 'object' ) {
      text = String(error);
    }
    else if ( Array.isArray(error) ) {
      text = error.map(this.errorToPlainString, this).join(errDelim);
    }
    // Объект с ошибкой
    else if ( error instanceof Error ) {
      text = /* error.stack ||  */error.message || String(error);
      if (error.reference || error.description || error.nextError) {
        plusText = this.errorToPlainString(error.reference || error.description || error.nextError);
        if (plusText && plusText !== text) {
          text = text + ': ' + plusText;
        }
      }
      if (error.error) {
        plusText = this.errorToPlainString(error.error);
        if (plusText) {
          text += errDelim2 + plusText;
        }
      }
    }
    // ajax 404
    else if ( ( ( error.jqXHR && error.jqXHR.status === 404 ) || error.error === 'Not found' ) && error.settings && error.settings.url ) {
      console.error( 'errors.errorToPlainString Not found', { error: error } ); // eslint-disable-line no-console
      text = 'Сетевой ресурс не найден: <u>' + error.settings.url + '</u>';
    }
    else if ( error.message ) {
      console.error( 'errors.errorToPlainString message', { error: error } ); // eslint-disable-line no-console
      // text += ( error.description || 'Сообщение об ошибке:' ) + errDelim2;
      text += error.message;
    }
    else if ( /* error.error === 'errorMessages' && */ Array.isArray(error.errorMessages) ) {
      console.error( 'errors.errorToPlainString errorMessages', { error: error } ); // eslint-disable-line no-console
      // text = ( error.description || 'Список ошибок:' ) + errDelim2;
      text += error.errorMessages
        .map(function(error){ return this.errorToPlainString(error); }, this)
        .join(errDelim2)
      ;
    }
    else if ( error.textStatus === 'parsererror' ) {
      text = 'Ошибка обработки ответа сервера';
      plusText = error.error || ( error.jqXHR && error.jqXHR.responseText && ( match = error.jqXHR.responseText.match(/<b>(Parse error|Fatal error).*/) ) !== null && match[0] ) ;
      if ( plusText ) {
        if ( plusText.length > maxShowStringLength ) {
          plusText = plusText.substr(0, maxShowStringLength-3)+'...';
        }
        text += errDelim + plusText;
      }
    }
    else if ( error.jqXHR && !error.error && error.textStatus === 'error' ) {
      text = 'Некорректный ответ сервера (сервер недоступен)';
    }
    else if ( error.error === 'jqXHR' ) {
      console.error( 'errors.errorToPlainString jqXHR', { error: error } ); // eslint-disable-line no-console
      text = error.description || 'Ошибка ajax';
      var
        props = {
          'адрес' : error.url || error.location,
        },
        propsText = Object.keys(props)
          .filter(function(name){ return props[name] ? true : false; })
          .map(function(name){ return name+': '+props[name]; })
          .join(', ')
      ;
      if ( propsText ) {
        text += ' ('+propsText+')';
      }
      return text;
    }
    // Chaining errors
    else if ( error.error && typeof error.error === 'object' /* && !Array.isArray(error.error) */ ) {
      text += this.errorToPlainString(error.error);
    }
    // Исключение сервера, вида: {error: "Exception", errorCode: 0, description: "Library\Helper::getJsonResponse: Node error: Недостаточно прав для выполнения данного запроса"}
    else if ( error.error === 'Exception' && error.description ) {
      text += '<b>Исключение сервера (php/phalcon):</b> ' + error.description;
    }
    else {
      text = error.description || error.message || error.error || error.errorText || error.status || 'Неопределённая ошибка';
      if (text === 'canceledByUser') { // TODO?
        text = 'Отменено пользователем';
      }
      // ?????
      var plus = [];
      if ( error.jqXHR && error.jqXHR.responseText ) {
        plus.push(error.jqXHR.responseText);
      }
      if ( error.error && typeof error.error === 'object' ) {
        plus.push(error.error);
      }
      if ( Array.isArray(error.trace) ) {
        plus.push('<b>Ошибка перехвачена в:</b> ' + error.trace.join(', '));
      }
      if ( plus.length ) {
        text += errDelim2 + plus.map(function(plus){
          if ( typeof plus === 'object' ) {
            plus = this.errorToPlainString(plus);
          }
          if ( typeof plus === 'string' && plus.match(/<html/i) ) {
            plus = '<b>HTML:</b> ' + plus
              .replace(/<(script|link|style)[^<>]*>[\s\S]*?<\/\1>/gm, '')
              .replace(/(\s*<[^<>]*>\s*)+/gm, ' ')
            ;
          }
          if ( typeof plus === 'string' && plus.length > maxShowStringLength ) {
            plus = plus.substr(0, maxShowStringLength - 3) + '...';
          }
          return plus;
        }, this).join(errDelim);
      }
    }

    // Strip extra spaces...
    var result = text
      .replace(/[ \t]+\n/gm, '\n') // Hanged spaces
      .replace(/\n[ \t]+/gm, '\n') // Hanged spaces
      .replace(/\n{3,}/gm, '\n\n') // Extra newlines
      .trim() // Trim
    ;

    return result;

  }
  catch (error) {
    console.error('errorToPlainString catched error:', { error: error }); // eslint-disable-line no-console
    debugger; // eslint-disable-line no-debugger
    ( error.trace || ( error.trace = [] ) ).push('errors:errorToPlainString');
    return error;
  }

}

export function safeStringify(obj, objId, depth, cache, cacheNames, nice) {
  // var hasJQuery = (typeof jQuery !== 'undefined');
  var status;
  objId = objId || '@';
  depth = depth || 0;
  cache = cache || [];
  cacheNames = cacheNames || [];
  try {
    // Reusable variables...
    var p, n, res, id, val, itemId;
    // Nicify params...
    var niceSpace = ''; // Single indent space
    var niceBaseSpace = ''; // This depth level indent space
    if (nice) {
      niceSpace = ' ';
      if (typeof nice === 'number') {
        for (n = 1; n < nice; n++) {
          niceSpace += ' ';
        }
      }
      for (n = 0; n < depth; n++) {
        niceBaseSpace += niceSpace;
      }
    }
    var niceDepthSpace = niceBaseSpace + niceSpace; // This depth level indent space
    var niceNL = nice ? '\n' : ''; // Newline
    // Object type...
    var type = typeof obj;
    var isObject = obj && type === 'object';
    if (obj == null || (type === 'number' && isNaN(obj))) { // Null-like
      return 'null'; // Only JSON symbol for undefined or null values
    }
    else if (type === 'function') {
      p = obj.name ? 'function ' + obj.name : obj.toString ? safeEscape(obj.toString().replace(/[\n\r\t ]+/g, ' ')) : 'anonymous function';
      p = p.replace(/^(function\s+\S+)\(.*$/, '$1');
      if (p.length > 80) {
        p = p.substr(0, 80 - 3) + '...';
      }
      return '"[' + p + ']"';
    }
    else if (type === 'number' || type === 'boolean') { // Simple type
      return safeEscape(obj);
    }
    else if (!isObject || type === 'string' || type === 'boolean') { // Quotable type
      return safeEscape(obj, true);
    }
    else if (typeof BemEntity !== 'undefined' && obj instanceof BemEntity /* obj.entityName && obj.domElem */) { // BemNode
      var bemId = '';
      if (obj.entityName) {
        // bemId += '(entityName:' + obj.entityName + ')';
        bemId += obj.entityName;
      }
      if (obj.domElem && obj.domElem[0] && obj.domElem[0].className) {
        bemId += '(className:.' + obj.domElem[0].className.replace(/ /g, '.') + ')';
      }
      // if (obj._modsCache) {
      //   bemId += '(mods:' + Object.keys(obj._modsCache).map(function(key)) + ')';
      // }
      bemId = '"[BemNode: ' + safeEscape(bemId) + ']"';
      return bemId;
    }
    else if (isDomElement(obj)) { // domNode?
      var domId = '';
      if (obj.nodeType) {
        domId += '(nodeType:' + obj.nodeType + ')';
      }
      /* if (obj._class) {
       *   domId += '(_class:' + obj._class + ')';
       * }
       */
      if (obj.className) {
        domId += '.' + obj.className.replace(/ /g, '.');
      }
      if (obj.id) {
        domId += '#' + obj.id;
      }
      domId = '"[DomNode: ' + safeEscape(domId) + ']"';
      return domId;
    }
    else if (typeof obj.then === 'function' && (obj instanceof Promise || (typeof Promise.isPromise === 'function' && Promise.isPromise(obj)))) { // Promise?
      status = obj._status && promiseStatusTexts[obj._status] || '';
      if (status) {
        status = ': ' + status;
      }
      if (obj.__id) {
        status = ' ' + obj.__id + status;
      }
      return '"[Promise' + status + ']"';
    }
    else if (typeof obj._promise && typeof Promise.isDeferred === 'function' && Promise.isDeferred(obj)) { // vow: Deferred?
      status = obj._promise._status;
      return '"[Deferred status:' + status + ']"';
    }
    else if (typeof XMLHttpRequest === 'object' && obj instanceof XMLHttpRequest && obj.readyState != null) { // XHR?
      // readyState values:
      // 0 	UNSENT 	Client has been created. open() not called yet.
      // 1 	OPENED 	open() has been called.
      // 2 	HEADERS_RECEIVED 	send() has been called, and headers and status are available.
      // 3 	LOADING 	Downloading; responseText holds partial data.
      // 4 	DONE 	The operation is complete.
      var readyState = obj.readyState;
      var info = 'readyState:' + readyState;
      if (readyState === 4) {
        if (obj.status) {
          info += ',status:' + obj.status;
        }
      }
      return '"[XHR ' + safeEscape(info) + ']"';
    }
    // TODO: Event object
    else if (obj instanceof Error) { // Error?
      // Using `UTILS.errorToPlainString` (included `errors` module to `UTILS`)
      var message = errorToPlainString(obj, { showStack: true });
      var stack = String(obj.stack || '').replace(errRegExp, '');
      // Remove message duplicate from beggining of stack info
      if (stack.indexOf(message) === 0) {
        stack = stack.substr(message.length).trim();
      }
      if (obj.name && obj.name !== 'Error') { // oxpd-style error
        message = '[' + obj.name + '] ' + message;
      }
      if (stack) {
        message += '\n' + stack;
      }
      return safeEscape('Error: ' + message, true);
    }
    else if ((p = cache.indexOf(obj)) !== -1) { // Cyclic reference?
      var cacheId = cacheNames[p];
      return '"[cyclic: ' + safeEscape(cacheId) + ']"';
    }
    else if (obj instanceof Array || (typeof jQuery !== 'undefined' && obj instanceof jQuery)) { // Array, jQuery?
      cache.push(obj);
      cacheNames.push(objId);
      res = squareOpen;
      // p = obj.slice();
      // p.sort();
      for (n = 0; n < obj.length; n++) {
        itemId = objId + squareOpen + n + squareClose;
        val = obj[n];
        if (n) {
          res += ',';
        }
        res += niceNL + niceDepthSpace + this.safeStringify(val, itemId, depth + 1, cache, cacheNames, nice);
      }
      res += niceNL + niceBaseSpace + squareClose;
      return res;
    }
    else { // Hash object...
      cache.push(obj);
      cacheNames.push(objId);
      res = curlyOpen;
      // var newObj = Object.keys(obj).reduce(function(newObj, id) {
      p = Object.keys(obj);
      p.sort();
      for (n = 0; n < p.length; n++) {
        id = p[n];
        val = obj[id];
        itemId = objId + ((/\W/.test(id)) ? squareOpen + id + squareClose : '.' + id);
        if (n) {
          res += ',';
        }
        val = this.safeStringify(val, itemId, depth + 1, cache, cacheNames, nice);
        val = safeEscape(id, true) + ':' + val;
        res += niceNL + niceDepthSpace + val;
      }
      res += niceNL + niceBaseSpace + curlyClose;
      return res;
    }
  }
  catch (error) {
    console.error(error); // eslint-disable-line no-console
    debugger; // eslint-disable-line no-debugger
    throw error;
  }
}

