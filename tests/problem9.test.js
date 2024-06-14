import { describe, it, expect } from 'vitest';
import { memoize } from '../src/problem9.js';

describe('memoize', () => {
    it('should cache the result of the function', () => {
        const add = (a, b) => a + b;
        const memoizedAdd = memoize(add);

        expect(memoizedAdd(1, 2)).toBe(3);
        expect(memoizedAdd(1, 2)).toBe(3); // Cached result
    });

    it('should return the cached result for the same arguments', () => {
        let count = 0;
        const add = (a, b) => { count++; return a + b; };
        const memoizedAdd = memoize(add);

        memoizedAdd(1, 2);
        memoizedAdd(1, 2);
        expect(count).toBe(1); // Function `add` should only be called once
    });
});
