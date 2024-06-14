import { describe, it, expect } from 'vitest';
import { createCounter } from '../src/problem5.js';

describe('createCounter', () => {
    it('should return a function', () => {
        const counter = createCounter();
        expect(typeof counter).toBe('function');
    });

    it('should return sequential numbers starting from 1', () => {
        const counter = createCounter();
        expect(counter()).toBe(1);
        expect(counter()).toBe(2);
        expect(counter()).toBe(3);
    });

    it('should maintain state between calls', () => {
        const counterA = createCounter();
        const counterB = createCounter();
        expect(counterA()).toBe(1);
        expect(counterA()).toBe(2);
        expect(counterB()).toBe(1);
        expect(counterB()).toBe(2);
    });
});
