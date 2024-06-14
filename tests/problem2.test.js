import { describe, it, expect } from 'vitest';
import { createCalculator } from '../src/problem2.js';

describe('createCalculator', () => {
    it('should return an object with `add` and `subtract` methods', () => {
        const calculator = createCalculator();
        expect(typeof calculator.add).toBe('function');
        expect(typeof calculator.subtract).toBe('function');
    });

    it('should correctly update and return the value', () => {
        const calculator = createCalculator();
        expect(calculator.add(5)).toBe(5);
        expect(calculator.add(3)).toBe(8);
        expect(calculator.subtract(2)).toBe(6);
    });
});
