import 'module-alias/register'
import { readJSON } from '@/readJSON'
import { coffeeApp } from '@/coffeeApp'


const pricesJSON = './data/prices.json'
const ordersJSON = './data/orders.json'
const paymentsJSON = './data/payments.json'

const balances = coffeeApp(readJSON(pricesJSON), readJSON(ordersJSON), readJSON(paymentsJSON))

balances.forEach((balance) => {
  console.log(balance)
})
