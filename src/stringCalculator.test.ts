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

test('throws an exception when a negative number is used', () => {
  expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
});

test('shows all negative numbers in the exception message', () => {
  expect(() => add("-1,2,-3")).toThrow("negative numbers not allowed: -1, -3");
});

test('ignores numbers greater than 1000', () => {
  expect(add("2,1001")).toBe(2);
  expect(add("1000,1")).toBe(1001);
});

test('supports custom delimiters of any length', () => {
  expect(add("//[***]\n1***2***3")).toBe(6);
});

test('supports multiple custom delimiters', () => {
  expect(add("//[*][%]\n1*2%3")).toBe(6);
});

test('supports multiple custom delimiters with longer length', () => {
  expect(add("//[***][#][%]\n1***2#3%4")).toBe(10);
});

test('supports multiple delimiters with length greater than one', () => {
  expect(add("//[***][%%]\n1***2%%3")).toBe(6);
});

test('supports multiple custom delimiters of varying lengths', () => {
  expect(add("//[***][%%][@]\n1***2%%3@4")).toBe(10);
});