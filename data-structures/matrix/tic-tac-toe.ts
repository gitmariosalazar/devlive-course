const prompt = require('prompt-sync')();
type winner = 'X' | 'O' | 'Tie' | null;

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

export class Board {
  public board: Matrix<winner>;
  private size: number;
  constructor(size: number) {
    this.size = size;
    this.board = new Matrix(size, size);
  }

  checkWinnerByColumns(): winner {
    let countX: number = 0;
    let countY: number = 0;
    let winner: winner = null;

    for (let column = 0; column < this.board.matrix[0].length; column++) {
      countX = 0;
      countY = 0;
      for (let row = 0; row < this.board.matrix.length; row++) {
        if (this.board.matrix[row][column] === 'X') {
          countX++;
        } else if (this.board.matrix[row][column] === 'O') {
          countY++;
        }
        if (countX === this.board.matrix.length) {
          winner = 'X';
          return winner;
        }
        if (countY === this.board.matrix.length) {
          winner = 'O';
          return winner;
        }
      }
    }
    return winner;
  }

  checkWinnerByRows(): winner {
    let countX: number = 0;
    let countY: number = 0;
    let winner: winner = null;

    for (let row = 0; row < this.board.matrix.length; row++) {
      countX = 0;
      countY = 0;
      for (let column = 0; column < this.board.matrix[row].length; column++) {
        if (this.board.matrix[row][column] === 'X') {
          countX++;
        } else if (this.board.matrix[row][column] === 'O') {
          countY++;
        }
        if (countX === this.board.matrix[row].length) {
          winner = 'X';
          return winner;
        }
        if (countY === this.board.matrix[row].length) {
          winner = 'O';
          return winner;
        }
      }
    }

    return winner;
  }

  getValue(row: number, column: number): winner {
    return this.board.getValue(row, column);
  }

  addValue(x: number, y: number, value: winner) {
    return this.board.addValue(x, y, value);
  }

  isBoardFull(): boolean {
    for (let row = 0; row < this.board.matrix.length; row++) {
      for (let column = 0; column < this.board.matrix[row].length; column++) {
        if (this.board.matrix[row][column] === null) {
          return false;
        }
      }
    }
    return true;
  }

  checkWinnerDiagonal(): winner {
    let countXDiagonal1 = 0;
    let countYDiagonal1 = 0;
    let countXDiagonal2 = 0;
    let countYDiagonal2 = 0;

    for (let index = 0; index < this.board.matrix.length; index++) {
      if (this.board.matrix[index][index] === 'X') {
        countXDiagonal1++;
      } else if (this.board.matrix[index][index] === 'O') {
        countYDiagonal1++;
      }
      if (
        this.board.matrix[index][this.board.matrix.length - index - 1] === 'X'
      ) {
        countXDiagonal2++;
      } else if (
        this.board.matrix[index][this.board.matrix.length - index - 1] === 'O'
      ) {
        countYDiagonal2++;
      }
      if (
        countXDiagonal1 === this.board.matrix.length ||
        countXDiagonal2 === this.board.matrix.length
      ) {
        return 'X';
      } else if (
        countYDiagonal1 === this.board.matrix.length ||
        countYDiagonal2 === this.board.matrix.length
      ) {
        return 'O';
      }
    }
    return null;
  }
}

export class TicTacToe {
  board: Board;
  size: number;
  constructor(size: number) {
    this.size = size;
    this.board = new Board(size);
  }

  checkIsTie(): winner {
    if (this.board.isBoardFull()) {
      return 'Tie';
    }
    return null;
  }

  checkWinner(): winner {
    const win: winner =
      this.board.checkWinnerByColumns() ||
      this.board.checkWinnerByRows() ||
      this.board.checkWinnerDiagonal() ||
      this.checkIsTie();
    return win;
  }

  currentPlayer(player: winner): winner {
    return player === 'O' ? 'X' : player === 'X' ? 'O' : null;
  }

  play(): string {
    let resp: string = '';
    let aux: boolean = true;
    let currentPlayer: winner = prompt(
      `Type your player's name to start (either O or X): `
    ) as winner;
    while (aux) {
      const row: number = parseInt(prompt(`Enter the row number: `));
      const column: number = parseInt(prompt(`Enter the column number: `));
      if (this.board.getValue(row, column) === null) {
        this.board.addValue(row, column, currentPlayer);
        currentPlayer = this.currentPlayer(currentPlayer);
        console.log(this.board.board.printMatrix());
        const win: winner = this.checkWinner();
        if (win !== null) {
          aux = false;
          resp =
            win === 'Tie'
              ? `The game has finished in a tie!`
              : `Player ${win} wins!`;
        } else {
          console.log(
            `Success. Now it's the next player's turn: ${currentPlayer} !`
          );
        }
      } else {
        console.log(
          `Invalid position, the position is already token by other player!`
        );
      }
    }
    return resp;
  }
}
const size: number = 7;
const ticTacToe: TicTacToe = new TicTacToe(size);
console.log(ticTacToe.play());
