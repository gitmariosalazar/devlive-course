export class User {
  email: string;
  firstName: string;
  lastName: string;
  age: number;
  isActive: boolean;
  constructor(
    email: string,
    firstName: string,
    lastName: string,
    age: number,
    isActive: boolean = true
  ) {
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isActive = isActive;
  }
}

export class ManageUsers {
  users: Map<string, User>;
  constructor() {
    this.users = new Map<string, User>();
  }

  addUser(user: User): boolean {
    if (!this.users.has(user.email)) {
      this.users.set(user.email, user);
      return true;
    }
    return false;
  }

  getUser(email: string): User | null {
    return this.users.get(email) ?? null;
  }

  deleteUser(email: string): boolean {
    return this.users.delete(email);
  }

  getUsers(): User[] {
    return Array.from(this.users.values());
  }
}

const user1: User = new User('mario@gmail.com', 'Mario', 'Salazar', 30);
const user2: User = new User(
  'mariajose@gmail.com',
  'Maria Jose',
  'Salazar',
  30
);
const user3: User = new User('lizbeth@gmail.com', 'Lizbeth', 'Rodriguez', 30);

const mu: ManageUsers = new ManageUsers();
console.log(mu.addUser(user1));
console.log(mu.addUser(user2));
console.log(mu.addUser(user3));
console.log(mu.getUsers());
console.log(`Find user: \n\n`);
console.log(mu.getUser('mariajose@gmail.com'));
console.log(mu.deleteUser('mariajose@gmail.com'));
console.log(mu.getUsers());
console.log(mu.getUser('mariajose@gmail.com'));
