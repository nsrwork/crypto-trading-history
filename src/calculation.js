import Decimal from "decimal.js";

export function add(num1, num2) {
  return Decimal.add(num1, num2).toString();
}

export function subtract(num1, num2) {
  return Decimal.sub(num1, num2).toString();
}

export function multiply(num1, num2) {
  return Decimal.mul(num1, num2).toString();
}

export function divide(num1, num2) {
  return Decimal.div(num1, num2).toString();
}
