import { Price, Beverage } from '@/coffee'

const key = (beverage: Beverage) => beverage.drink + '||' + beverage.size;
const priceList = new Map<string, number>()

export const definePrices = (prices: Price[]) => {
  prices.forEach((price) => {
    priceList.set(key(price.beverage), price.price)
  })
  return (beverage: Beverage): number | undefined => priceList.get(key(beverage))
}