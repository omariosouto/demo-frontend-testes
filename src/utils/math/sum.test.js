import { sum } from './sum';

describe('sum()', () => {
    it('should return the sum of two numbers', () => {
        expect(sum(1,1)).toBe(2);
    });
})