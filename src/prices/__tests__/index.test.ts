import { definePrices } from '..'
import { Beverage } from '@/coffee'
import { loadPrices } from '@/loadPrices'

describe("Price List", () => {

  it("should get the correct price", () => {
    const price = definePrices(loadPrices(prices));
    const beverage: Beverage = { drink: "latte", size: "medium" }
    expect(price(beverage)).not.toBe(undefined)
    expect(price(beverage)).toEqual(4.0)
  })
})

const prices : any[] = [
  {
    "drink_name": "short espresso",
    "prices": {
      "small": 3.0
    }
  },
  {
    "drink_name": "latte",
    "prices": {
      "small": 3.5,
      "medium": 4.0,
      "large": 4.5
    }
  },
  {
    "drink_name": "flat white",
    "prices": {
      "small": 3.5,
      "medium": 4.0,
      "large": 4.5
    }
  },
  {
    "drink_name": "long black",
    "prices": {
      "small": 3.25,
      "medium": 3.5
    }
  },
  {
    "drink_name": "mocha",
    "prices": {
      "small": 4.0,
      "medium": 4.5,
      "large": 5.0
    }
  },
  {
    "drink_name": "supermochacrapucaramelcream",
    "prices": {
      "large": 5.0,
      "huge": 5.5,
      "mega": 6.0,
      "ultra": 7.0
    }
  }
]