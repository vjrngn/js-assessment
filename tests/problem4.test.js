import { describe, it, expect } from 'vitest';
import { Person } from '../src/problem4.js';

describe('Person', () => {
    it('should create an object with name and age properties', () => {
        const person = new Person('Alice', 30);
        expect(person.name).toBe('Alice');
        expect(person.age).toBe(30);
    });

    it('should introduce the person correctly', () => {
        const person = new Person('Bob', 25);
        expect(person.introduce()).toBe('Hi, I am Bob and I am 25 years old.');
    });
});
