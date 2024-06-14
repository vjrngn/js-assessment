import { describe, it, expect } from 'vitest';
import { delayedSum } from '../src/problem6.js';

describe('delayedSum', () => {
    it('should return a promise', () => {
        const result = delayedSum(1, 2);
        expect(result instanceof Promise).toBe(true);
    });

    it('should resolve with the sum after 500ms', async () => {
        const start = Date.now();
        const result = await delayedSum(2, 3);
        const end = Date.now();
        expect(result).toBe(5);
        expect(end - start).toBeGreaterThanOrEqual(500);
    });
});
