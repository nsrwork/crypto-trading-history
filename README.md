### Trade history log aggregated by positions

For example, you opened several transactions for coin pairs and after some time closed in parts.
In the exchange report, you will see several transactions. This library will combine all transactions
and display the aggregated result, calculate additional data and make it more readable.

### Make a request and get all the data you will be aggregating

`GET /fapi/v1/userTrades` https://binance-docs.github.io/apidocs/futures/en/#position-information-v2-user_data

You will get response something like below:

```
  {
    symbol: "1000SHIBUSDT",
    id: 421178634,
    orderId: 4997953617,
    side: "BUY",
    price: "0.038400",
    qty: "1000",
    realizedPnl: "0",
    marginAsset: "USDT",
    quoteQty: "38.400000",
    commission: "0.00768000",
    commissionAsset: "USDT",
    time: 1640341654465,
    positionSide: "BOTH",
    buyer: true,
    maker: true
  }
```

Use `tradeAggregator` or `groupAggregatedTrades` functions for aggregate trades:

```js
const trades = tradeAggregator(rawTrades);
```

Result:

```
  {
    openTime: 1640341654465,
    closeTime: 1640341672566,
    symbol: "1000SHIBUSDT",
    side: "LONG",
    priceOpen: "$0.038400",
    priceClose: "$0.038416",
    quantity: "1000",
    fee: "$0.03",
    profit: "-$0.01",
    priceChangeInPercent: "0.04%",
    volume: "$38.40"
  }
```

For more examples read tests :)

### Exchange support

Binance
