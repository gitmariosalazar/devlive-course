/*
Implement a function to check if a binary tree is balanced. A binary tree is considered balanced if the height of the left and right subtrees of every node do not differ by more than 1.
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

  isBalancedTree(node: TreeNode<T> | null = this.root): boolean {
    const equals: boolean =
      this.height(node?.getLeft()) === this.height(node?.getRight());
    const isBalancedByOne: boolean =
      this.height(node?.getLeft()) - this.height(node?.getRight()) === 1 ||
      this.height(node?.getRight()) - this.height(node?.getLeft()) === 1;
    return equals || isBalancedByOne;
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
console.log(tree);
console.log(tree.height(tree.getRoot()?.getLeft()));
console.log(tree.height(tree.getRoot()?.getRight()));
console.log(tree.isBalancedTree());
