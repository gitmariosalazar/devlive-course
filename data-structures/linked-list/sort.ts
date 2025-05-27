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

function sortDoublyLinkedList(
  doubleLinkedList: DoublyLinkedList<number>
): DoublyLinkedList<number> {
  let currentNode: DoublyNode<number> | null = doubleLinkedList.getHead();
  let doubleLinkedListResult: DoublyLinkedList<number> =
    new DoublyLinkedList<number>();
  let aux: number[] = [];
  while (currentNode !== null) {
    aux.push(currentNode.getValue());
    currentNode = currentNode.getNextNode();
  }
  sort(aux);
  for (const n of aux) {
    doubleLinkedListResult.add(n);
  }
  return doubleLinkedListResult;
}

function sort(numbers: number[]) {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = 0; j < numbers.length - 1 - i; j++) {
      if (numbers[j] > numbers[j + 1]) {
        let temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }
}

const doubleLinkedList: DoublyLinkedList<number> =
  new DoublyLinkedList<number>();
console.log(doubleLinkedList.add(6));
console.log(doubleLinkedList.add(2));
console.log(doubleLinkedList.add(0));
console.log(doubleLinkedList.add(3));
console.log(doubleLinkedList.add(5));
console.log(doubleLinkedList.add(7));
console.log(doubleLinkedList.add(4));
console.log(doubleLinkedList.add(1));
console.log(doubleLinkedList.toString());
const sortList = sortDoublyLinkedList(doubleLinkedList);
console.log(sortList.toString());
