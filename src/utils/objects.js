/** @module objects
 *  @description Objects utilities
 *  @since 2021.04.22, 13:47
 *  @changed 2021.04.22, 13:47
 */

export function reverseKeyAndValue(result, [key, val]) {
  return { ...result, [val]: key };
}
export function reverseDataHash(hash) {
  return Object.entries(hash).reduce(reverseKeyAndValue, {});
}

