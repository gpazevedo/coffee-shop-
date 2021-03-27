import { Beverage, Price } from "@/coffee"
import { amount } from "@/amount";

type Drink = {
  drink_name: string,
  prices: number
}

export const loadPrices: (externalPrices: any[]) => Price[] = (externalPrices: any[]) => {
  const extPrices: Drink[] = externalPrices;
  let prices: Price[] = []

  extPrices.forEach((drink) => {
    const sizes = Object.entries(drink.prices)
    sizes.forEach((size) => {
      const beverage: Beverage = { drink: drink.drink_name, size: size[0] }
      prices = prices.concat([{ beverage, price: amount(size[1]) }])
    })
  })
  return prices
}