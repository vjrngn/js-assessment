import { describe, it, expect } from 'vitest';
import { startCounter } from '../src/problem7.js';

describe('startCounter', () => {
    it('should call the callback with an incrementing counter', async () => {
        let count = 0;
        const increment = (num) => { count = num; };
        const counter = startCounter(increment, 100);

        await new Promise(resolve => setTimeout(resolve, 350));
        counter.stop();

        expect(count).toBeGreaterThanOrEqual(3);
    });

    it('should stop the counter when `stop` is called', async () => {
        let count = 0;
        const increment = (num) => { count = num; };
        const counter = startCounter(increment, 100);

        await new Promise(resolve => setTimeout(resolve, 350));
        counter.stop();
        const finalCount = count;

        await new Promise(resolve => setTimeout(resolve, 200));
        expect(count).toBe(finalCount);
    });
});
