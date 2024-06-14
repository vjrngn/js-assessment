import { describe, it, expect } from 'vitest';
import { add, multiply } from '../src/problem1.js';

describe('add', () => {
    it('should return the sum of two numbers', () => {
        expect(add(1, 2)).toBe(3);
        expect(add(-1, 1)).toBe(0);
    });
});

describe('multiply', () => {
    it('should return the product of two numbers', () => {
        expect(multiply(2, 3)).toBe(6);
        expect(multiply(-2, 3)).toBe(-6);
    });
});
