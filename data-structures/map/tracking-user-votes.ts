export interface Candidate {
  listNumber: number;
  name: string;
  votes: number;
}

export class Election {
  elections: Map<number, Candidate>;
  constructor() {
    this.elections = new Map<number, Candidate>();
  }

  addCandidate(candidate: Candidate): boolean {
    if (!this.elections.has(candidate.listNumber)) {
      this.elections.set(candidate.listNumber, candidate);
      return true;
    }
    return false;
  }

  playElection(n: number = 100) {
    for (let index = 0; index < n; index++) {
      const randomVotes: number = Math.floor(
        Math.random() * this.elections.size
      );
      const candidate = this.elections.get(randomVotes);
      if (this.elections.has(randomVotes) && candidate) {
        candidate.votes += 1;
      }
    }
  }

  getWinCandidate(): Candidate {
    let max: number = 0;
    let c: Candidate = {
      listNumber: -1,
      name: '',
      votes: 0
    };
    this.elections.forEach((candidate) => {
      if (max < candidate.votes) {
        max = candidate.votes;
        c = candidate;
      }
    });
    return c;
  }
}

const white: Candidate = {
  listNumber: 0,
  name: 'White votes',
  votes: 0
};

const nulls: Candidate = {
  listNumber: 1,
  name: 'Null votes',
  votes: 0
};

const candidate1: Candidate = {
  listNumber: 2,
  name: 'Alice Johnson',
  votes: 0
};

const candidate2: Candidate = {
  listNumber: 3,
  name: 'Brian Smith',
  votes: 0
};

const candidate3: Candidate = {
  listNumber: 4,
  name: 'Carla Martinez',
  votes: 0
};

const election: Election = new Election();
election.addCandidate(white);
election.addCandidate(white);
election.addCandidate(nulls);
election.addCandidate(candidate1);
election.addCandidate(candidate2);
election.addCandidate(candidate3);
election.playElection();
console.log(election.elections);
console.log(election.getWinCandidate());
