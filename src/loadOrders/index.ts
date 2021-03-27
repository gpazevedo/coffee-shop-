import { Beverage, Order } from '@/coffee'

export type ExternalOrder = {
  user: string;
  drink: string;
  size: string;
}

export function loadOrders(externalOrders: ExternalOrder[]): Order[] {
  const orders = externalOrders.map((order) => {
    const beverage: Beverage = { drink: order.drink, size: order.size }
    return { user: order.user, beverage }
  })
  return orders
}