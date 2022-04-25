// Trade.js
export declare class Trade {
  constructor();
  getAverageOpenPrice(): any;
  getAverageClosePrice(): any;
  getAveragePrice(price: any): any;
  getPriceChangeInPercent(): any;
  calVolume(): void;
  addVolume({ quantity, price }: {
    quantity: any;
    price: any;
  }): void;
  getVolume(): any;
  calPositionSize(): void;
  addSizeToPosition(size: any): void;
  subtractSizeFromPosition(size: any): void;
  getMaxPositionSize(): any;
  getRestOfPositionSize(): number;
  addPnl(pnl: any): void;
  getProfit(): any;
  getFees(): any;
  addFees(fees: any): void;
  getSide(): "LONG" | "SHORT";
  openNewPosition({ symbol, side, openTime }: {
    symbol: any;
    side: any;
    openTime: any;
  }): void;
  isPositionNotEmpty(): boolean;
  increasePosition({ price, quantity }: {
    price: any;
    quantity: any;
  }): void;
  closePosition({ closeTime }: {
    closeTime: any;
  }): void;
  modifyPosition({ side, price, quantity, realizedPnl, fees }: {
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

// utils.js
export declare function calPriceChangeInPercentage(openPrice: any, closePrice: any): string;
export declare function calAveragePrice(list: any): number;
export declare function getPrecision(price: any): number;
export declare function currencyNormalizer(money: any, options?: {}): string;

// calculation.js
export declare function add(...number: any[]): any;
export declare function subtract(...number: any[]): any;
export declare function multiply(...number: any[]): any;
export declare function divide(...number: any[]): any;
