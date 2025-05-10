export class Queue<T> {
  private storage: T[] = [];
  private capacity: number;
  constructor(capacity: number) {
    this.capacity = capacity;
    this.storage = this.storage;
  }

  size(): number {
    return this.storage.length;
  }

  isEmpty(): boolean {
    if (this.size() === 0 && this.capacity > 0) {
      return true;
    }
    return false;
  }

  enqueue(item: T): boolean {
    if (this.size() === this.capacity) {
      return false;
    } else {
      this.storage.push(item);
      return true;
    }
  }

  getShift(): T | null {
    if (!this.isEmpty()) {
      return this.storage.shift()!;
    }
    return null;
  }

  dequeue(): boolean {
    if (!this.isEmpty()) {
      this.storage.shift();
      return true;
    }
    return false;
  }

  next(): T {
    return this.storage[0];
  }

  clearQueue() {
    this.storage = [];
  }

  printQueue(): string {
    let resp: string = '';
    for (let index = 0; index < this.size(); index++) {
      resp = resp + `${index} -> ` + JSON.stringify(this.storage[index]) + `\t`;
    }
    return resp;
  }
}

const queue: Queue<number> = new Queue(5);
console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));
console.log(queue.enqueue(4));
console.log(queue.enqueue(5));
console.log(queue.enqueue(6));

console.log(queue.printQueue());
console.log(queue.dequeue());
console.log(queue.printQueue());
console.log(queue.getShift());
console.log(queue.printQueue());
queue.clearQueue();
console.log(`Clear Queue`);
console.log(queue.printQueue());
