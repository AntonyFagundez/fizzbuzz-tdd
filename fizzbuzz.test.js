const fizzbuzz = require('./fizzbuzz');
const { FIZZ, BUZZ, FIZZBUZZ } = require('./constants');


describe('fizzbuzz', () => {
    test('dummy test', () => {
        expect(true).toBe(true);
    });

    test('should return an Error if receive a string', () => {
        expect(() => {
            fizzbuzz("14");
        }).toThrowError("The argument must be a number");
    });

    test('should return an Error if receive a object', () => {
        expect(() => {
            fizzbuzz({});
        }).toThrowError("The argument must be a number");
    });

    test('should return an Error if receive a Array', () => {
        expect(() => {
            fizzbuzz([]);
        }).toThrowError("The argument must be a number");
    });

    test('should return 0 if they recive 0',()=>{
        const expected = 0;
        const result = fizzbuzz(0);
        expect(result).toBe(expected);
    })

    test('should return 1 if they recive 1', () => {
        const expected = 1;
        const result = fizzbuzz(1);
        expect(result).toBe(expected);
    });

    test(`should return '${FIZZ}' if they receive 3`, () => {
        const expected = FIZZ;
        const result = fizzbuzz(3);
        expect(result).toBe(expected);
    });

    test(`should return '${FIZZ}' if they receive a multiple of 3`, () => {
        const expected = FIZZ;
        const result = fizzbuzz(6);
        expect(result).toBe(expected);
    });

    test(`should return '${BUZZ}' if they receive a multiple of 5`, () => {
        const expected = BUZZ;
        const result = fizzbuzz(5);
        expect(result).toBe(expected);
    });

    test(`should return '${FIZZBUZZ}' if they receive a multiple of 3 and 5`, () => {
        const expected = FIZZBUZZ;
        const result = fizzbuzz(15);
        expect(result).toBe(expected);
    });

});
