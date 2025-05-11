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

function upperMatrix(numbers: Matrix<number>): boolean {
  for (let row = 0; row < numbers.row; row++) {
    for (let column = 0; column < row; column++) {
      if (numbers.getValue(row, column) !== 0) {
        return false;
      }
    }
  }
  return true;
}

const matrix = new Matrix<number>(3, 3);
matrix.ascNumbersMatrix();

console.log(matrix.printMatrix());
console.log(`\n`);
console.log(upperMatrix(matrix));

const matrix2 = new Matrix<number>(3, 3);

const values = [
  [1, 2, 3],
  [0, 5, 6],
  [0, 0, 9]
];

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    matrix2.addValue(i, j, values[i][j]);
  }
}
console.log(`\n`);
console.log(matrix2.printMatrix());
console.log(`\n`);
console.log(upperMatrix(matrix2));
