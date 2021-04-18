import * as fs from 'fs'
import * as path from 'path';
import { coffeeApp } from '..'

const pricesJSON = path.join(__dirname, '../../../data/prices.json')
const ordersJSON = path.join(__dirname, '../../../data/orders.json')
const paymentsJSON = path.join(__dirname, '../../../data/payments.json')
const balanceJSON = path.join(__dirname, '../../../data/balance.json')
const newBalanceJSON = path.join(__dirname, '../../../data/new-balance.json')

describe('Coffee App', () => {

  it('should produce the correct balances', () => {
    coffeeApp(pricesJSON, ordersJSON, paymentsJSON, newBalanceJSON)
    expect(fs.readFileSync(newBalanceJSON)).toEqual(fs.readFileSync(balanceJSON))
  })
})