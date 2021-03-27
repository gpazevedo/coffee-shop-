import { loadOrders} from '..'

describe("Orders Adapter", () => {
  it("should generate the user's names from the orders", () => {
    const orders = [
      { "user": "coach", "drink": "long black", "size": "medium" },
      { "user": "ellis", "drink": "long black", "size": "small" },
      { "user": "rochelle", "drink": "flat white", "size": "large" },
      { "user": "coach", "drink": "flat white", "size": "large" },
      { "user": "zoey", "drink": "long black", "size": "medium" },
      { "user": "zoey", "drink": "short espresso", "size": "small" }
    ]
    const users = loadOrders(orders)

    expect(users).toEqual([
      {
        "beverage": {
          "drink": "long black",
          "size": "medium",
        },
        "user": "coach",
      },
      {
        "beverage": {
          "drink": "long black",
          "size": "small",
        },
        "user": "ellis",
      },
      {
        "beverage": {
          "drink": "flat white",
          "size": "large",
        },
        "user": "rochelle",
      },
      {
        "beverage": {
          "drink": "flat white",
          "size": "large",
        },
        "user": "coach",
      },
      {
        "beverage": {
          "drink": "long black",
          "size": "medium",
        },
        "user": "zoey",
      },
      {
        "beverage": {
          "drink": "short espresso",
          "size": "small",
        },
        "user": "zoey",
      },
    ])
  })
})