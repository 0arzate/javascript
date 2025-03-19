import { expect, suite } from "vitest";
import miltipliesThreeFive from "../../src/code-wars/multiples-three-five.js"

suite("Multiples of 3 and 5", (test) => {
  test('should return zero when params is a negative number', () => {
    const result = miltipliesThreeFive(-1)
    expect(result).toEqual(0)
  })

  test('should execute recursive from number passed by params to 0', () => {
    const result = miltipliesThreeFive(4)
    expect(result).toEqual(3)
  })

  test('should return the sum of all number are multiplies five or three', () => {
    const result = miltipliesThreeFive(10)
    expect(result).toEqual(23)
  })
})