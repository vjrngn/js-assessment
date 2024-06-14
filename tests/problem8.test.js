import { describe, it, expect } from 'vitest';
import { deepClone } from '../src/problem8.js';

describe('deepClone', () => {
    it('should clone a simple object', () => {
        const obj = { a: 1, b: 2 };
        const clone = deepClone(obj);
        expect(clone).toEqual(obj);
        expect(clone).not.toBe(obj);
    });

    it('should clone a nested object', () => {
        const obj = { a: 1, b: { c: 2, d: { e: 3 } } };
        const clone = deepClone(obj);
        expect(clone).toEqual(obj);
        expect(clone).not.toBe(obj);
    });

    it('should clone arrays within objects', () => {
        const obj = { a: [1, 2, 3], b: { c: [4, 5, 6] } };
        const clone = deepClone(obj);
        expect(clone).toEqual(obj);
        expect(clone).not.toBe(obj);
    });
});
