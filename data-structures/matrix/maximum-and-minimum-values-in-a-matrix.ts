export class Matrix<T> {
  matrix: (T | null)[][];
  row: number;
  column: number;
  constructor(row: number, column: number) {
    this.row = row;
    this.column = column;
    this.matrix = [];
    this.onInit();
  }

  onInit(): void {
    for (let row = 0; row < this.row; row++) {
      this.matrix.push([]);
      for (let column = 0; column < this.column; column++) {
        this.matrix[row].push(null);
      }
    }
  }

  addValue(row: number, column: number, item: T): boolean {
    if (
      row >= 0 &&
      row < this.row &&
      column >= 0 &&
      column < this.column &&
      !this.matrix[row][column]
    ) {
      this.matrix[row][column] = item;
      return true;
    }
    return false;
  }

  getValue(row: number, column: number): T {
    return this.matrix[row][column]!;
  }

  ascNumbersMatrix(): void {
    let n: number = 1;
    for (let row = 0; row < this.row; row++) {
      for (let column = 0; column < this.column; column++) {
        this.addValue(row, column, n as unknown as T);
        n++;
      }
    }
  }

  randomMatrix(n: number): void {
    for (let row = 0; row < this.row; row++) {
      for (let column = 0; column < this.column; column++) {
        this.addValue(
          row,
          column,
          Math.floor(Math.random() * n) as unknown as T
        );
      }
    }
  }

  printMatrix(): string {
    return this.matrix
      .map((row) => row.map((cell) => cell ?? '-').join(' | '))
      .join('\n' + '-'.repeat(this.column * 4 - 1) + '\n');
  }
}

export interface MinMaxResult {
  minValue: number;
  maxValue: number;
}

function findMinAndMaxValue(numbers: Matrix<number>): MinMaxResult {
  let min: number = numbers.getValue(0, 0);
  let max: number = numbers.getValue(0, 0);
  for (let row = 0; row < numbers.row; row++) {
    for (let column = 0; column < numbers.column; column++) {
      if (numbers.getValue(row, column) > max) {
        max = numbers.getValue(row, column);
      }
      if (numbers.getValue(row, column) < min) {
        min = numbers.getValue(row, column);
      }
    }
  }
  return { minValue: min, maxValue: max };
}

const matrix = new Matrix<number>(4, 4);
matrix.randomMatrix(55);

console.log(matrix.printMatrix());
console.log(`\n`);
console.log(findMinAndMaxValue(matrix));

const matrix2 = new Matrix<number>(4, 4);

const values = [
  [1, 0, 0, 0],
  [1, 4, 17, 0],
  [4, 6, 2, -1],
  [1, 4, 7, 6]
];

for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    matrix2.addValue(i, j, values[i][j]);
  }
}
console.log(`\n`);
console.log(matrix2.printMatrix());
console.log(`\n`);
console.log(findMinAndMaxValue(matrix2));
