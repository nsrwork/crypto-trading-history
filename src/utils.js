export function calPriceChangeInPercentage(openPrice, closePrice) {
  const close = openPrice > closePrice ? openPrice : closePrice;
  const open = closePrice < openPrice ? closePrice : openPrice;

  const result = Math.abs((Number(close) - Number(open)) / Number(open));

  return new Intl.NumberFormat("en-US", {
    style: "percent",
    maximumFractionDigits: 2,
  }).format(result);
}

export function calAveragePrice(list) {
  return list.reduce((a, b) => Number(a) + Number(b), 0) / list.length;
}

export function financeFormat(number, options = {}) {
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
  ).format(number);
}
