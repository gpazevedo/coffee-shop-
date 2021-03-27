import { loadPrices} from '@/loadPrices'
import { loadOrders } from '@/loadOrders'
import { loadPayments } from '@/loadPayments'
import { Order, Payment, Balance } from '@/coffee'
import { ordersToBalance } from '@/ordersToBalance';
import { paymentsToBalance } from '@/paymentsToBalance'
import { amount } from '@/amount'

export function coffeeApp(prices: any[], orders: any[], payments: any[]): { user: string, order_total: number, payment_total: number }[] {

  const priceMap = loadPrices(prices);
  const ordered: Order[] = loadOrders(orders)
  const paid: Payment[] = loadPayments(payments)

  const noBalance: Map<string, Balance> = new Map()
  const balanceFromOrders = ordersToBalance(noBalance, ordered, priceMap)
  const balanceFromPayments = paymentsToBalance(balanceFromOrders, paid)

  const balances = Array.from(balanceFromPayments.values()).map((balance) => {
    return {
      balance: amount(balance.ordered - balance.paid),
        user: balance.account, order_total: balance.ordered, payment_total: balance.paid
    }
  })
  return balances
}