/** @module lang
 *  @desc Language support tools
 *  @since 2021.01.11, 18:21
 *  @changed 2021.06.07, 15:21
 */

import config from 'config';

// import { ru } from 'date-fns/esm/locale'; // 2021.08.16, 11:44: Jest error `SyntaxError: Unexpected token 'export'` for ` export { default as af } from "./af/index.js";` -- see [jest error Unexpected token 'export' when I try to import localizations · Issue #2485 · date-fns/date-fns](https://github.com/date-fns/date-fns/issues/2485#issuecomment-845801901)
import { ru } from 'date-fns/locale';
import { registerLocale } from 'react-datepicker';
import * as stringUtils from './strings';

// Initialize locales...
registerLocale('ru-RU', ru);
// TDDO: Register locales in target project (using config data)?

export function setLang(lang) {
  // console.log('WebUiCore:utils:lang:setLang', lang)
  // debugger
  config.app.lang = lang;
}
export function getLang() {
  return config.app.lang;
}
export function getCommonLangText(id, defaultText, propsLang) {
  if (!propsLang && typeof defaultText === 'object') { // Passed arguments: (id, propsLang)
    propsLang = defaultText;
    defaultText = null;
  }
  const lang = propsLang || getLang();
  const text = lang && lang.components && lang.components.common && lang.components.common[id];
  // console.log('WebUiCore:utils:lang:getCommonLangText', id, lang)
  // debugger
  return (text != null) ? text : (defaultText || stringUtils.humanizeId(id));
}
