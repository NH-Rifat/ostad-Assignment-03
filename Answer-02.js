function squareRootOfSumOfSquares(numbers) {
  const sumOfSquares = numbers.reduce(
    (sum, number) => sum + Math.pow(number, 2),
    0
  );
  const squareRoot = Math.sqrt(sumOfSquares);

  return squareRoot;
}

// Example usage
const numbers = [1, 2, 3];
const result = squareRootOfSumOfSquares(numbers);
console.log(result);
