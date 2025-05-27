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
    return this.value === null ? 'null' : JSON.stringify(this.value) + '\t->\t';
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

  public add(value: T) {
    const newNode = new SingleNode<T>(value);
    if (this.head == null) {
      this.head = newNode;
      newNode.setNextNode(this.head);
      this.tail = this.head;
      this.length++;
      return;
    } else {
      let currentTail = this.tail;
      currentTail?.setNextNode(newNode);
      newNode.setNextNode(this.head);
      this.tail = newNode;
      this.length++;
    }
  }

  public find(searchValue: T): SingleNode<T> | null {
    let currentNode = this.head;
    if (currentNode === null) return null;
    do {
      if (currentNode?.getValue() === searchValue) {
        return currentNode;
      }
      currentNode = currentNode?.getNextNode()!;
    } while (currentNode !== this.head);
    return null;
  }

  public update(searchValue: T, toUpdateValue: T): boolean {
    const findNode: SingleNode<T> | null = this.find(searchValue);
    if (findNode !== null) {
      findNode.setValue(toUpdateValue);
      return true;
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

  public toString(): string {
    let result: string = '';
    let currentNode = this.head;
    if (currentNode === null) return (result += 'null');
    do {
      result += currentNode.toString();
      currentNode = currentNode?.getNextNode()!;
    } while (currentNode !== this.head);
    return (result += this.head.getValue());
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

const circularSingleLinkedList: CircularSingleLinkedList<string> =
  new CircularSingleLinkedList();
console.log(circularSingleLinkedList.add('A'));
console.log(circularSingleLinkedList.add('B'));
console.log(circularSingleLinkedList.add('C'));
//console.log(circularSingleLinkedList.add('D'));
//console.log(circularSingleLinkedList.add('E'));
//console.log(circularSingleLinkedList);
//console.log(circularSingleLinkedList.find('B'));
//console.log(circularSingleLinkedList.find('A'));
//console.log(circularSingleLinkedList.find('D'));
//console.log(circularSingleLinkedList.toString());
//console.log(circularSingleLinkedList.update('B', 'Update Value'));
console.log(circularSingleLinkedList.remove('A'));
//console.log(circularSingleLinkedList.remove('C'));
//console.log(singleLinkedList.remove('A'));
console.log(circularSingleLinkedList.toString());
console.log(circularSingleLinkedList.getHead());
console.log(circularSingleLinkedList.getTail());
console.log(circularSingleLinkedList.size());

//const findNode: SingleNode<string> | null = circularSingleLinkedList.find('B');
//console.log(findNode?.toString());
