import { loadPrices} from '@/loadPrices'
import { loadOrders } from '@/loadOrders'
import { definePrices } from '@/prices'
import { Order, Balance } from '@/coffee'
import { ordersToBalance } from '@/ordersToBalance';
import { amount } from '@/amount'

export function coffeeApp(prices: any[], orders: any[], payments: any[]): { user: string, cost: number }[] {

  const price = definePrices(loadPrices(prices));
  const ordered: Order[] = loadOrders(orders)

  return ordered.map((order) => {
    let cost = price(order.beverage)
    if (cost === undefined) {
      console.log(`The price of ${order.beverage} orderd by ${order.user} is undefined.`)
      return { user: order.user, cost: 0 }
    } else {
      return { user: order.user, cost: cost }
    }
  }, [])
}

