import { add } from './stringCalculator';

test('returns 0 for an empty string', () => {
  expect(add("")).toBe(0);
});

test('returns the number itself for a single number', () => {
  expect(add("1")).toBe(1);
});

test('returns the sum of two numbers', () => {
  expect(add("1,5")).toBe(6);
});

test('returns the sum of multiple numbers', () => {
  expect(add("1,2,3,4")).toBe(10);
});

test('handles new lines between numbers', () => {
  expect(add("1\n2,3")).toBe(6);
});

test('supports custom single-character delimiter', () => {
  expect(add("//;\n1;2")).toBe(3);
});