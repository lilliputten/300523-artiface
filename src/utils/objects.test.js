/** @module objects.test
 *  @since 2021.07.22, 18:21
 *  @changed 2021.07.22, 18:36
 */
/* eslint-env jest */

import * as objects from './objects';

describe('objects', () => {

  // beforeAll(() => {})

  it('should expose object', () => {
    const type = typeof objects;
    expect(type).toBe('object');
  });

  describe('safeStringify', () => {
    it('should be a function', () => {
      const type = typeof objects.safeStringify;
      expect(type).toBe('function');
    });
    it('should serialize simple objects', () => {
      const result = objects.safeStringify({ a: 1, b: 2 });
      expect(result).toEqual('{"a":1,"b":2}');
    });
    it('should serialize objects with sorted keys', () => {
      const result = objects.safeStringify({ b: 2, a: 1 });
      expect(result).toEqual('{"a":1,"b":2}');
    });
  });

});

