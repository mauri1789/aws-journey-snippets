import { sum, sumArray  } from "./work"

describe("test sum function", () => {
    test('sum two numbers', () => {
        expect(sum(2, 4)).toBe(6)
    })
    test('sum two large numbers', () => {
        expect(sum(190, 478)).toBe(668)
    })
})

describe("test sumArray function", () => {
    test('sum a collection of numbers', () => {
        expect(sumArray([1, 2, 3, 4, 5])).toBe(15)
    })
    test('sum a collection of large numbers', () => {
        expect(sumArray([431, 90, 320, 120])).toBe(961)
    })
})
