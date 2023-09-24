**Trade Aggregator History**

Do you find yourself making trades in parts, gradually building up to your desired position? Perhaps, after reaching your target price, you decide to close your position in multiple chunks. In essence, it's a single trade, but when you check your reports, you see it as a series of transactions. That's where Trade Aggregator library comes into play.

This library efficiently aggregates these transactions, providing you with:

- A comprehensive trade report.
- Profit calculations, minus commission.
- The percentage movement in the asset's price.
- The peak volume in both dollars and coins.

**Installation**

To get started, simply install the library with npm:

```bash
npm i crypto-trading-history
```

**Usage**

Currently, this library supports the Binance Futures crypto exchange. You'll need to obtain your trading data from the API endpoint:

```
GET /fapi/v1/userTrades
```

You will receive an array of objects in response. These need to be passed to the `groupAggregatedTrades()` function, which will sort and group the data by coins:

Response from Binance API (https://binance-docs.github.io/apidocs/futures/en/#account-trade-list-user_data)

```json
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

Next, you can use the library as follows:

```js
import { groupAggregatedTrades } from "crypto-trading-history";

const rawData = JSON.parse(/*Response from Binance API*/);

const aggregatedReport = groupAggregatedTrades(rawData);
```

As a result, you'll receive an aggregated report in a user-friendly format:

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
