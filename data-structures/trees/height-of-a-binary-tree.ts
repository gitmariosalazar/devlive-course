/*
Implement a function to determine the height of a binary tree. The height of a tree is defined as the number of nodes along the longest path from the root node down to the farthest leaf node.
*/

export class TreeNode<T> {
  private left: TreeNode<T> | null;
  private value: T;
  private right: TreeNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  public getLeft(): TreeNode<T> | null {
    return this.left;
  }

  public setLeft(left: TreeNode<T> | null): void {
    this.left = left;
  }

  public getValue(): T {
    return this.value;
  }

  public setValue(value: T): void {
    this.value = value;
  }

  public getRight(): TreeNode<T> | null {
    return this.right;
  }

  public setRight(right: TreeNode<T> | null): void {
    this.right = right;
  }
}

export class BinaryTree<T> {
  private root: TreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  isLeaf(value: T): boolean {
    const foundNode: TreeNode<T> | null = this.findValue(value);
    if (foundNode === null) return false;
    return foundNode.getLeft() === null && foundNode.getRight() === null;
  }

  addItem(value: T): boolean {
    const newNode: TreeNode<T> = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
      return true;
    }
    return this.addItemRecursive(this.root, value);
  }

  hight(node: TreeNode<T> | null = this.root): number {
    if (!node) return 0;
    return (
      Math.max(this.hight(node.getLeft()), this.hight(node.getRight())) + 1
    );
  }

  private addItemRecursive(node: TreeNode<T>, value: T): boolean {
    const newNode: TreeNode<T> = new TreeNode(value);
    if (value === node.getValue()) {
      return false;
    }

    if (value > node.getValue()) {
      if (node.getRight() === null) {
        node.setRight(newNode);
        return true;
      }
      return this.addItemRecursive(node.getRight()!, value);
    } else {
      if (node.getLeft() === null) {
        node.setLeft(newNode);
        return true;
      }
      return this.addItemRecursive(node.getLeft()!, value);
    }
  }

  findValue(value: T): TreeNode<T> | null {
    if (this.root === null) return null;
    return this.findNode(this.root, value);
  }

  private findNode(
    node: TreeNode<T> | null = this.root,
    value: T
  ): TreeNode<T> | null {
    if (node === null) return null;
    if (node.getValue() === value) {
      return node;
    }
    if (value > node.getValue()) {
      // Go to right
      return this.findNode(node.getRight(), value);
    } else {
      // Go to left
      return this.findNode(node.getLeft(), value);
    }
  }

  deleteValue(value: T): TreeNode<T> | null {
    if (this.root === null) return null;
    return this.deleteNode(this.root, value);
  }

  deleteNode(
    node: TreeNode<T> | null,
    value: T,
    parent: TreeNode<T> | null = null
  ): TreeNode<T> | null {
    if (node === null) return null;
    if (value < node.getValue()) {
      node.setLeft(this.deleteNode(node.getLeft(), value, node));
    } else if (value > node.getValue()) {
      node.setRight(this.deleteNode(node.getRight(), value, node));
    } else {
      // Caso 1: Nodo hoja
      if (node.getLeft() === null && node.getRight() === null) {
        if (node === this.root) {
          this.root = null;
        } else if (parent !== null) {
          if (parent.getLeft() === node) parent.setLeft(null);
          else parent.setRight(null);
        }
        return null;
      }
      // Caso 2: Nodo con un hijo
      else if (node.getLeft() === null) {
        if (node === this.root) {
          this.root = node.getRight();
        }
        return node.getRight();
      } else if (node.getRight() === null) {
        if (node === this.root) {
          this.root = node.getLeft();
        }
        return node.getLeft();
      }
      // Caso 3: Nodo con dos hijos
      else {
        // Encontrar el sucesor (mínimo del subárbol derecho)
        let successor = this.findMin(node.getRight()!);
        node.setValue(successor.getValue());
        // Eliminar el sucesor
        node.setRight(
          this.deleteNode(node.getRight(), successor.getValue(), node)
        );
      }
    }
    return node;
  }

  private findMin(node: TreeNode<T>): TreeNode<T> {
    let current = node;
    while (current.getLeft() !== null) {
      current = current.getLeft()!;
    }
    return current;
  }

  updateValue(searchValue: T, toUpdateValue: T): boolean {
    const foundAndDeleted = this.deleteValue(searchValue);
    if (!foundAndDeleted) {
      return false;
    }
    this.addItem(toUpdateValue);
    return true;
  }

  printTree(): void {
    const printNode = (
      node: TreeNode<T> | null,
      prefix: string = '',
      isLeft: boolean = true
    ) => {
      if (node === null) return;
      console.log(`${prefix}${isLeft ? '├──' : '└──'} ${node.getValue()}`);
      const newPrefix = prefix + (isLeft ? '│   ' : '    ');
      printNode(node.getLeft(), newPrefix, true);
      printNode(node.getRight(), newPrefix, false);
    };

    if (this.root === null) {
      console.log('Empty tree');
    } else {
      console.log('Tree:');
      printNode(this.root, '', true);
    }
  }

  public getRoot(): TreeNode<T> | null {
    return this.root;
  }

  public setRoot(root: TreeNode<T> | null): void {
    this.root = root;
  }
}

const binaryTree: BinaryTree<number> = new BinaryTree();
binaryTree.addItem(1);
binaryTree.addItem(2);
binaryTree.addItem(-1);
binaryTree.addItem(0);
binaryTree.addItem(7);
binaryTree.addItem(4);
binaryTree.addItem(8);
binaryTree.addItem(10);
console.log(binaryTree.printTree());
binaryTree.addItem(12);
console.log(binaryTree);
console.log(`Search value: -1`);
console.log(binaryTree.deleteValue(1));
console.log(binaryTree.findValue(1));
console.log(binaryTree.printTree());
console.log(binaryTree.hight());
