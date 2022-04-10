import { calAveragePrice, calPriceChangeInPercentage } from "./utils";
import currency from "currency.js";

export class Trade {
  constructor() {
    this.isOpen = false;
    this.symbol = "";
    this.tickSize = 0;
    this.pricePrecision = 0;
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
    return currency(calAveragePrice(this.openPrice), {
      precision: this.pricePrecision,
    }).format();
  }

  getAverageClosePrice() {
    return currency(calAveragePrice(this.closePrice), {
      precision: this.pricePrecision,
    }).format();
  }

  getPriceChangeInPercent() {
    const percentChange = calPriceChangeInPercentage(
      calAveragePrice(this.openPrice),
      calAveragePrice(this.closePrice)
    ).toFixed(2);

    return this.pnl < 0 ? `-${percentChange}%` : `${percentChange}%`;
  }

  calVolume() {
    if (this.volume.current > this.volume.max) {
      this.volume.max = this.volume.current;
    }
  }

  addVolume({ quantity, price }) {
    quantity = currency(quantity).divide(this.tickSize);
    this.volume.current = currency(quantity)
      .multiply(price)
      .add(this.volume.current).value;
    this.calVolume();
  }

  getVolume() {
    return currency(this.volume.max).multiply(this.tickSize).format();
  }

  calPositionSize() {
    if (this.positionSize.current > this.positionSize.max) {
      this.positionSize.max = this.positionSize.current;
    }
  }

  addSizeToPosition(size) {
    size = currency(size).divide(this.tickSize);
    this.positionSize.current = currency(this.positionSize.current).add(
      size
    ).value;
    this.calPositionSize();
  }

  subtractSizeFromPosition(size) {
    size = currency(size).divide(this.tickSize);
    this.positionSize.current = currency(this.positionSize.current).subtract(
      size
    ).value;
  }

  getMaxPositionSize() {
    return currency(this.positionSize.max)
      .multiply(this.tickSize)
      .value.toString();
  }

  getRestOfPositionSize() {
    return Math.abs(
      currency(this.positionSize.current).multiply(this.tickSize).value
    );
  }

  addPnl(pnl) {
    this.pnl = currency(this.pnl).add(pnl);
  }

  getProfit() {
    return currency(this.pnl).subtract(this.fees).format();
  }

  getFees() {
    return currency(this.fees).format();
  }

  addFees(fees) {
    this.fees = currency(this.fees).add(fees);
  }

  getSide() {
    return this.side === "BUY" ? "LONG" : "SHORT";
  }

  openNewPosition({ symbol, side, openTime }) {
    this.isOpen = true;
    this.symbol = symbol;
    this.tickSize = getTickSize(symbol);
    this.pricePrecision = getPricePrecision(symbol);
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
