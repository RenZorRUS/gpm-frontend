import { classNames } from "./classNames";

describe("classNames", () => {
    test("Pass only the first parameter", () => {
        expect(classNames('testClass')).toBe('testClass');
    })

    test("Pass with additional classes", () => {
        const expectedClass = 'testClass more even more';
        expect(classNames(
            'testClass',
            {},
            ['more', 'even more']
        )).toBe(expectedClass);
    })

    test("Pass with mods", () => {
        const expectedClass = 'testClass expanded highlighted';
        expect(classNames(
            'testClass',
            {expanded: true, highlighted: true},
            []
        )).toBe(expectedClass);
    })

    test("Pass with mods, but one is false", () => {
        const expectedClass = 'testClass expanded';
        expect(classNames(
            'testClass',
            {expanded: true, highlighted: false},
            []
        )).toBe(expectedClass);
    })

    test("Pass with mods, but one is undefined", () => {
        const expectedClass = 'testClass expanded';
        expect(classNames(
            'testClass',
            {expanded: true, highlighted: undefined},
            []
        )).toBe(expectedClass);
    })
});