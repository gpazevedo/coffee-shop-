import { Balance, Price, Order } from '@/coffee'
import { amount } from '@/amount'

export const ordersToBalance: (balances: Map<string, Balance>, orders: Order[], priceMap: Map<string, Price>) => Map<string, Balance> = (balances: Map<string, Balance>, orders: Order[], priceMap: Map<string, Price>)  => {

  orders.forEach((order) => {
    const balance = balances.get(order.user)
    const cost = priceMap.get(order.beverage.drink)?.prices[order.beverage.size]
  
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
