declare module 'aggregator' {
  import { Trade } from 'Trade';

  export function tradeAggregator(rawTrades: any[]): Trade[];

  export function groupAggregatedTrades(rawData: any[]): Trade[];

  export function groupRawTradesBySymbols(rawData: any[]): any[];
}

declare module 'calculation' {
  export function add(num1: string, num2: string): string;

  export function subtract(num1: string, num2: string): string;

  export function multiply(num1: string, num2: string): string;

  export function divide(num1: string, num2: string): string;
}

declare module 'Trade' {
  export class Trade {
    constructor();

    getAverageOpenPrice(): string;

    getAverageClosePrice(): string;

    getPriceChangeInPercent(): string;

    calVolume(): void;

    addVolume(data: { quantity: string, price: string }): void;

    getVolume(): string;

    calPositionSize(): void;

    addSizeToPosition(size: string): void;

    subtractSizeFromPosition(size: string): void;

    getMaxPositionSize(): string;

    getRestOfPositionSize(): number;

    addPnl(pnl: string): void;

    getProfit(): string;

    getFees(): string;

    addFees(fees: string): void;

    getSide(): string;

    openNewPosition(data: { symbol: string, side: string, openTime: number }): void;

    isPositionNotEmpty(): boolean;

    increasePosition(data: { price: string, quantity: string }): void;

    closePosition(data: { closeTime: number }): void;

    modifyPosition(data: { side: string, price: string, quantity: string, realizedPnl: string, fees: string }): void;

    isFlipTrade(): boolean;

    releaseTrades(): any[];

    isPositionOpen(): boolean;
  }
}

declare module 'utils' {
  export function calPriceChangeInPercentage(openPrice: string, closePrice: string): string;

  export function calAveragePrice(list: string[]): string;

  export function getPrecision(price: string): number;

  export function currencyNormalizer(money: string, options?: Intl.NumberFormatOptions): string;
}
