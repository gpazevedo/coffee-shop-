import { buildBalances } from '@/buildBalances'
import { readJSON } from '@/readJSON'
import { writeJSON } from '@/writeJSON'

export async function coffeeApp(pricesJSON: string, ordersJSON: string, paymentsJSON: string, balanceJSON: string) {
  writeJSON(balanceJSON, buildBalances(readJSON(pricesJSON), readJSON(ordersJSON), readJSON(paymentsJSON)))
}