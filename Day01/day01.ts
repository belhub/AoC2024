import * as fs from 'fs';

const data = fs.readFileSync('input.txt', 'utf-8');

const numbersString = data
  .split('\n')
  .map(d => d.split('   '));

// Part 1  
const firstRow: number[] = rowToNum(numbersString, 0).sort();
const secondRow: number[] = rowToNum(numbersString, 1).sort();
const distancePart1 = countDistancePart1(firstRow, secondRow);
console.log("Result part 1: ", distancePart1); // Result

function rowToNum(data: string[][], row: number): number[] {
  return data.map(d => Number(d[row]));
}

function countDistancePart1(firstRow: number[], secondRow: number[]) {
  const distanceArray = firstRow.map((fValue, index) => Math.abs(fValue - secondRow[index]));
  return distanceArray.reduce((acc, currentVal) => acc + currentVal, 0);
}

//Part 2
const unsortedRow1 = rowToNum(numbersString, 0);
const unsortedRow2 = rowToNum(numbersString, 1);
const distancePart2: number = countDistancePart2(unsortedRow1, unsortedRow2);
console.log("Result part 2: ", distancePart2); // Result

function countDistancePart2(firstRow: number[], secondRow: number[]) {
  const distanceArray = firstRow.map(f => f * secondRow.filter(s => s == f).length);
  return distanceArray.reduce((acc, currentVal) => acc + currentVal, 0);
}