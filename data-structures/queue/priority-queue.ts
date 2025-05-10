export class Queue<T> {
  private storage: T[];

  constructor() {
    this.storage = [];
  }

  size(): number {
    return this.storage.length;
  }

  isEmpty(): boolean {
    return this.storage.length === 0;
  }

  addToQueue(item: T): void {
    this.storage.push(item);
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

export class PriorityQueue<T> {
  queue: Map<number, Queue<T>>;
  constructor() {
    this.queue = new Map();
  }

  isEmpty(): boolean {
    return Array.from(this.queue.values()).every((queue) => queue.isEmpty());
  }

  giveShift(): T | null {
    const sortedPriorities = Array.from(this.queue.keys()).sort(
      (a, b) => a - b
    );
    for (const priority of sortedPriorities) {
      const queue = this.queue.get(priority)!;
      if (!queue.isEmpty()) {
        const item = queue.giveShift();
        if (queue.isEmpty()) {
          this.queue.delete(priority);
        }
        return item;
      }
    }
    return null;
  }
  addItemPriority(priority: number, item: T) {
    if (!this.queue.has(priority)) {
      this.queue.set(priority, new Queue<T>());
    }
    this.queue.get(priority)?.addToQueue(item);
  }
}

const pq: PriorityQueue<string> = new PriorityQueue();
pq.addItemPriority(0, 'A');
pq.addItemPriority(3, 'B');
pq.addItemPriority(2, 'C');
pq.addItemPriority(0, 'D');
pq.addItemPriority(1, 'E');
pq.addItemPriority(3, 'F');
pq.addItemPriority(1, 'G');
pq.addItemPriority(2, 'H');
pq.addItemPriority(2, 'I');
pq.addItemPriority(3, 'J');
pq.addItemPriority(3, 'K');
console.log(pq.queue);
console.log(pq.giveShift());
console.log(pq.giveShift());
console.log(pq.giveShift());
console.log(pq.giveShift());
console.log(pq.giveShift());
console.log(pq.giveShift());
console.log(pq.queue);
