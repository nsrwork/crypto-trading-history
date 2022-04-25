import { add, divide, subtract } from "./calculation";

export function calPriceChangeInPercentage(openPrice, closePrice) {
  const close = openPrice > closePrice ? openPrice : closePrice;
  const open = closePrice < openPrice ? closePrice : openPrice;

  const result = Math.abs(divide(subtract(close, open), open));

  return new Intl.NumberFormat("en-US", {
    style: "percent",
    maximumFractionDigits: 2,
  }).format(result);
}

export function calAveragePrice(list) {
  return list.reduce((a, b) => add(a, b), 0) / list.length;
}

export function getPrecision(price) {
  return +price.slice(price.indexOf("."), price.length).length - 1;
}

export function currencyNormalizer(money, options = {}) {
  return new Intl.NumberFormat(
    "en-US",
    Object.assign(
      {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 2,
      },
      options
    )
  ).format(money);
}
