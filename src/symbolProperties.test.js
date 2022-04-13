import { describe, expect, it } from "vitest";
import { getProps } from "./symbolProperties";

describe("Testing symbol props", () => {
  it("Searching prop", () => {
    expect(getProps("BTCUSDT")).eql({
      symbol: "BTCUSDT",
      pricePrecision: 2,
      tickSize: "0.01",
    });
  });
  it("Default props", () => {
    expect(getProps("NEWUSDT")).eql({
      symbol: "NEWUSDT",
      pricePrecision: 2,
      tickSize: "0.01",
    });
  });
});
