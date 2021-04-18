import { buildBalances } from '..'

describe("Coffee Shop", () => {
  it("should return an empty array", () => {
    expect(buildBalances([], [], [])).toEqual([])
  })

  it("should the total ordered for each user", () => {
    const prices = [
      { "drink_name": "short espresso", "prices": { "small": 3.03 } },
      { "drink_name": "latte", "prices": { "small": 3.50, "medium": 4.00, "large": 4.50 } },
      { "drink_name": "flat white", "prices": { "small": 3.50, "medium": 4.00, "large": 4.50 } },
      { "drink_name": "long black", "prices": { "small": 3.25, "medium": 3.50 } },
      { "drink_name": "mocha", "prices": { "small": 4.00, "medium": 4.50, "large": 5.00 } },
      { "drink_name": "supermochacrapucaramelcream", "prices": { "large": 5.00, "huge": 5.50, "mega": 6.00, "ultra": 7.00 } }
    ]

    const orders = [
      { "user": "coach", "drink": "long black", "size": "medium" },
      { "user": "ellis", "drink": "long black", "size": "small" },
      { "user": "rochelle", "drink": "flat white", "size": "large" },
      { "user": "coach", "drink": "flat white", "size": "large" },
      { "user": "zoey", "drink": "long black", "size": "medium" },
      { "user": "zoey", "drink": "short espresso", "size": "small" }
    ]

    const balance = [{
      "balance": 8,
      "order_total": 8,
      "payment_total": 0,
      "user": "coach",
    },
    {
      "balance": 3.25,
      "order_total": 3.25,
      "payment_total": 0,
      "user": "ellis",
    },
    {
      "balance": 4.50,
      "order_total": 4.50,
      "payment_total": 0,
      "user": "rochelle",
    },
    {
      "balance": 6.53,
      "order_total": 6.53,
      "payment_total": 0,
      "user": "zoey",
    },
    ];
    expect(buildBalances(prices, orders, [])).toEqual(balance)
  })

  it("should the total ordered for each user", () => {
    const prices = [
      { "drink_name": "short espresso", "prices": { "small": 3.03 } },
      { "drink_name": "latte", "prices": { "small": 3.50, "medium": 4.00, "large": 4.50 } },
      { "drink_name": "flat white", "prices": { "small": 3.50, "medium": 4.00, "large": 4.50 } },
      { "drink_name": "long black", "prices": { "small": 3.25, "medium": 3.50 } },
      { "drink_name": "mocha", "prices": { "small": 4.00, "medium": 4.50, "large": 5.00 } },
      { "drink_name": "supermochacrapucaramelcream", "prices": { "large": 5.00, "huge": 5.50, "mega": 6.00, "ultra": 7.00 } }
    ]

    const orders = [
      { "user": "coach", "drink": "long black", "size": "medium" },
      { "user": "ellis", "drink": "long black", "size": "small" },
      { "user": "rochelle", "drink": "flat white", "size": "large" },
      { "user": "coach", "drink": "flat white", "size": "large" },
      { "user": "zoey", "drink": "long black", "size": "medium" },
      { "user": "zoey", "drink": "short espresso", "size": "small" }
    ]

    const payments = [
      {
        "user": "coach",
        "amount": 2.5,
      },
      {
        "user": "ellis",
        "amount": 2.6,
      },
      {
        "user": "rochelle",
        "amount": 4.5,
      },
      {
        "user": "ellis",
        "amount": 0.65,
      },
    ];

    const balance = [{
      "balance": 5.5,
      "order_total": 8,
      "payment_total": 2.5,
      "user": "coach",
    },
    {
      "balance": 0,
      "order_total": 3.25,
      "payment_total": 3.25,
      "user": "ellis",
    },
    {
      "balance": 0,
      "order_total": 4.50,
      "payment_total": 4.5,
      "user": "rochelle",
    },
    {
      "balance": 6.53,
      "order_total": 6.53,
      "payment_total": 0,
      "user": "zoey",
    },
    ];
    expect(buildBalances(prices, orders, payments)).toEqual(balance)
  })

})
