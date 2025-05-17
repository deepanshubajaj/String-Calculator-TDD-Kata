export function add(numbers: string): number {
  if (numbers === "") return 0;

  let delimiterRegex = /,|\n/; // default delimiters
  let numberString = numbers;

  // Check for custom delimiter
  if (numbers.startsWith("//")) {
    const match = numbers.match(/^\/\/(.)\n(.*)/);
    if (match) {
      const [, customDelimiter, rest] = match;
      delimiterRegex = new RegExp(`[${customDelimiter}\n]`);
      numberString = rest;
    }
  }

  return numberString
    .split(delimiterRegex)
    .map((num) => parseInt(num, 10))
    .reduce((sum, num) => sum + num, 0);
}