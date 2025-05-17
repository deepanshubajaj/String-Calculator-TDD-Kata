export function add(numbers: string): number {
  if (numbers === "") return 0;

  let delimiterRegex = /,|\n/;
  let numberString = numbers;

  // Check for custom delimiters
  if (numbers.startsWith("//")) {
    const multiDelimiterMatch = numbers.match(/^\/\/(\[.+\])+\n(.*)/);
    if (multiDelimiterMatch) {
      const delimitersPart = numbers.slice(2, numbers.indexOf('\n'));
      numberString = numbers.slice(numbers.indexOf('\n') + 1);

      const delimiters = [...delimitersPart.matchAll(/\[([^\]]+)\]/g)].map(m => m[1]);
      const escapedDelimiters = delimiters.map(d =>
        d.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&') // escape RegExp chars
      );
      delimiterRegex = new RegExp(escapedDelimiters.join('|') + '|\n');
    } else {
      // Single custom delimiter fallback
      const match = numbers.match(/^\/\/(.)\n(.*)/);
      if (match) {
        const [, customDelimiter, rest] = match;
        delimiterRegex = new RegExp(`[${customDelimiter}\n]`);
        numberString = rest;
      }
    }
  }

  const numList = numberString
    .split(delimiterRegex)
    .map((num) => parseInt(num, 10));

  const negatives = numList.filter(n => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
  }

  return numList
    .filter(n => n <= 1000)
    .reduce((sum, num) => sum + num, 0);
}