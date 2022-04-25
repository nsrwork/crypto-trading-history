import {
  calAveragePrice,
  calPriceChangeInPercentage,
  currencyNormalizer,
  getPrecision,
} from "./utils";
import { add, subtract, multiply } from "./calculation";

export class Trade {
  constructor() {
    this.isOpen = false;
    this.symbol = "";
    this.openPrice = [];
    this.closePrice = [];
    this.openTime = 0;
    this.volume = {
      max: 0,
      current: 0,
    };
    this.positionSize = {
      max: 0,
      current: 0,
    };
    this.pnl = 0;
    this.fees = 0;
    this.side = "";
    this.aggregatedTrades = [];
  }

  getAverageOpenPrice() {
    return this.getAveragePrice(this.openPrice);
  }

  getAverageClosePrice() {
    return this.getAveragePrice(this.closePrice);
  }

  getAveragePrice(price) {
    const averagePrice = calAveragePrice(price);
    const precision = getPrecision(price[0]);

    return currencyNormalizer(averagePrice, {
      maximumFractionDigits: precision,
    });
  }

  getPriceChangeInPercent() {
    const percentChange = calPriceChangeInPercentage(
      calAveragePrice(this.openPrice),
      calAveragePrice(this.closePrice)
    );

    return this.pnl < 0 ? "-" + percentChange : percentChange;
  }

  calVolume() {
    if (Number(this.volume.current) > Number(this.volume.max)) {
      this.volume.max = this.volume.current;
    }
  }

  addVolume({ quantity, price }) {
    this.volume.current = add(multiply(quantity, price), this.volume.current);
    this.calVolume();
  }

  getVolume() {
    return currencyNormalizer(this.volume.max);
  }

  calPositionSize() {
    if (this.positionSize.current > this.positionSize.max) {
      this.positionSize.max = this.positionSize.current;
    }
  }

  addSizeToPosition(size) {
    this.positionSize.current = add(size, this.positionSize.current);
    this.calPositionSize();
  }

  subtractSizeFromPosition(size) {
    this.positionSize.current = subtract(this.positionSize.current, size);
  }

  getMaxPositionSize() {
    return this.positionSize.max;
  }

  getRestOfPositionSize() {
    return Math.abs(this.positionSize.current);
  }

  addPnl(pnl) {
    this.pnl = add(this.pnl, pnl);
  }

  getProfit() {
    return currencyNormalizer(subtract(this.pnl, this.fees));
  }

  getFees() {
    return currencyNormalizer(this.fees);
  }

  addFees(fees) {
    this.fees = add(fees, this.fees);
  }

  getSide() {
    return this.side === "BUY" ? "LONG" : "SHORT";
  }

  openNewPosition({ symbol, side, openTime }) {
    this.isOpen = true;
    this.symbol = symbol;
    this.openPrice = [];
    this.closePrice = [];
    this.openTime = openTime;
    this.volume = {
      max: 0,
      current: 0,
    };
    this.positionSize = {
      max: 0,
      current: 0,
    };
    this.pnl = 0;
    this.fees = 0;
    this.side = side;
  }

  isPositionNotEmpty() {
    return this.positionSize.current > 0;
  }

  increasePosition({ price, quantity }) {
    this.openPrice.push(price);
    this.addSizeToPosition(quantity);
    this.addVolume({ quantity: quantity, price: price });
  }

  closePosition({ closeTime }) {
    this.isOpen = false;
    this.aggregatedTrades.push({
      openTime: this.openTime,
      closeTime: closeTime,
      symbol: this.symbol,
      side: this.getSide(),
      priceOpen: this.getAverageOpenPrice(),
      priceClose: this.getAverageClosePrice(),
      quantity: this.getMaxPositionSize(),
      fee: this.getFees(),
      profit: this.getProfit(),
      priceChangeInPercent: this.getPriceChangeInPercent(),
      volume: this.getVolume(),
    });
  }

  modifyPosition({ side, price, quantity, realizedPnl, fees }) {
    this.addFees(fees);
    if (this.side === side) {
      this.increasePosition({ price: price, quantity: quantity });
      return;
    }
    this.subtractSizeFromPosition(quantity);
    this.addPnl(realizedPnl);
    this.closePrice.push(price);
  }

  isFlipTrade() {
    return this.positionSize.current < 0;
  }

  releaseTrades() {
    return this.aggregatedTrades;
  }

  isPositionOpen() {
    return this.isOpen;
  }
}
