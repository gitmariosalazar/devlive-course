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

  printMatrix(): string {
    return this.matrix
      .map((row) => row.map((cell) => cell ?? '-').join(' | '))
      .join('\n' + '-'.repeat(this.column * 4 - 1) + '\n');
  }
}

function matrixTrace(numbers: Matrix<number>): [number, number] {
  let d1: number = 0;
  let d2: number = 0;
  let column: number = matrix.column - 1;
  for (let row = 0; row < matrix.row; row++) {
    d1 += matrix.matrix[row][column]!;
    d2 += matrix.matrix[row][row]!;
    column--;
  }
  return [d1, d2];
}

const matrix = new Matrix<number>(3, 3);

const values = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    matrix.addValue(i, j, values[i][j]);
  }
}

console.log(matrixTrace(matrix));
