export class DoublyNode<T> {
  private previewNode: DoublyNode<T> | null;
  private nextNode: DoublyNode<T> | null;
  private value: T;

  constructor(value: T) {
    this.value = value;
    this.previewNode = null;
    this.nextNode = null;
  }

  public toString(): string {
    const reset = '\x1b[0m';
    const red = '\x1b[31m';
    const green = '\x1b[32m';
    const cyan = '\x1b[36m';

    return (
      green +
      this.previewNode?.getValue() +
      reset +
      ' <- | ' +
      red +
      this.value +
      reset +
      ' | -> ' +
      cyan +
      this.nextNode?.getValue() +
      reset
    );
  }

  /**
   * Getter $previewNode
   * @return {DoublyNode<T> | null }
   */
  public getPreviewNode(): DoublyNode<T> | null {
    return this.previewNode;
  }

  /**
   * Getter $nextNode
   * @return {DoublyNode<T> | null }
   */
  public getNextNode(): DoublyNode<T> | null {
    return this.nextNode;
  }

  /**
   * Getter $value
   * @return {T}
   */
  public getValue(): T {
    return this.value;
  }

  /**
   * Setter $previewNode
   * @param {DoublyNode<T> } value
   */
  public setPreviewNode(value: DoublyNode<T> | null) {
    this.previewNode = value;
  }

  /**
   * Setter $nextNode
   * @param {DoublyNode<T> } value
   */
  public setNextNode(value: DoublyNode<T> | null) {
    this.nextNode = value;
  }

  /**
   * Setter $value
   * @param {T} value
   */
  public setValue(value: T) {
    this.value = value;
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

  public add(value: T): boolean {
    const newNode: DoublyNode<T> = new DoublyNode<T>(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
      return true;
    } else {
      if (this.tail !== null) {
        const currentNode = this.tail;
        this.tail.setNextNode(newNode);
        this.tail = this.tail.getNextNode();
        this.tail?.setPreviewNode(currentNode);
        this.length++;
        return true;
      }
    }
    return false;
  }

  public find(searchValue: T): DoublyNode<T> | null {
    let currentNode: DoublyNode<T> | null = this.head;
    while (currentNode !== null) {
      if (currentNode.getValue() === searchValue) {
        return currentNode;
      }
      currentNode = currentNode.getNextNode();
    }
    return null;
  }

  public remove(searchValue: T): boolean {
    if (this.head === null) return false;

    if (this.head.getValue() === searchValue) {
      const currentNode = this.head.getNextNode();
      this.head = currentNode;
      this.head?.setPreviewNode(null);
      this.length--;
      return true;
    }

    let currentNode: DoublyNode<T> | null = this.head;
    while (currentNode !== null) {
      if (currentNode.getNextNode()?.getValue() === searchValue) {
        const toDeleteNode = currentNode.getNextNode();
        currentNode.setNextNode(toDeleteNode?.getNextNode()!);
        if (toDeleteNode?.getNextNode() !== null) {
          toDeleteNode?.getNextNode()?.setPreviewNode(currentNode);
        } else {
          this.tail = currentNode;
        }
        this.length--;
        return true;
      }
      currentNode = currentNode.getNextNode();
    }
    return false;
  }

  public update(searchValue: T, toUpdateValue: T): boolean {
    const findNode: DoublyNode<T> | null = this.find(searchValue);
    if (findNode !== null) {
      findNode.setValue(toUpdateValue);
      return true;
    }
    return false;
  }

  public size(): number {
    return this.length;
  }

  public toString(): string {
    let result: string = '';
    let currentNode: DoublyNode<T> | null = this.head;
    while (currentNode !== null) {
      result += currentNode.toString() + '\t\t';
      currentNode = currentNode.getNextNode();
    }
    return result;
  }

  public getHead(): DoublyNode<T> | null {
    return this.head;
  }

  public setHead(head: DoublyNode<T> | null): void {
    this.head = head;
  }

  public getTail(): DoublyNode<T> | null {
    return this.tail;
  }

  public setTail(tail: DoublyNode<T> | null): void {
    this.tail = tail;
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
//console.log(doubleLinkedList.find('G'));
//console.log(doubleLinkedList.update('C', 'Updated value'));
//console.log(doubleLinkedList.remove('A'));
//console.log(doubleLinkedList.toString());
console.log(doubleLinkedList.remove('C'));
console.log(doubleLinkedList.toString());
console.log(doubleLinkedList.remove('E'));
console.log(doubleLinkedList.toString());
//console.log(doubleLinkedList.remove('E'));
//console.log(doubleLinkedList.toString());
//console.log(doubleLinkedList.getHead());
//console.log(doubleLinkedList.getTail());
//console.log(doubleLinkedList.size());
//console.log(doubleLinkedList.toString());
