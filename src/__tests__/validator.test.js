import { describe, test, expect } from "vitest";
import { isPlate, isDate, isTime } from "../utils/validator";

describe("isPlate function", () => {
    // Test case: Valid string structure
    test('Valid string structure: ABC-1234', () => {
        expect(isPlate('ABC-1234')).toBe(true);
    });

    // Test case: Invalid string structure - not enough digits
    test('Invalid string structure: ABC - 12 (not enough digits)', () => {
        expect(isPlate('ABC-12')).toBe(false);
    });

    // Test case: Invalid string structure - lowercase letters
    test('Invalid string structure: abC - 1234 (lowercase letters)', () => {
        expect(isPlate('abC-1234')).toBe(false);
    });

    // Test case: Invalid string structure - too many digits
    test('Invalid string structure: ABC - 12345 (too many digits)', () => {
        expect(isPlate('ABC-12345')).toBe(false);
    });

    // Test case: Invalid string structure - non-digit characters
    test('Invalid string structure: XYZ - ABCD (non-digit characters)', () => {
        expect(isPlate('XYZ-ABCD')).toBe(false);
    });
});

describe("isDate function", () => {
    // Test case: Valid date string
    test('Valid date string: 2023-11-26', () => {
        expect(isDate('2023-11-26')).toBe(true);
    });

    // Test case: Invalid date string - incorrect format
    test('Invalid date string: 2023/11/26 (incorrect format)', () => {
        expect(isDate('2023/11/26')).toBe(false);
    });

    // Test case: Invalid date string - invalid month (45)
    test('Invalid date string: 2023-45-26 (invalid month)', () => {
        expect(isDate('2023-45-26')).toBe(false);
    });

    // Test case: Invalid date string - invalid day (32)
    test('Invalid date string: 2023-11-32 (invalid day)', () => {
        expect(isDate('2023-11-32')).toBe(false);
    });

    // Test case: Invalid date string - non-numeric characters
    test('Invalid date string: abc-def-ghi (non-numeric characters)', () => {
        expect(isDate('abc-def-ghi')).toBe(false);
    });

    // Test case: Invalid date string - short string
    test('Invalid date string: 2023-11 (short string)', () => {
        expect(isDate('2023-11')).toBe(false);
    });

    // Test case: Invalid date string - long string
    test('Invalid date string: 2023-11-26-01 (long string)', () => {
        expect(isDate('2023-11-26-01')).toBe(false);
    });
});

describe("isTime function", () => {
    // Test case: Valid time
    test('Valid time: 14:30', () => {
        expect(isTime('14:30')).toBe(true);
    });

    // Test case: Invalid time - incorrect format
    test('Invalid time: 2:30 PM (incorrect format)', () => {
        expect(isTime('2:30 PM')).toBe(false);
    });

    // Test case: Invalid time - hours out of range (negative)
    test('Invalid time: -1:30 (hours out of range)', () => {
        expect(isTime('-1:30')).toBe(false);
    });

    // Test case: Invalid time - hours out of range (24)
    test('Invalid time: 24:30 (hours out of range)', () => {
        expect(isTime('24:30')).toBe(false);
    });

    // Test case: Invalid time - minutes out of range (negative)
    test('Invalid time: 12:-15 (minutes out of range)', () => {
        expect(isTime('12:-15')).toBe(false);
    });

    // Test case: Invalid time - minutes out of range (60)
    test('Invalid time: 12:60 (minutes out of range)', () => {
        expect(isTime('12:60')).toBe(false);
    });

    // Test case: Invalid time - non-numeric characters
    test('Invalid time: abc:def (non-numeric characters)', () => {
        expect(isTime('abc:def')).toBe(false);
    });

    // Test case: Invalid time - short string
    test('Invalid time: 9: (short string)', () => {
        expect(isTime('9:')).toBe(false);
    });

    // Test case: Invalid time - long string
    test('Invalid time: 12:34:56 (long string)', () => {
        expect(isTime('12:34:56')).toBe(false);
    });
});
