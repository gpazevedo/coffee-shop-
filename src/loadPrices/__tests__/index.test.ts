import { loadPrices } from '..'
import {Price} from '@/coffee'
import { amount } from '@/amount'

describe("Price Map", () => {
  const prices: Price[] = [{ "drink_name": "short espresso", "prices": { "small": 3.0 } },
  { "drink_name": "short espresso", "prices": { "small": 3.0 } },
  { "drink_name": "flat white", "prices": { "small": 3.5, "medium": 4.0, "large": 4.5 } }];
const priceMap = loadPrices(prices)

  it("should work for n drink with n sizes", () => {
    const price = priceMap.get('short espresso')
    expect(price).not.toBe(undefined)
    if (price) {
      expect(price.prices['small']).toEqual(3)
    }
  })

  it("should work for n drink with n sizes", () => {
    const price = priceMap.get('flat white')
    expect(price).not.toBe(undefined)
    if (price) {
      expect(price.prices['small']).toEqual(3.5)
      expect(price.prices['medium']).toEqual(4)
      expect(price.prices['large']).toEqual(4.5)
    }
  })
})