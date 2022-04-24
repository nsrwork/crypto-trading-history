class Calculation {
  constructor(raw) {
    raw = trimZero(raw);
    this.number = Number(raw);
    this.precision = calPrecision(raw);
  }

  add(raw) {
    raw = trimZero(raw);
    const precision = calPrecision(raw);

    if (precision > 0 && this.precision > 0) {
      return Number(
        (this.number * this.precision + Number(raw) * precision) / precision
      ).toFixed(precision);
    }

    return this.number + Number(raw);
  }

  subtract(raw) {
    raw = trimZero(raw);
    const precision = calPrecision(raw);

    if (this.number < Number(raw)) {
      return 0;
    }

    if (precision > 0 && this.precision > 0) {
      return Number(
        (this.number * this.precision - Number(raw) * precision) / precision
      ).toFixed(precision);
    }

    return this.number - Number(raw);
  }

  multiply(raw) {
    raw = trimZero(raw);
    const precision = calPrecision(raw);

    if (this.number <= 0 || Number(raw) <= 0) {
      return 0;
    }

    return trimZero(
      (this.number * Number(raw)).toFixed(precision + this.precision)
    );
  }
}

function trimZero(raw) {
  return Number(raw).toString();
}

function calPrecision(raw) {
  return Number(raw.slice(raw.indexOf("."), raw.length).length - 1);
}

export function add(...number) {
  return new Calculation(number[0]).add(number[1]).toString();
}

export function subtract(...number) {
  return new Calculation(number[0]).subtract(number[1]).toString();
}

export function multiply(...number) {
  return new Calculation(number[0]).multiply(number[1]).toString();
}
