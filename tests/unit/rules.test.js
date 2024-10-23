const assert = require('assert');

describe('Application Rules', function() {
  it('should adhere to the defined rules', function() {
    // Example rule: input should not be empty
    const input = '';
    const isValid = validateInput(input);
    assert.strictEqual(isValid, false, 'Input validation failed for empty input');

    // Example rule: input should be a number
    const inputNumber = 'abc';
    const isNumberValid = validateInput(inputNumber);
    assert.strictEqual(isNumberValid, false, 'Input validation failed for non-numeric input');

    // Example rule: input should be within range
    const inputInRange = 5;
    const isInRangeValid = validateInput(inputInRange);
    assert.strictEqual(isInRangeValid, true, 'Input validation failed for in-range input');
  });
});

function validateInput(input) {
  if (input === '' || isNaN(input) || input < 0 || input > 10) return false;
  return true;
}