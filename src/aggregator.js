import { Trade } from "./Trade";
import { getProps } from "./symbolProperties";
import { calPricePrecision } from "./utils";

export function tradeAggregator(rawTrades) {
  const trade = new Trade();

  for (const raw of rawTrades) {
    let symbolProps = getProps(raw.symbol);

    if (!trade.isPositionOpen()) {
      // skip old trade
      if (raw.realizedPnl !== "0") {
        continue;
      }

      trade.openNewPosition({
        symbol: raw.symbol,
        side: raw.side,
        openTime: raw.time,
        tickSize: symbolProps.t,
        pricePrecision: calPricePrecision(symbolProps.t),
      });
    }

    trade.modifyPosition({
      side: raw.side,
      price: raw.price,
      quantity: raw.qty,
      realizedPnl: raw.realizedPnl,
      fees: raw.commission,
    });

    if (trade.isFlipTrade()) {
      raw.qty = trade.getRestOfPositionSize();
      trade.closePosition({ closeTime: raw.time });
      trade.openNewPosition({
        symbol: raw.symbol,
        side: raw.side,
        openTime: raw.time,
        tickSize: symbolProps.t,
        pricePrecision: calPricePrecision(symbolProps.t),
      });
      trade.modifyPosition({
        side: raw.side,
        price: raw.price,
        quantity: raw.qty,
        realizedPnl: raw.realizedPnl,
      });

      continue;
    }

    if (trade.isPositionNotEmpty()) {
      continue;
    }

    trade.closePosition({ closeTime: raw.time });
  }

  return trade.releaseTrades();
}

export function groupAggregatedTrades(rawData) {
  return groupRawTradesBySymbols(rawData)
    .map((rawTrades) => tradeAggregator(rawTrades))
    .flat();
}

export function groupRawTradesBySymbols(rawData) {
  rawData.sort((a, b) => a.time - b.time);
  const collection = [];
  for (const raw of rawData) {
    if (!collection[raw.symbol]) {
      collection[raw.symbol] = [raw];
      continue;
    }
    collection[raw.symbol].push(raw);
  }
  return Object.values(collection);
}
