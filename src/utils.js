export function calPriceChangeInPercentage(openPrice, closePrice) {
  const close = openPrice > closePrice ? openPrice : closePrice;
  const open = closePrice < openPrice ? closePrice : openPrice;

  return Math.abs(((Number(close) - Number(open)) / Number(open)) * 100);
}

export function calAveragePrice(list) {
  return list.reduce((a, b) => Number(a) + Number(b), 0) / list.length;
}

export function calPricePrecision(ticketSize) {
  return (
    +ticketSize.slice(ticketSize.indexOf("."), ticketSize.length).length - 1
  );
}
