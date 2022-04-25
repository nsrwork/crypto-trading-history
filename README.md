### Trade aggregator

Imagine you open a position and gradually add up to the working volume.
After reaching the desired price, you decide to close the position, also in parts.
In fact, it was one trade, but in the reports you will see several transactions at once.

This library aggregates transactions and displays:

- complete trade report
- profit minus commission
- percentage of price movement
- the volume that was at the peak in dollars and coins

### How to install

```bash
npm i crypto-trading-history
```

### How to use

Currently, only the Binance Futures crypto exchange is supported.
The data to be aggregated should be obtained from the API:

```
GET /fapi/v1/userTrades
```

[Binance API Documentation](https://binance-docs.github.io/apidocs/futures/en/#account-trade-list-user_data)

In response, an array of objects will arrive, which should be fed to the `groupAggregatedTrades()`
function, the array will be sorted by coins and grouped by trades:

```json
// response from binance api
[
  {
    "symbol": "NKNUSDT",
    "id": 57856665,
    "orderId": 1243901519,
    "side": "BUY",
    "price": "0.38080",
    "qty": "132",
    "realizedPnl": "0",
    "marginAsset": "USDT",
    "quoteQty": "49.92240",
    "commission": "0.00998448",
    "commissionAsset": "USDT",
    "time": 1640945904886,
    "positionSide": "BOTH",
    "buyer": true,
    "maker": true
  },
  {
    "symbol": "NKNUSDT",
    "id": 57858773,
    "orderId": 1243921202,
    "side": "SELL",
    "price": "0.37820",
    "qty": "132",
    "realizedPnl": "-0.34320000",
    "marginAsset": "USDT",
    "quoteQty": "50.26560",
    "commission": "0.01005312",
    "commissionAsset": "USDT",
    "time": 1640947616268,
    "positionSide": "BOTH",
    "buyer": false,
    "maker": true
  }
]
```

```js
const responseFromAPI = "...";
const rawTrades = JSON.parse(responseFromAPI);

const result = groupAggregatedTrades(rawTrades);
```

As a result, you will receive an aggregated report in a convenient format:

```js
[
  {
    closeTime: 1640947616268,
    fee: "$0.02",
    openTime: 1640945904886,
    priceChangeInPercent: "-0.69%",
    priceClose: "$0.3782",
    priceOpen: "$0.3808",
    profit: "-$0.36",
    quantity: "132",
    side: "LONG",
    symbol: "NKNUSDT",
    volume: "$50.27",
  },
];
```
