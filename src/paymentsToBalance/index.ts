import { Payment } from '@/coffee'

export const paymentsToBalance: (
  addBalance: (props: { account: string, paid: number, ordered: number }) => void,
  payments: Payment[]) => void =
  (addBalance, payments: Payment[]) => {

    payments.forEach((payment) => {
      addBalance({ account: payment.user, paid: payment.value, ordered: 0 })
    })
  }
