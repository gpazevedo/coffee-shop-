import { coffeeApp } from '..'

describe("Coffee Shop", () => {
  it("should return an empty array", () => {
    expect(coffeeApp([], [], [])).toEqual([])
  })

  it("should return an account for each user", () => {
    const prices =      [
      { "drink_name": "short espresso", "prices": { "small": 3.03 } },
      { "drink_name": "latte", "prices": { "small": 3.50, "medium": 4.00, "large": 4.50 } },
      { "drink_name": "flat white", "prices": { "small": 3.50, "medium": 4.00, "large": 4.50 } },
      { "drink_name": "long black", "prices": { "small": 3.25, "medium": 3.50 } },
      { "drink_name": "mocha", "prices": { "small": 4.00, "medium": 4.50, "large": 5.00 } },
      { "drink_name": "supermochacrapucaramelcream", "prices": { "large": 5.00, "huge": 5.50, "mega": 6.00, "ultra": 7.00 } }
    ]

    const orders =       [
      { "user": "coach", "drink": "long black", "size": "medium" },
      { "user": "ellis", "drink": "long black", "size": "small" },
      { "user": "rochelle", "drink": "flat white", "size": "large" },
      { "user": "coach", "drink": "flat white", "size": "large" },
      { "user": "zoey", "drink": "long black", "size": "medium" },
      { "user": "zoey", "drink": "short espresso", "size": "small" }
    ]

    const pricedOrders : { user: string, cost: number }[]= [
      {
        "cost": 3.5,
        "user": "coach",
      },
      {
        "cost": 3.25,
        "user": "ellis",
      },
      {
        "cost": 4.5,
        "user": "rochelle",
      },
      {
        "cost": 4.5,
        "user": "coach",
      },
      {
        "cost": 3.5,
        "user": "zoey",
      },
      {
        "cost": 3.03,
        "user": "zoey",
      },
    ]
    expect(coffeeApp(prices, orders, [])).toEqual(pricedOrders)
  })
})
