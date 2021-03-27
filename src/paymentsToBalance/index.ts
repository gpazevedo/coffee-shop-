import { Balance, Payment } from '@/coffee'
import { amount } from '@/amount'

export const paymentsToBalance: (balances: Map<string, Balance>, payments: Payment[]) => Map<string, Balance> =
  (balances: Map<string, Balance>, payments: Payment[]) => {

  payments.forEach((payment) => {
    const balance = balances.get(payment.user)
  
    balances.set(payment.user, balance === undefined ?
      { account: payment.user, paid: amount(payment.value), ordered: 0 }
      : { account: payment.user, paid: amount(balance.paid + payment.value), ordered: amount(balance.ordered) })
  })
  return balances
}