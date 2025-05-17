export function add(numbers: string): number {
  if (numbers === "") return 0;

  let delimiterRegex = /,|\n/;
  let numberString = numbers;

  // Check for custom delimiter format
  if (numbers.startsWith("//")) {
    const customDelimiterMatch = numbers.match(/^\/\/\[(.+?)\]\n(.*)/);
    if (customDelimiterMatch) {
      const [, customDelimiter, rest] = customDelimiterMatch;
      // Escape special RegExp characters in delimiter
      const escapedDelimiter = customDelimiter.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
      delimiterRegex = new RegExp(`${escapedDelimiter}|\n`);
      numberString = rest;
    } else {
      // fallback to single character custom delimiter (e.g. //;\n1;2)
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