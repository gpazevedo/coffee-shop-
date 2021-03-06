#!/usr/bin/env node

import 'module-alias/register'
import { program } from 'commander'
import { coffeeApp } from 'coffeeApp'

program
  .version('0.0.3')
  .description("Coffee shop balance")
  .option('-, --path <name>', 'data folder where orders.json, payments.json and prices.json is located')
  .parse(process.argv);

const options = program.opts()
const path = options.path ? options.path : './data'

const pricesJSON = path + '/prices.json'
const ordersJSON = path + '/orders.json'
const paymentsJSON = path + '/payments.json'
const balanceJSON = path + '/balance.json'

coffeeApp(pricesJSON, ordersJSON, paymentsJSON, balanceJSON)
