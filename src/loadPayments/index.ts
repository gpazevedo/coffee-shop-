import { amount } from '@/amount'
import { Payment } from '@/coffee'

export type ExternalPayment = {
  user: string;
  amount: number;
}

export function loadPayments(externalPayments: ExternalPayment[]): Payment[] {
  const payments = externalPayments.map((payment) => {
    return { user: payment.user, value: amount(payment.amount) }
  })
  return payments
}