import { loadPrices } from '..'
import { amount } from '@/amount'

describe("Price Map", () => {
  it("should work for a drink with one size", () => {
    const prices = [{ "drink_name": "short espresso", "prices": { "small": 3.0 } }];

    expect(loadPrices(prices)).toEqual([
      {
        beverage: { drink: 'short espresso', size: 'small' },
        price: amount(3)
      }
    ])
  });

  it("should work for n drink with n sizes", () => {
    const prices = [{ "drink_name": "short espresso", "prices": { "small": 3.0 } },
      { "drink_name": "short espresso", "prices": { "small": 3.0 } },
      { "drink_name": "flat white", "prices": { "small": 3.5, "medium": 4.0, "large": 4.5 } }];

    expect(loadPrices(prices)).toEqual([
      {
        beverage: { drink: 'short espresso', size: 'small' },
        price: amount(3)
      },
      {
        beverage: { drink: 'short espresso', size: 'small' },
        price: amount(3)
      },
      {
        beverage: { drink: 'flat white', size: 'small' },
        price: amount(3.5)
      },
      {
        beverage: { drink: 'flat white', size: 'medium' },
        price: amount(4)
      },
      {
        beverage: { drink: 'flat white', size: 'large' },
        price: amount(4.5)
      }
    ])
  });
})