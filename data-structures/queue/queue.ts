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
    console.log(this.capacity, this.storage.length);
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
      resp += 'shift ' + index + ' -> ' + this.storage[index] + '\t';
    }
    return resp;
  }

  // Getters
  public getStorage(): T[] {
    return this.storage;
  }

  public getCapacity(): number {
    return this.capacity;
  }

  // Setters
  public setStorage(storage: T[]): void {
    this.storage = storage;
  }

  public setCapacity(capacity: number): void {
    this.capacity = capacity;
  }
}

const queue: Queue<number> = new Queue(10);
queue.setCapacity(17);
console.log(queue.isEmpty());
console.log(queue.isFull());
console.log(queue.addToQueue(1));
console.log(queue.addToQueue(2));
console.log(queue.addToQueue(3));
console.log(`first`);
console.log(queue.isEmpty());
console.log(queue.isFull());
console.log(`first`);
console.log(queue.addToQueue(4));
console.log(queue.addToQueue(5));
console.log(queue.addToQueue(6));
console.log(queue.addToQueue(7));
console.log(queue.addToQueue(8));
console.log(queue.addToQueue(9));
console.log(queue.addToQueue(10));
console.log(queue.printQueue());
console.log(queue.isEmpty());
console.log(queue.isFull());
console.log(queue.getStorage());
