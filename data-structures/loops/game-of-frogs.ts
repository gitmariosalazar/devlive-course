/*
In this coding challenge, you'll be tasked with developing a JavaScript program to simulate an online game involving three frogs racing within a 20-meter track. The game operates by simulating each frog's movement in consecutive turns.

During each turn, the program generates a random action for each frog. These actions include the frog remaining stationary, jumping 1 meter, or jumping 2 meters. The goal of the game is to determine which of the three frogs reaches the finish line first, effectively completing the 20-meter track.

To accomplish this, your program will need to track the position of each frog as they progress along the track. The program will simulate each frog's movement until one of them successfully crosses the finish line. Once a frog completes the race, the program will output a message indicating which frog won the race.
*/

export class Frog {
  name: string;
  jumps: number;
  constructor(name: string) {
    this.name = name;
    this.jumps = 0;
  }

  print = (): string => {
    return `Name: ${this.name} - Jumps: ${this.jumps}`;
  };
}

export class GameFrog {
  frogA: Frog;
  frogB: Frog;
  frogC: Frog;
  constructor(frogA: Frog, frogB: Frog, frogC: Frog) {
    this.frogA = frogA;
    this.frogB = frogB;
    this.frogC = frogC;
  }

  play = (meters: number = 20): void => {
    for (let index = 0; index < meters; index++) {
      let jumpA: number = Math.floor(Math.random() * 2) + 1;
      let jumpB: number = Math.floor(Math.random() * 2) + 1;
      let jumpC: number = Math.floor(Math.random() * 2) + 1;
      this.frogA.jumps += jumpA;
      this.frogB.jumps += jumpB;
      this.frogC.jumps += jumpC;
      if (
        this.frogA.jumps >= meters ||
        this.frogB.jumps >= meters ||
        this.frogC.jumps >= meters
      ) {
        break;
      }
    }
  };

  print = (): string => {
    return `${this.frogA.print()}\n${this.frogB.print()}\n${this.frogC.print()}`;
  };
}

const frogA: Frog = new Frog('Frog A');
const frogB: Frog = new Frog('Frog B');
const frogC: Frog = new Frog('Frog C');

const game: GameFrog = new GameFrog(frogA, frogB, frogC);
game.play(20);
console.log(game.print());
