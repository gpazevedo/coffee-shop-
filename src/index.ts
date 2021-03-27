import 'module-alias/register'
import { readJSON } from '@/readJSON'
import {writeJSON} from '@/writeJSON'
import { coffeeApp } from '@/coffeeApp'


const pricesJSON = './data/prices.json'
const ordersJSON = './data/orders.json'
const paymentsJSON = './data/payments.json'
const balanceJSON = './data/payments.json'

const balances = coffeeApp(readJSON(pricesJSON), readJSON(ordersJSON), readJSON(paymentsJSON))

writeJSON(balanceJSON, balances)

balances.forEach((balance) => {
  console.log(balance)
})
