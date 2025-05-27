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
   * Setter
   * @param value
   */
  setValue(value: T): void {
    this.value = value;
  }

  /**
   * Getter
   * @returns {T}
   */
  public getValue(): T {
    return this.value;
  }

  /**
   * Getter $previewNode
   * @return {DoublyNode<T> | null}
   */
  public getPreviewNode(): DoublyNode<T> | null {
    return this.previewNode;
  }

  /**
   * Getter $nextNode
   * @return {DoublyNode<T> | null}
   */
  public getNextNode(): DoublyNode<T> | null {
    return this.nextNode;
  }

  /**
   * Setter $previewNode
   * @param {DoublyNode<T> | null} value
   */
  public setPreviewNode(value: DoublyNode<T> | null): void {
    this.previewNode = value;
  }

  /**
   * Setter $nextNode
   * @param {DoublyNode<T> | null} value
   */
  public setNextNode(value: DoublyNode<T> | null): void {
    this.nextNode = value;
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
    const newNOde: DoublyNode<T> | null = new DoublyNode<T>(value);
    if (this.head === null) {
      this.head = newNOde;
      this.tail = this.head;
      this.length++;
      return true;
    } else {
      if (this.tail !== null) {
        const currentNode = this.tail;
        this.tail.setNextNode(newNOde);
        this.tail = newNOde;
        this.tail.setPreviewNode(currentNode);
        this.length++;
        return true;
      }
    }
    return false;
  }

  public toString(): string {
    let result: string = '';
    let currentNode = this.head;
    while (currentNode !== null) {
      result += currentNode.toString() + '\t\t';
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
