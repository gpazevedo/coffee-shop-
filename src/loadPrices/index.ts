import { Price } from "@/coffee"

export const loadPrices: (prices: Price[]) => Map<string, Price> = (prices: Price[]) => {
  const priceMap: Map<string, Price> = new Map()

  prices.forEach((drink) => {
    priceMap.set(drink.drink_name, drink)
  })
  return priceMap
}