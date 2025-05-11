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

function transposingMatrix(numbers: Matrix<number>): Matrix<number> {
  const result: Matrix<number> = new Matrix(numbers.row, numbers.column);
  for (let row = 0; row < numbers.row; row++) {
    for (let column = 0; column < numbers.column; column++) {
      result.addValue(column, row, numbers.matrix[row][column]!);
    }
  }
  return result;
}

function addingMatrix(A: Matrix<number>, B: Matrix<number>): Matrix<number> {
  const result: Matrix<number> = new Matrix(A.row, A.column);
  for (let row = 0; row < A.row; row++) {
    for (let column = 0; column < A.column; column++) {
      result.addValue(
        row,
        column,
        A.matrix[row][column]! + B.matrix[row][column]!
      );
    }
  }
  return result;
}

const matrix = new Matrix<number>(3, 3);
matrix.ascNumbersMatrix();

console.log(matrix.printMatrix());
console.log(`\n`);
console.log(transposingMatrix(matrix).printMatrix());
console.log(`\nAdding Matrix\n`);
const m1: Matrix<number> = new Matrix(3, 3);
m1.randomMatrix(10);
console.log(m1.printMatrix());
const m2: Matrix<number> = new Matrix(3, 3);
m2.randomMatrix(15);
console.log(`\n`);
console.log(m2.printMatrix());
const result: Matrix<number> = addingMatrix(m1, m2);
console.log(`\nResult Matrix\n`);
console.log(result.printMatrix());
