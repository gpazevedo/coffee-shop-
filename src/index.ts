#!/usr/bin/env node

import 'module-alias/register'
import { program } from 'commander'
import { readJSON } from '@/readJSON'
import { writeJSON } from '@/writeJSON'
import { coffeeApp } from '@/coffeeApp'

program
  .version('0.0.1')
  .description("Coffee shop balance")
  .option('-, --path <name>', 'data folder where orders.json, payments.json and prices.json is located')
  .parse(process.argv);

const options = program.opts()
const path = options.path ? options.path : './data'

const pricesJSON = path + '/prices.json'
const ordersJSON = path + '/orders.json'
const paymentsJSON = path + '/payments.json'
const balanceJSON = path + '/balance.json'

const balances = coffeeApp(readJSON(pricesJSON), readJSON(ordersJSON), readJSON(paymentsJSON))

writeJSON(balanceJSON, balances)

balances.forEach((balance) => {
  console.log(balance)
})
