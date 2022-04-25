import Fraction from "fraction.js";

export function add(...number) {
  return Fraction(number[0]).add(number[1]).valueOf().toString();
}

export function subtract(...number) {
  return Fraction(number[0]).sub(number[1]).valueOf().toString();
}

export function multiply(...number) {
  return Fraction(number[0]).mul(number[1]).valueOf().toString();
}

export function divide(...number) {
  return Fraction(number[0]).div(number[1]).valueOf().toString();
}
