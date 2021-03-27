import 'module-alias/register'
import { readJSON } from '@/readJSON'
import { coffeeApp } from '@/coffeeApp'


const pricesJSON = './data/prices.json'
const ordersJSON = './data/orders.json'

const balances = coffeeApp(readJSON(pricesJSON), readJSON(ordersJSON), [])

balances.forEach((balance) => {
  console.log(balance)
})
