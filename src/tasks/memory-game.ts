/*
The memory board game is a challenge where players must find pairs of identical cards or tiles placed face down. On each turn, a player flips over two tiles; if they match, they remain uncovered, and if not, they are flipped back. The goal is to remember the location of each tile to form pairs with the fewest attempts. It can be played individually or in a group, and the winner is the one who finds the most pairs or completes the board first. It is a game that exercises memory, concentration, and observation skills.
*/

import PromptSync from 'prompt-sync';
const prompt = PromptSync();
const emojis: string[] = [
  '😊',
  '😂',
  '🚀',
  '🥺',
  '😎',
  '🎵',
  '💡',
  '🔥',
  '🎉',
  '🌟'
];

class Card {
  constructor(public symbol: string) {
    this.symbol = symbol;
  }
}

class Memory {
  private symbols: string[];
  private board: Card[][];
  constructor(private size: number) {
    this.symbols = emojis;
    this.board = [];
    this.size = size;
    this.init();
  }

  init() {
    const hints = this.getRandomizeEmojiPairs(this.size)
    for (let row = 0; row < this.size; row++) {
      this.board.push([]);
      for (let col = 0; col < this.size; col++) {
        this.board[row].push(new Card(hints.pop()!));
      }
    }
    console.log(this.board)
  }

  getRandomizeEmojiPairs = (n: number): string[] => {
    const totalCards = this.size * this.size
    const totalHints=totalCards/2
    if (n > this.symbols.length) {
      throw new Error(`Number n exceed to the quantity symbols available`);
    }
    const selectedEmojis = this.symbols.slice(0, totalHints);
    const pairsEmojis = [...selectedEmojis, ...selectedEmojis];
    for (let index = pairsEmojis.length - 1; index > 0; index--) {
      const j: number = Math.floor(Math.random() * (index+1));
      [pairsEmojis[index], pairsEmojis[j]] = [
        pairsEmojis[j],
        pairsEmojis[index]
      ];
    }
    return pairsEmojis;
  };
}

function main() {
  const game = new Memory(5)
  console.log(`first`)
}

main()