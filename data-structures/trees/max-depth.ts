/*
You have been given a binary tree. Implement a function called maxDepth that takes the tree as an argument and calculates the maximum depth of the tree, i.e., the length of the longest path from the root to a leaf.
*/

export class TreeNode<T> {
  private left: TreeNode<T> | null;
  private right: TreeNode<T> | null;
  private value: T;

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

  public getRight(): TreeNode<T> | null {
    return this.right;
  }

  public setRight(right: TreeNode<T> | null): void {
    this.right = right;
  }

  public getValue(): T {
    return this.value;
  }

  public setValue(value: T): void {
    this.value = value;
  }
}

export class BinaryTree<T> {
  private root: TreeNode<T> | null;
  private size: number;

  constructor() {
    this.root = null;
    this.size = 0;
  }

  addItem(value: T): boolean {
    const newNode: TreeNode<T> = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
      this.size++;
      return true;
    }
    return this.addItemRecursive(this.root, value);
  }

  height(node: TreeNode<T> | null = this.root): number {
    if (!node) return 0;
    return (
      Math.max(this.height(node.getLeft()), this.height(node.getRight())) + 1
    );
  }

  maxDepth(node: TreeNode<T> | null = this.root): number {
    if (node === null) return 0;
    const left: number = this.height(node.getLeft());
    const right: number = this.height(node.getRight());
    return Math.max(left, right);
  }

  private addItemRecursive(node: TreeNode<T>, value: T): boolean {
    const newNode: TreeNode<T> = new TreeNode(value);
    if (value === node.getValue()) {
      return false;
    }

    if (value > node.getValue()) {
      if (node.getRight() === null) {
        node.setRight(newNode);
        this.size++;
        return true;
      }
      return this.addItemRecursive(node.getRight()!, value);
    } else {
      if (node.getLeft() === null) {
        node.setLeft(newNode);
        this.size++;
        return true;
      }
      return this.addItemRecursive(node.getLeft()!, value);
    }
  }

  public getRoot(): TreeNode<T> | null {
    return this.root;
  }

  public setRoot(root: TreeNode<T> | null): void {
    this.root = root;
  }

  public getSize(): number {
    return this.size;
  }

  public setSize(size: number): void {
    this.size = size;
  }
}

const tree: BinaryTree<number> = new BinaryTree();
tree.addItem(0);
tree.addItem(1);
tree.addItem(2);
console.log(tree.maxDepth());
