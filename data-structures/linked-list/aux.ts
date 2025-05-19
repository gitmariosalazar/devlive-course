export class SingleNode<T> {
  private data: T;
  private nextNode: SingleNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.nextNode = null;
  }

  public setData(data: T): void {
    this.data = data;
  }

  public getData(): T {
    return this.data;
  }

  public setNextNode(newNode: SingleNode<T> | null): void {
    this.nextNode = newNode;
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

  public size(): number {
    return this.length;
  }

  public isEmpty(): boolean {
    if (this.size() === 0 || this.head === null) {
      return true;
    }
    return false;
  }

  add(newNode: SingleNode<T>): void {
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      if (this.tail) {
        this.tail.setNextNode(newNode);
        this.tail = newNode;
      }
    }
    this.length++;
  }

  find(value: T): SingleNode<T> | null {
    let currentNode: SingleNode<T> | null = this.head;
    while (currentNode !== null) {
      if (currentNode.getData() === value) {
        return currentNode;
      }
      currentNode = currentNode.getNextNode();
    }
    return null;
  }

  update(value: T, toUpdate: T): boolean {
    const nodeFound: SingleNode<T> | null = this.find(value);
    if (nodeFound !== null) {
      nodeFound.setData(toUpdate);
      return true;
    }
    return false;
  }

  remove(value: T): boolean {
    if (this.head === null) return false;

    if (this.head.getData() === value) {
      this.head = this.head.getNextNode();
      if (this.head === null) this.tail = null;
      this.length--;
      return true;
    }

    let current = this.head;
    while (current.getNextNode() !== null) {
      if (current.getNextNode()?.getData() === value) {
        let toDelete = current.getNextNode()!;
        current.setNextNode(toDelete.getNextNode());
        if (toDelete === this.tail) {
          this.tail = current;
        }
        this.length--;
        return true;
      }
      current = current.getNextNode()!;
    }
    return false;
  }

  toString(): string {
    let result: string = '';
    let currentNode: SingleNode<T> | null = this.head;
    while (currentNode !== null) {
      result += '' + JSON.stringify(currentNode.getData()) + '\t->\t';
      currentNode = currentNode.getNextNode()!;
    }
    return result + 'null';
  }

  private setHead(node: SingleNode<T> | null): void {
    this.head = node;
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

const nodeA: SingleNode<string> = new SingleNode('A');
const nodeB: SingleNode<string> = new SingleNode('B');
const nodeC: SingleNode<string> = new SingleNode('C');
const nodeD: SingleNode<string> = new SingleNode('D');
const singleLinkedList: SingleLinkedList<string> = new SingleLinkedList();
singleLinkedList.add(nodeA);
singleLinkedList.add(nodeB);
singleLinkedList.add(nodeC);
singleLinkedList.add(nodeD);
console.log(singleLinkedList.toString());
console.log(singleLinkedList.remove('B'));
console.log(singleLinkedList.size());
console.log(singleLinkedList.find('B'));
//console.log(singleLinkedList.update('D', 'Update Data'));
console.log(singleLinkedList);
console.log(singleLinkedList.remove('A'));
console.log(singleLinkedList.remove('B'));
console.log(singleLinkedList.remove('C'));
console.log(singleLinkedList.remove('D'));
console.log(singleLinkedList.toString());
console.log(singleLinkedList.getHead());
console.log(singleLinkedList.getTail());
console.log(singleLinkedList.size());
