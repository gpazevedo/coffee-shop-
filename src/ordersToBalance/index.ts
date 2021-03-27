import { Balance, Beverage, Order } from '@/coffee'
import { amount } from '@/amount'

export const ordersToBalance: (balances: Map<string, Balance>, orders: Order[], price: (beverage: Beverage) => number | undefined) => Map<string, Balance> = (balances: Map<string, Balance>, orders: Order[], price: (beverage: Beverage) => number | undefined)  => {

  orders.forEach((order) => {
    const balance = balances.get(order.user)
    const cost = price(order.beverage)
  
    if (cost === undefined) {
      console.log(`Price undefined for ${order.beverage}`)
    } else {
      balances.set(order.user, balance === undefined ? 
        { account: order.user, paid: 0, ordered: amount(cost) } 
        : {account: order.user, paid: amount(balance.paid), ordered: amount(balance.ordered + cost)})  
    }
  })
  return balances
}
