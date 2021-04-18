import { loadPrices } from '@/loadPrices'
import { loadOrders } from '@/loadOrders'
import { loadPayments } from '@/loadPayments'
import { Order, Payment, Balance } from '@/coffee'
import { ordersToBalance } from '@/ordersToBalance';
import { paymentsToBalance } from '@/paymentsToBalance'
import { amount } from '@/amount'

export function buildBalances(prices: any[], orders: any[], payments: any[]): { user: string, order_total: number, payment_total: number }[] {

  function addBalance(props: { account: string, paid: number, ordered: number }) {
    const oldBalance = balances.get(props.account)
    const newBalance = oldBalance
      ? { account: props.account, paid: amount(oldBalance.paid + props.paid), ordered: amount(oldBalance.ordered + props.ordered) }
      : { account: props.account, paid: amount(props.paid), ordered: amount(props.ordered) }

    balances.set(props.account, newBalance)
  }

  const priceMap = loadPrices(prices);
  const ordered: Order[] = loadOrders(orders)
  const paid: Payment[] = loadPayments(payments)

  const balances: Map<string, Balance> = new Map()
  ordersToBalance(addBalance, ordered, priceMap)
  paymentsToBalance(addBalance, paid)

  return Array.from(balances.values())
    .map((balance) => {
      return {
        balance: amount(balance.ordered - balance.paid),
        user: balance.account, order_total: balance.ordered, payment_total: balance.paid
      }
    })
}