export function add(numbers: string): number {
    // If the string is empty
    if (numbers === "") return 0;
  
    // Splitting the string by commas, and converting each part to a number, and sum them
    return numbers
      .split(",")               
      .map((num) => parseInt(num, 10))
      .reduce((sum, num) => sum + num, 0);  
  }
  