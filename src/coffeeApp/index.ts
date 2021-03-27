import { loadPrices} from '@/loadPrices'
import { loadOrders } from '@/loadOrders'
import { definePrices } from '@/prices'
import { Order, Balance } from '@/coffee'
import { ordersToBalance } from '@/ordersToBalance';
import { amount } from '@/amount'

export function coffeeApp(prices: any[], orders: any[], payments: any[]): { user: string, order_total: number, payment_total: number }[] {

  const price = definePrices(loadPrices(prices));
  const ordered: Order[] = loadOrders(orders)

  const noBalance: Map<string, Balance> = new Map()
  const balanceFromOrders = ordersToBalance(noBalance, ordered, price)

  const balances = Array.from(balanceFromOrders.values()).map((balance) => {
    return {
      balance: amount(balance.ordered - balance.paid),
        user: balance.account, order_total: balance.ordered, payment_total: balance.paid
    }
  })
  return balances
}

