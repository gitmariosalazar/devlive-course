export class Queue<T> {
  private storage: T[];
  private capacity: number;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.storage = [];
  }

  size(): number {
    return this.storage.length;
  }

  isEmpty(): boolean {
    return this.storage.length === 0;
  }

  isFull(): boolean {
    return this.capacity === this.storage.length;
  }

  addToQueue(item: T): boolean {
    if (!this.isFull()) {
      this.storage.push(item);
      return true;
    }
    return false;
  }

  giveShift(): T | null {
    if (!this.isEmpty()) {
      return this.storage.shift()!;
    }
    return null;
  }

  nextShift(): T | null {
    if (!this.isEmpty()) {
      return this.storage[0];
    }
    return null;
  }

  printQueue(): string {
    let resp: string = '';
    for (let index = 0; index < this.storage.length; index++) {
      resp +=
        'shift ' + index + ' -> ' + JSON.stringify(this.storage[index]) + '\n';
    }
    return resp;
  }
}

export class Customer {
  name: string;
  email: string;
  phone: string;
  constructor(name: string, email: string, phone: string) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}

export class BankTeller {
  private queue: Queue<Customer>;
  private capacity: number;
  constructor(capacity: number) {
    this.capacity = capacity;
    this.queue = new Queue(capacity);
  }

  addCustomer(customer: Customer): boolean {
    return this.queue.addToQueue(customer);
  }

  numCustomers(): number {
    return this.queue.size();
  }

  nextCustomer(): Customer | null {
    return this.queue.giveShift();
  }

  getQueue(): Queue<Customer> {
    return this.queue;
  }
}

const c1: Customer = new Customer('Jhon', 'jhon@gmail.com', '001');
const c2: Customer = new Customer('Mario', 'mario@gmail.com', '004');
const c3: Customer = new Customer('Lizbeth', 'lizbeth@gmail.com', '003');
const c4: Customer = new Customer('Clarity', 'clarity@gmail.com', '002');

const bankTeller: BankTeller = new BankTeller(3);
console.log(bankTeller.numCustomers());
console.log(bankTeller.addCustomer(c1));
console.log(bankTeller.addCustomer(c2));
console.log(bankTeller.addCustomer(c3));
console.log(bankTeller.addCustomer(c4));
console.log(bankTeller.numCustomers());
console.log(bankTeller.getQueue().printQueue());
console.log(bankTeller.nextCustomer());
console.log(bankTeller.getQueue().printQueue());
console.log(bankTeller.nextCustomer());
console.log(bankTeller.getQueue().printQueue());
console.log(bankTeller.nextCustomer());
console.log(bankTeller.numCustomers());
console.log(bankTeller.getQueue().printQueue());
console.log(bankTeller.nextCustomer());
console.log(bankTeller.getQueue().printQueue());
