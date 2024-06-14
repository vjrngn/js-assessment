import { describe, it, expect } from 'vitest';
import { createPubSub } from '../src/problem11.js';

describe('Pub/Sub System', () => {
    it('should allow subscribing and publishing events', () => {
        const pubSub = createPubSub();
        const callback = vi.fn();

        pubSub.subscribe('event1', callback);
        pubSub.publish('event1', 'data');

        expect(callback).toHaveBeenCalledWith('data');
    });

    it('should allow unsubscribing from events', () => {
        const pubSub = createPubSub();
        const callback = vi.fn();

        pubSub.subscribe('event1', callback);
        pubSub.unsubscribe('event1', callback);
        pubSub.publish('event1', 'data');

        expect(callback).not.toHaveBeenCalled();
    });

    it('should handle multiple subscribers', () => {
        const pubSub = createPubSub();
        const callback1 = vi.fn();
        const callback2 = vi.fn();

        pubSub.subscribe('event1', callback1);
        pubSub.subscribe('event1', callback2);
        pubSub.publish('event1', 'data');

        expect(callback1).toHaveBeenCalledWith('data');
        expect(callback2).toHaveBeenCalledWith('data');
    });
});
