/*
In this coding exercise, you will be working with election data. Your task is to read the votes cast by 'n' people, where each vote corresponds to one of three candidates, represented by the numbers 1, 2, or 3. If a vote is recorded as 0, it indicates a blank vote. Any number other than 0, 1, 2, or 3 is considered a null vote.
Your program should calculate and report the total number of votes received by each candidate, as well as the combined count of blank and null votes.
*/
export class Candidate {
  listNumber: number;
  name: string;
  votes: number[];

  constructor(listNumber: number, name: string) {
    this.listNumber = listNumber;
    this.name = name;
    this.votes = [];
  }

  getVotesCount(): number {
    return this.votes.length;
  }

  pushVotes(vote: number): boolean {
    if (this.listNumber === vote) {
      this.votes.push(vote);
      return true;
    }
    return false;
  }

  print(): string {
    return `List Number: ${this.listNumber}\nName List: ${
      this.name
    }\n Total Votes: ${this.getVotesCount()}`;
  }
}

export class Election {
  startElection(candidates: Candidate[], n: number): void {
    let index: number = 0;
    while (index <= n) {
      const vote: number = Math.floor(Math.random() * 5);
      for (let candidate of candidates) {
        const aux: boolean = candidate.pushVotes(vote);
        if (aux) {
          break;
        }
      }
      index++;
    }
  }
}

const candidateA: Candidate = new Candidate(1, 'List A');
const candidateB: Candidate = new Candidate(2, 'List B');
const candidateC: Candidate = new Candidate(3, 'List C');
const blankVotes: Candidate = new Candidate(0, 'Blank Votes');
const nullVotes: Candidate = new Candidate(4, 'Null Votes');

const election: Election = new Election();
const candidates: Candidate[] = [
  candidateA,
  candidateB,
  candidateC,
  blankVotes,
  nullVotes
];
election.startElection(candidates, 10);
console.log(candidateA.print() + '\n');
console.log(candidateB.print() + '\n');
console.log(candidateC.print() + '\n');
console.log(blankVotes.print() + '\n');
console.log(nullVotes.print());
let total: number = 0;
for (let e of candidates) {
  total += e.votes.length;
}
console.log(total);
