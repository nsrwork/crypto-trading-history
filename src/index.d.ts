// Trade.js
export declare class Trade {
  constructor();
  getAverageOpenPrice(): string;
  getAverageClosePrice(): string;
  getPriceChangeInPercent(): string;
  calVolume(): void;
  addVolume({ quantity, price }: { quantity: any; price: any }): void;
  getVolume(): string;
  calPositionSize(): void;
  addSizeToPosition(size: any): void;
  subtractSizeFromPosition(size: any): void;
  getMaxPositionSize(): string;
  getRestOfPositionSize(): number;
  addPnl(pnl: any): void;
  getProfit(): string;
  getFees(): string;
  addFees(fees: any): void;
  getSide(): "LONG" | "SHORT";
  openNewPosition({
    symbol,
    side,
    openTime,
    tickSize,
    pricePrecision,
  }: {
    symbol: any;
    side: any;
    openTime: any;
    tickSize: any;
    pricePrecision: any;
  }): void;
  isPositionNotEmpty(): boolean;
  increasePosition({ price, quantity }: { price: any; quantity: any }): void;
  closePosition({ closeTime }: { closeTime: any }): void;
  modifyPosition({
    side,
    price,
    quantity,
    realizedPnl,
    fees,
  }: {
    side: any;
    price: any;
    quantity: any;
    realizedPnl: any;
    fees: any;
  }): void;
  isFlipTrade(): boolean;
  releaseTrades(): any;
  isPositionOpen(): any;
}

// aggregator.js
export declare function tradeAggregator(rawTrades: any): any;
export declare function groupAggregatedTrades(rawData: any): any;
export declare function groupRawTradesBySymbols(rawData: any): any[][];

// symbolProperties.js
export declare function getProps(symbolName: any): any;

// utils.js
export declare function calPriceChangeInPercentage(
  openPrice: any,
  closePrice: any
): number;
export declare function calAveragePrice(list: any): number;
export declare function calPricePrecision(ticketSize: string): number;
