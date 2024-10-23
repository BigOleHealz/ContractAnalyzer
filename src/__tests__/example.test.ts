test('basic arithmetic', () => {
  expect(1 + 1).toBe(2);
});

test('string concatenation', () => {
  expect('Hello' + ' ' + 'World').toBe('Hello World');
});

test('array length', () => {
  expect([1, 2, 3].length).toBe(3);
});
