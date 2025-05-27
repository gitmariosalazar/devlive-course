export class DoublyNode<T> {
  private value: T;
  private previewNode: DoublyNode<T> | null;
  private nextNode: DoublyNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.previewNode = null;
    this.nextNode = null;
  }

  public setValue(value: T): void {
    this.value = value;
  }

  public getValue(): T {
    return this.value;
  }

  public setPreviewNode(previewNode: DoublyNode<T> | null): void {
    this.previewNode = previewNode;
  }

  public getPreviewNode(): DoublyNode<T> | null {
    return this.previewNode;
  }

  public setNextNode(nextNode: DoublyNode<T> | null): void {
    this.nextNode = nextNode;
  }

  public getNextNode(): DoublyNode<T> | null {
    return this.nextNode;
  }

  public toString(): string {
    return `${JSON.stringify(
      this.previewNode?.getValue()
    )} <- | ${JSON.stringify(this.value)} | -> ${JSON.stringify(
      this.nextNode?.getValue()
    )}`;
  }
}

export class DoublyLinkedList<T> {
  private head: DoublyNode<T> | null;
  private tail: DoublyNode<T> | null;
  private length: number;

  constructor() {
    this.head = null;
    this.tail = this.head;
    this.length = 0;
  }

  public add(newValue: T): boolean {
    const newNode: DoublyNode<T> = new DoublyNode<T>(newValue);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
      return true;
    } else {
      if (this.tail !== null) {
        const currentNode = this.tail;
        this.tail.setNextNode(newNode);
        this.tail = newNode;
        this.tail.setPreviewNode(currentNode);
        this.length++;
        return true;
      }
    }
    return false;
  }

  public find(searchValue: T): DoublyNode<T> | null {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.getValue() === searchValue) {
        return currentNode;
      }
      currentNode = currentNode.getNextNode();
    }
    return null;
  }

  public update(searchValue: T, toUpdateValue: T): boolean {
    const findNode = this.find(searchValue);
    if (findNode?.getValue() === searchValue) {
      findNode.setValue(toUpdateValue);
      return true;
    }
    return false;
  }

  public remove(searchValue: T): boolean {
    if (this.head === null) return false;
    if (this.head.getValue() === searchValue) {
      this.head = this.head.getNextNode();
      if (this.head === null) {
        this.tail = null;
      } else {
        this.head.setPreviewNode(null);
      }
      this.length--;
      return true;
    }

    let currentNode = this.head;
    while (currentNode?.getNextNode() !== null) {
      const toDeleteNode = currentNode?.getNextNode()!;
      if (toDeleteNode.getValue() === searchValue) {
        currentNode?.setNextNode(toDeleteNode.getNextNode());
        if (toDeleteNode.getNextNode() !== null) {
          toDeleteNode.getNextNode()?.setPreviewNode(currentNode);
        } else {
          this.tail = currentNode;
        }
        this.length--;
        return true;
      }
      currentNode = currentNode?.getNextNode()!;
    }
    return false;
  }

  public toString(): string {
    let result: string = '';
    let currentNode = this.head;
    while (currentNode !== null) {
      result += currentNode.toString() + '\t';
      currentNode = currentNode.getNextNode();
    }
    return result;
  }

  public size(): number {
    return this.length;
  }

  public setHead(head: DoublyNode<T> | null): void {
    this.head = head;
  }

  public getHead(): DoublyNode<T> | null {
    return this.head;
  }

  public setTail(tail: DoublyNode<T> | null): void {
    this.tail = tail;
  }

  public getTail(): DoublyNode<T> | null {
    return this.tail;
  }
}

const doubleLinkedList: DoublyLinkedList<string> =
  new DoublyLinkedList<string>();
console.log(doubleLinkedList.add('A'));
console.log(doubleLinkedList.add('B'));
console.log(doubleLinkedList.add('C'));
console.log(doubleLinkedList.add('D'));
console.log(doubleLinkedList.add('E'));

/*
 */

console.log(doubleLinkedList.getHead());
console.log(doubleLinkedList.getTail());
console.log(doubleLinkedList.size());
console.log(doubleLinkedList.toString());
console.log(doubleLinkedList.find('G'));
//console.log(doubleLinkedList.update('C', 'Updated value'));
//console.log(doubleLinkedList.remove('A'));
console.log(doubleLinkedList.remove('E'));
console.log(doubleLinkedList.toString());
console.log(doubleLinkedList.getHead());
console.log(doubleLinkedList.getTail());
console.log(doubleLinkedList.size());
