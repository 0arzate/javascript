export class ValidatorEngine {
  constructor() {}

  isText(text) {
    return typeof text === 'string';
  }

  isBoolean(value) {
    return typeof value === 'boolean';
  }

  hasLength(text = "", length) {
    return text.length === length;
  }

  isNumber(value) {
    return typeof value === 'number';
  }
}