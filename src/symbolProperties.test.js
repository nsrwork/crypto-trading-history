import { describe, expect, it } from "vitest";
import { getProps } from "./symbolProperties";

describe("Testing symbol props", () => {
  it("Searching prop", () => {
    expect(getProps("BTCUSDT")).eql({
      s: "BTCUSDT",
      t: "0.10",
    });
  });
  it("Default props", () => {
    expect(getProps("NEWUSDT")).eql({
      s: "NEWUSDT",
      t: "0.01",
    });
  });
});
