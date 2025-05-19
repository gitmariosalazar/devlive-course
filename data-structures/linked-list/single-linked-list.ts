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

  add(value: T): void {
    const newNode: SingleNode<T> = new SingleNode<T>(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
    } else {
      if (this.tail !== null) {
        this.tail.setNextNode(newNode);
        this.tail = this.tail.getNextNode();
        this.length++;
      }
    }
  }

  public find(value: T): SingleNode<T> | null {
    let currentNode: SingleNode<T> | null = this.head;
    while (currentNode !== null) {
      if (currentNode.getValue() === value) {
        return currentNode;
      }
      currentNode = currentNode.getNextNode();
    }
    return null;
  }

  public update(value: T, toUpdate: T): boolean {
    const nodeFound: SingleNode<T> | null = this.find(value);
    if (nodeFound !== null) {
      nodeFound.setValue(toUpdate);
      return true;
    }
    return false;
  }

  public remove(value: T): boolean {
    if (this.head === null) return false;

    if (this.head.getValue() === value) {
      this.head = this.head.getNextNode();
      this.tail = null;
      this.length--;
      return true;
    }

    let currentNode = this.head;
    while (currentNode.getNextNode() !== null) {
      if (currentNode.getNextNode()?.getValue() === value) {
        const toDeleteNode = currentNode.getNextNode()!;
        currentNode.setNextNode(toDeleteNode.getNextNode());
        if (toDeleteNode === this.tail) {
          this.tail = currentNode;
        }
        this.length--;
        return true;
      }
      currentNode = currentNode.getNextNode()!;
    }
    return false;
  }

  public toString(): string {
    let result: string = '';
    let currentNode: SingleNode<T> | null = this.head;
    while (currentNode !== null) {
      result += '' + JSON.stringify(currentNode.getValue()) + '\t->\t';
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
singleLinkedList.add('A');
singleLinkedList.add('B');
singleLinkedList.add('C');
console.log(singleLinkedList);
console.log(singleLinkedList.find('C'));
console.log(singleLinkedList.find('B'));
console.log(singleLinkedList.find('A'));
console.log(singleLinkedList.find('D'));
console.log(singleLinkedList.toString());
console.log(singleLinkedList.update('B', 'Update Value'));
console.log(singleLinkedList.remove('B'));
console.log(singleLinkedList.remove('C'));
//console.log(singleLinkedList.remove('A'));
console.log(singleLinkedList.toString());
console.log(singleLinkedList.getHead());
console.log(singleLinkedList.getTail());
console.log(singleLinkedList.size());
