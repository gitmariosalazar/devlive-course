export class SingleNode<T> {
  private value: T;
  private nextNode: SingleNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.nextNode = null;
  }

  public setValue(value: T): void {
    this.value = value;
  }

  public getValue(): T {
    return this.value;
  }

  public setNextNode(nextNode: SingleNode<T> | null): void {
    this.nextNode = nextNode;
  }

  public getNextNode(): SingleNode<T> | null {
    return this.nextNode;
  }

  public toString(): string {
    return '' + this.value + '  ->  ';
  }
}

export class CircularSingleLinkedList<T> {
  private head: SingleNode<T> | null;
  private tail: SingleNode<T> | null;
  private length: number;

  constructor() {
    this.head = null;
    this.tail = this.head;
    this.length = 0;
  }

  update(searchValue: T, toUpdateValue: T): boolean {
    const findNode: SingleNode<T> | null = this.find(searchValue);
    if (findNode !== null) {
      findNode.setValue(toUpdateValue);
      return true;
    }
    return false;
  }

  public add(value: T): boolean {
    const newNode: SingleNode<T> | null = new SingleNode<T>(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
      this.tail.setNextNode(this.head);
      this.length++;
      return true;
    } else {
      if (this.tail !== null) {
        this.tail.setNextNode(newNode);
        this.tail = this.tail.getNextNode();
        newNode.setNextNode(this.head);
        this.length++;
        return true;
      }
    }
    return false;
  }

  public remove(searchValue: T): boolean {
    if (this.head === null) return false;
    if (this.head.getValue() === searchValue && this.head === this.tail) {
      this.head = null;
      this.tail = this.head;
      this.length--;
      return true;
    }
    let currentNode = this.head;
    if (this.head.getValue() === searchValue) {
      this.head = this.head.getNextNode();
      this.tail?.setNextNode(this.head);
      this.length--;
      return true;
    }
    do {
      const nextNode = currentNode.getNextNode();
      if (nextNode?.getValue() === searchValue) {
        currentNode.setNextNode(nextNode.getNextNode());
        if (nextNode === this.tail) {
          this.tail = currentNode;
        }
        this.length--;
        return true;
      }
      currentNode = currentNode.getNextNode()!;
    } while (currentNode !== this.head);

    return false;
  }

  public find(searchValue: T): SingleNode<T> | null {
    if (this.head === null) return null;
    let currentNode: SingleNode<T> | null = this.head;
    do {
      if (currentNode?.getValue() === searchValue) {
        return currentNode;
      }
      currentNode = currentNode?.getNextNode()!;
    } while (currentNode && currentNode !== this.head);
    return null;
  }

  public reverse(): void {
    if (!this.head || this.head.getNextNode() === this.head) return;

    let prev: SingleNode<T> | null = null;
    let current: SingleNode<T> | null = this.head;
    let next: SingleNode<T> | null = null;

    const start = this.head;
    do {
      next = current!.getNextNode();
      current!.setNextNode(prev);
      prev = current;
      current = next;
    } while (current !== start);

    this.head.setNextNode(prev);
    this.head = prev!;
  }

  public toString(): string {
    let result: string = '';
    let currentNode: SingleNode<T> | null = this.head;
    do {
      result += currentNode?.toString();
      currentNode = currentNode?.getNextNode()!;
    } while (currentNode && currentNode !== this.head);
    return (result += currentNode.getValue());
  }

  public setHead(head: SingleNode<T> | null): void {
    this.head = head;
  }

  public getHead(): SingleNode<T> | null {
    return this.head;
  }

  public setTail(tail: SingleNode<T> | null): void {
    this.tail = tail;
  }

  public getTail(): SingleNode<T> | null {
    return this.tail;
  }

  public size(): number {
    return this.length;
  }
}

const circularSingleLinkedList: CircularSingleLinkedList<number> =
  new CircularSingleLinkedList();
console.log(circularSingleLinkedList.add(0));
console.log(circularSingleLinkedList.add(1));
console.log(circularSingleLinkedList.add(2));
console.log(circularSingleLinkedList.add(3));
console.log(circularSingleLinkedList.add(4));
console.log(circularSingleLinkedList.add(5));
console.log(circularSingleLinkedList.add(6));
console.log(circularSingleLinkedList.add(7));
console.log(circularSingleLinkedList.add(8));
console.log(circularSingleLinkedList.add(9));
console.log(circularSingleLinkedList.add(10));
console.log(circularSingleLinkedList.toString());
circularSingleLinkedList.reverse();
console.log(circularSingleLinkedList.toString());
