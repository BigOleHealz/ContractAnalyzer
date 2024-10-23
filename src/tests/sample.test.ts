import { sum } from '../utils/sum';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// Sample utility function for demonstration
export function sum(a: number, b: number): number {
  return a + b;
}
