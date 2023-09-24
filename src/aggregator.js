import { Trade } from "./Trade";

export function tradeAggregator(rawTrades) {
  const trade = new Trade();

  for (const raw of rawTrades) {
    if (!trade.isPositionOpen()) {
      if (raw.realizedPnl !== "0") {
        continue;
      }

      trade.openNewPosition({
        symbol: raw.symbol,
        side: raw.side,
        openTime: raw.time,
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
      });
      trade.modifyPosition({
        side: raw.side,
        price: raw.price,
        quantity: raw.qty,
        realizedPnl: raw.realizedPnl,
        fees: 0,
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
