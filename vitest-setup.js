import {expect} from "vitest";

expect.extend({
    toBeBetween(received, floor, ceiling) {
        const pass = received >= floor && received <= ceiling;
        if (pass) {
            return {
                message: () => `expected ${received} not to be between ${floor} and ${ceiling}`, pass: true,
            };
        } else {
            return {
                message: () => `expected ${received} to be between ${floor} and ${ceiling}`, pass: false,
            };
        }
    }
})