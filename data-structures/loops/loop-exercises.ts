/*
In an online casino they have implemented a new game, it consists in rolling a three dice and writing down their values. If the sum of these values is greater than or equal to 10, the bettor wins $10 and otherwise loses $15. 

But they are having problems making the program run smooth, because before they were making the program manually making with switch statements. 

That’s why your task is to create a system that uses loops, so the program can become more efficient and flexible. To thoroughly test the program, you will simulate 50 people playing. Each tourist will play precisely 50 times before folding. After all the tourists have finished their rounds, find the mean outcome across all 50 players.
*/

class GameDice {
  private readonly totalPlayingCount: number = 50;
  private readonly peoplePlaying: number = 50;
  private readonly wins: number = 10;
  private readonly loses: number = 15;
  private totalWins: number;

  constructor() {
    this.totalWins = 0;
  }

  startGame(): void {
    for (let peopleIndex = 0; peopleIndex < this.peoplePlaying; peopleIndex++) {
      for (let j = 0; j < this.totalPlayingCount; j++) {
        const diceB: number = Math.floor(Math.random() * 6) + 1;
        const diceA: number = Math.floor(Math.random() * 6) + 1;
        const diceC: number = Math.floor(Math.random() * 6) + 1;
        let sum: number = diceA + diceB + diceC;
        if (sum >= 10) {
          this.totalWins += this.wins;
        } else {
          this.totalWins -= this.loses;
        }
      }
    }
  }

  public getAverageTotalWins(): number {
    return this.totalWins / this.totalPlayingCount;
  }
}

const game: GameDice = new GameDice();
game.startGame();
console.log(`Average of the 50 tourists: $ ${game.getAverageTotalWins()}`);
