export function squareSum(numbers: number[]): number {
    return numbers.reduce((sum, n) => sum + n * n, 0);
}