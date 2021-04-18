export type Balance = {
  account: string,
  paid: number,
  ordered: number
}

export type Beverage = {
  drink: string,
  size: string
}

export type Order = {
  user: string,
  beverage: Beverage
}

export type Payment = {
  user: string,
  value: number
}

export type Price = {
  drink_name: string
  prices: {
    [key: string]: number
  }
}