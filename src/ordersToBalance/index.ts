import { Price, Order } from '@/coffee'

export const ordersToBalance: (
  addBalance: (props: { account: string, paid: number, ordered: number }) => void,
  orders: Order[], priceMap: Map<string, Price>) => void =
  (addBalance, orders, priceMap) => {

    orders.forEach((order) => {
      const cost = priceMap.get(order.beverage.drink)?.prices[order.beverage.size]

      if (cost === undefined) {
        console.log(`Price undefined for ${order.beverage}`)
      } else {
        addBalance({ account: order.user, paid: 0, ordered: cost })
      }
    })
  }