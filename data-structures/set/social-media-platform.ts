export interface User {
  id: number;
  name: string;
  followers: Set<User>;
  following: Set<User>;
}

export class SocialNetwork {
  users: Set<User>;
  constructor() {
    this.users = new Set<User>();
  }

  findUser(users: Set<User>, userId: number): User | null {
    for (let user of users) {
      if (user.id === userId) {
        return user;
      }
    }
    return null;
  }

  addUser(user: User): boolean {
    if (this.findUser(this.users, user.id)) {
      return false;
    }
    this.users.add(user);
    return true;
  }

  followUser(user: User, followUser: User): boolean {
    if (
      !this.findUser(user.following, followUser.id) &&
      user.id !== followUser.id
    ) {
      user.following.add(followUser);
      followUser.followers.add(user);
      return true;
    }
    return false;
  }

  suggestUsers(userList: Set<User>, user: User): User[] {
    const listSuggestions: User[] = [];
    userList.forEach((u) => {
      if (!this.findUser(user.following, u.id) && u.id !== user.id) {
        listSuggestions.push(u);
      }
    });
    return listSuggestions;
  }
}

const socialNetwork: SocialNetwork = new SocialNetwork();

const cj: User = {
  id: 1,
  name: 'Clarity June',
  followers: new Set(),
  following: new Set()
};

const alice: User = {
  id: 2,
  name: 'Alice',
  followers: new Set(),
  following: new Set()
};
const users: User[] = [
  {
    id: 3,
    name: 'Charlie',
    followers: new Set(),
    following: new Set()
  },
  {
    id: 4,
    name: 'Diana',
    followers: new Set(),
    following: new Set()
  },
  {
    id: 5,
    name: 'Ethan',
    followers: new Set(),
    following: new Set()
  },
  {
    id: 6,
    name: 'Fiona',
    followers: new Set(),
    following: new Set()
  },
  {
    id: 7,
    name: 'George',
    followers: new Set(),
    following: new Set()
  },
  {
    id: 8,
    name: 'Hannah',
    followers: new Set(),
    following: new Set()
  },
  {
    id: 9,
    name: 'Ivan',
    followers: new Set(),
    following: new Set()
  },
  {
    id: 10,
    name: 'Jasmine',
    followers: new Set(),
    following: new Set()
  },
  {
    id: 11,
    name: 'Kevin',
    followers: new Set(),
    following: new Set()
  },
  {
    id: 12,
    name: 'Laura',
    followers: new Set(),
    following: new Set()
  }
];

users.forEach((user) => {
  socialNetwork.addUser(user);
});

const kevin: User | null = socialNetwork.findUser(socialNetwork.users, 11);
const jasmine: User | null = socialNetwork.findUser(socialNetwork.users, 10);
const george: User | null = socialNetwork.findUser(socialNetwork.users, 7);

console.log(socialNetwork.addUser(cj));
console.log(socialNetwork.addUser(alice));
console.log(socialNetwork.followUser(cj, alice));
console.log(socialNetwork.followUser(alice, cj));
if (kevin && jasmine && george) {
  console.log(socialNetwork.followUser(kevin, cj));
  console.log(socialNetwork.followUser(kevin, alice));
  console.log(socialNetwork.followUser(kevin, jasmine));
  console.log(socialNetwork.followUser(kevin, george));
}
console.log(`User Kevin\n\n`);
console.log(kevin);
console.log(`\n\nList users suggestions\n\n`);
if (kevin) {
  console.log(socialNetwork.suggestUsers(socialNetwork.users, kevin));
}
