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
    return '' + this.value + '  --->  ';
  }
}

export class SingleLinkedList<T> {
  private head: SingleNode<T> | null;
  private tail: SingleNode<T> | null;
  private length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(value: T): boolean {
    const newNode: SingleNode<T> | null = new SingleNode(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
      return true;
    } else {
      if (this.tail !== null) {
        this.tail.setNextNode(newNode);
        this.tail = newNode;
        this.length++;
        return true;
      }
    }
    return false;
  }

  update(searchValue: T, toUpdateValue: T): boolean {
    const findNode: SingleNode<T> | null = this.find(searchValue);
    if (findNode !== null) {
      findNode.setValue(toUpdateValue);
      return true;
    }
    return false;
  }

  remove(searchValue: T): boolean {
    if (this.head === null) return false;

    if (this.head.getValue() === searchValue) {
      if (this.head === this.tail) {
        this.tail = null;
      }
      this.head = this.head.getNextNode();
      this.length--;
      return true;
    }

    let currentNode: SingleNode<T> | null = this.head;
    while (currentNode !== null) {
      const toDeleteNode = currentNode.getNextNode();
      if (toDeleteNode?.getValue() === searchValue) {
        currentNode.setNextNode(toDeleteNode.getNextNode());
        if (toDeleteNode === this.tail) {
          this.tail = currentNode;
        }
        this.length--;
        return true;
      }
      currentNode = currentNode.getNextNode();
    }
    return false;
  }

  find(searchValue: T): SingleNode<T> | null {
    if (this.head === null) return null;
    let currentNode: SingleNode<T> | null = this.head;
    while (currentNode !== null) {
      if (currentNode.getValue() === searchValue) {
        return currentNode;
      }
      currentNode = currentNode.getNextNode();
    }
    return null;
  }

  toString(): string {
    let result: string = '';
    let currentNode: SingleNode<T> | null = this.head;
    while (currentNode !== null) {
      result += currentNode.toString();
      currentNode = currentNode.getNextNode();
    }
    return (result += 'null');
  }

  public size(): number {
    return this.length;
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
}
const singleLinkedList: SingleLinkedList<string> = new SingleLinkedList();
singleLinkedList.add('Mario');
singleLinkedList.add('John');
singleLinkedList.add('Clarity');
console.log(singleLinkedList.toString());
//console.log(singleLinkedList.update('Mario', 'Mario Salazar'));

console.log(singleLinkedList.size());
console.log(singleLinkedList.toString());
console.log(singleLinkedList.remove('Mario'));
console.log(singleLinkedList.toString());
console.log(singleLinkedList.getHead());
console.log(singleLinkedList.getTail());
console.log(singleLinkedList.remove('John'));
console.log(singleLinkedList.toString());
console.log(singleLinkedList.getHead());
console.log(singleLinkedList.getTail());
console.log(singleLinkedList.remove('Clarity'));
console.log(singleLinkedList.getHead());
console.log(singleLinkedList.getTail());
console.log(singleLinkedList.find('John')?.toString());
console.log(singleLinkedList.toString());
