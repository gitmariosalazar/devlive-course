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

export class CircularDoublyLinkedList<T> {
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
      this.head.setPreviewNode(newNode);
      this.head.setNextNode(newNode);
      this.tail = this.head;
      this.length++;
      return true;
    } else {
      if (this.tail !== null) {
        this.tail.setNextNode(newNode);
        newNode.setPreviewNode(this.tail);
        newNode.setNextNode(this.head);
        this.head.setPreviewNode(newNode);
        this.tail = newNode;
        this.length++;
        return true;
      }
    }
    return false;
  }

  public remove(searchValue: T): boolean {
    if (this.head === null) return false;
    let currentNode = this.head;
    do {
      if (currentNode.getValue() === searchValue) {
        if (this.head === this.tail) {
          this.head = null;
          this.tail = null;
        } else {
          const prevNode = currentNode.getPreviewNode();
          const nextNode = currentNode.getNextNode();
          prevNode?.setNextNode(nextNode);
          nextNode?.setPreviewNode(prevNode);
          if (currentNode === this.head) {
            this.head = nextNode;
          }
          if (currentNode === this.tail) {
            this.tail = prevNode;
          }
        }
        this.length--;
        return true;
      }
      currentNode = currentNode.getNextNode()!;
    } while (currentNode !== this.head);

    return false;
  }

  public find(searchValue: T): DoublyNode<T> | null {
    let currentNode: DoublyNode<T> = this.head!;
    if (this.head === null) return null;
    do {
      if (currentNode.getValue() === searchValue) {
        return currentNode;
      }
      currentNode = currentNode.getNextNode()!;
    } while (currentNode && currentNode !== this.head);
    return null;
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
    if (this.head === null) return (result += 'null');
    let currentNode: DoublyNode<T> = this.head!;
    do {
      result += currentNode.toString() + '\t\t';
      currentNode = currentNode.getNextNode()!;
    } while (currentNode && currentNode !== this.head);
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

const circularDoublyLinkedList: CircularDoublyLinkedList<string> =
  new CircularDoublyLinkedList<string>();

console.log(circularDoublyLinkedList.add('A'));
console.log(circularDoublyLinkedList.add('B'));
console.log(circularDoublyLinkedList.add('C'));
console.log(circularDoublyLinkedList.add('D'));
console.log(circularDoublyLinkedList.add('E'));

/*
 */

console.log(circularDoublyLinkedList.getHead());
console.log(circularDoublyLinkedList.getTail());
console.log(circularDoublyLinkedList.size());
console.log(circularDoublyLinkedList.toString());
console.log(circularDoublyLinkedList.find('E')?.toString());
console.log(circularDoublyLinkedList.update('C', 'Updated value'));
console.log(circularDoublyLinkedList.remove('A'));
console.log(circularDoublyLinkedList.toString());
console.log(circularDoublyLinkedList.remove('B'));
console.log(circularDoublyLinkedList.toString());
console.log(circularDoublyLinkedList.remove('C'));
console.log(circularDoublyLinkedList.toString());
console.log(circularDoublyLinkedList.remove('D'));
console.log(circularDoublyLinkedList.toString());
console.log(circularDoublyLinkedList.remove('E'));
console.log(circularDoublyLinkedList.toString());
console.log(circularDoublyLinkedList.getHead());
console.log(circularDoublyLinkedList.getTail());
console.log(circularDoublyLinkedList.size());
