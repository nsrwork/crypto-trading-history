import { describe, expect, it } from "vitest";
import {calAveragePrice, calPriceChangeInPercentage, calPricePrecision} from "./utils";

describe("Testing util functions", () => {
  it("Calculate a price change in percentage", () => {
    const mock = [
      {
        openPrice: "0.01",
        closePrice: "0.02",
      },
      {
        openPrice: "0.02",
        closePrice: "0.01",
      },
      {
        openPrice: "100",
        closePrice: "200",
      },
      {
        openPrice: "200",
        closePrice: "100",
      },
    ];
    expect(
      mock.map((item) =>
        calPriceChangeInPercentage(item.openPrice, item.closePrice)
      )
    ).eql([100, 100, 100, 100]);
  });

  it("Calculate an average price", () => {
    const mock = [
      [1, 2, 3, 4, 5],
      [0.12345, 0.23456, 0.34567, 0.45678, 0.56789],
      [0.12, 0.23, 0.34, 0.45, 0.56],
    ];
    expect(mock.map((item) => calAveragePrice(item))).eql([
      3, 0.34567000000000003, 0.33999999999999997,
    ]);
  });

  it("Calculate a price precision", () => {
    const mock = ["0.1","0.01","0","0.000010"];
    expect(mock.map((item) => calPricePrecision(item))).eql([
      1, 2, 0, 6
    ]);
  });
});
