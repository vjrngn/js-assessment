import { describe, it, expect, vi } from 'vitest';
import { fetchData } from '../src/problem3.js';

describe('fetchData', () => {
    it('should return a promise', () => {
        const result = fetchData();
        expect(result instanceof Promise).toBe(true);
    });

    it('should resolve with "data" after 1 second', async () => {
        const start = vi.getRealSystemTime();

        const result = await fetchData();
        expect(result).toBe('data');

        const end = vi.getRealSystemTime();
        expect(end - start).toBeBetween(1000, 1050);
    });
});
