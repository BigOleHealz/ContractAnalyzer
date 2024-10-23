import { testFeature } from '../src/utils/testFeature';

test('testFeature function', () => {
  console.log = jest.fn();
  testFeature();
  expect(console.log).toHaveBeenCalledWith('Test feature is working!');
});

// This test checks if the testFeature function logs the correct message.
// It mocks the console.log function and verifies it was called with the expected string.
