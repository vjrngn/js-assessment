import { describe, it, expect } from 'vitest';
import { flattenArray } from '../src/problem10.js';

describe('flattenArray', () => {
    it('should flatten a nested array', () => {
        const nestedArray = [1, [2, [3, [4]], 5], 6];
        const flatArray = flattenArray(nestedArray);
        expect(flatArray).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('should handle deeply nested arrays', () => {
        const nestedArray = [[[[1]], [2]], [[[3]], 4]];
        const flatArray = flattenArray(nestedArray);
        expect(flatArray).toEqual([1, 2, 3, 4]);
    });
});
