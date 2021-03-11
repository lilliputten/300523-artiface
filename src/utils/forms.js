/** @module forms
 *  @since 2021.03.11, 20:00
 *  @changed 2021.03.11, 20:00
 */

// Unique for serializer
let uniqCounter = 0;

/** Get unique form identifier
 * @param {Object} [opt]
 * @param {String} [opt.prefix]
 * @return {String}
 */
export function getUniqFormId({ prefix = 'uniqForm' } = {}) {
  // const prefix = opts.prefix || 'uniqForm';
  const id = prefix + (uniqCounter++ || '');
  return id;
}
