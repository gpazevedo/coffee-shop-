import { amount } from '..'

describe("amount", () => {
  it("should round correctly", () => {
    expect(amount(75.01)).toBe(75.01)
    expect(amount(100.0000000001, 10)).toEqual(100.0000000001)
  })
})
