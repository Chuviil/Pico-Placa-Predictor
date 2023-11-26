import { expect, test, describe } from "vitest";
import isAllowedToCirculate from "../utils/predictor";

describe("isAllowedToCirculate function", () => {
    // Test case for Pico y Placa on a weekday during morning hours
    test("Plate ending in 1 on a Monday morning", () => {
        expect(isAllowedToCirculate("ABC1231", "2023-11-27", "08:00")).toBe(false);
    });

    // Test case for Pico y Placa on a weekday during evening hours
    test("Plate ending in 1 on a Wednesday evening", () => {
        expect(isAllowedToCirculate("ABC1231", "2023-11-29", "18:30")).toBe(true);
    });

    // Test case for Pico y Placa on a weekend
    test("Plate ending in 1 on a Saturday morning", () => {
        expect(isAllowedToCirculate("ABC1231", "2023-12-02", "09:00")).toBe(true);
    });

    // Test case for Pico y Placa on a weekend
    test("Plate ending in 1 on a Sunday evening", () => {
        expect(isAllowedToCirculate("ABC1231", "2023-12-03", "19:30")).toBe(true);
    });

    // Test case for Pico y Placa outside of restricted hours
    test("Plate ending in 1 on a Monday afternoon", () => {
        expect(isAllowedToCirculate("ABC1231", "2023-11-27", "16:30")).toBe(false);
    });
});
