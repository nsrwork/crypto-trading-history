export function calPriceChangeInPercentage(openPrice, closePrice) {
  const close = openPrice > closePrice ? openPrice : closePrice;
  const open = closePrice < openPrice ? closePrice : openPrice;

  const result = Math.abs((Number(close) - Number(open)) / Number(open));

  return new Intl.NumberFormat("en-US", { style: "percent" }).format(result);
}

export function calAveragePrice(list) {
  return list.reduce((a, b) => Number(a) + Number(b), 0) / list.length;
}
