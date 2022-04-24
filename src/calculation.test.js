import { describe, expect, it } from "vitest";
import {add, multiply, subtract} from "./calculation";

describe("Calculation", () => {
  it("Add", () => {
    expect(add("1", "1")).equal("2");
    expect(add(".1", ".1")).equal("0.2");
    expect(add("0.1", "0.1")).equal("0.2");
    expect(add("0.01", "0.01")).equal("0.02");
    expect(add("0.1", "0.2")).equal("0.3");
    expect(add("0.00010", "0.000200")).equal("0.0003");
  });

  it("Subtract", () => {
    expect(subtract("2", "1")).equal("1");
    expect(subtract(".2", ".1")).equal("0.1");
    expect(subtract("0.2", "0.1")).equal("0.1");
    expect(subtract("0.02", "0.01")).equal("0.01");
    expect(subtract("0.3", "0.2")).equal("0.1");
    expect(subtract("0.00030", "0.000200")).equal("0.0001");
    expect(subtract("0.4", "0.5")).equal("0");
  });

  it("Multiply", () => {
    expect(multiply("2", "1")).equal("2");
    expect(multiply(".2", ".1")).equal("0.02");
    expect(multiply("0.2", "0.1")).equal("0.02");
    expect(multiply("0.02", "0.01")).equal("0.0002");
    expect(multiply("0.3", "0.2")).equal("0.06");
    expect(multiply("1.00030", "0.000200")).equal("0.00020006");
    expect(multiply("0.1", "0")).equal("0");
    expect(multiply("0", "1")).equal("0");
    expect(multiply("0.05", "0.02")).equal("0.001");
  });
});
