/** @module objects.test
 *  @since 2021.07.22, 18:21
 *  @changed 2021.07.23, 15:23
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
    it('should serialize null', () => {
      const result = objects.safeStringify(null);
      expect(result).toEqual('null');
    });
    it('should serialize undefined as null', () => {
      const result = objects.safeStringify(undefined);
      expect(result).toEqual('null');
    });
    it('should serialize scalar', () => {
      const result = objects.safeStringify(0);
      expect(result).toEqual('0');
    });
    it('should serialize simple objects', () => {
      const result = objects.safeStringify({ a: 1, b: 2 });
      expect(result).toEqual('{"a":1,"b":2}');
    });
    it('should serialize objects with sorted keys', () => {
      const result = objects.safeStringify({ b: 2, a: 1 });
      expect(result).toEqual('{"a":1,"b":2}');
    });
    it('should serialize duplicated sub-objects', () => {
      const subObj = { sub: true };
      const result = objects.safeStringify({ b: 2, a: 1, sub1: subObj, sub2: subObj });
      expect(result).toEqual('{"a":1,"b":2,"sub1":{"sub":true},"sub2":"[cyclic: @.sub1]"}');
    });
    it('should serialize cyclic references', () => {
      const subObj = { sub: true };
      subObj.sub = subObj;
      const result = objects.safeStringify({ b: 2, a: 1, subObj });
      expect(result).toEqual('{"a":1,"b":2,"subObj":{"sub":"[cyclic: @.subObj]"}}');
    });
  });

});
