/*
Implement the in-order traversal of a binary tree. In-order traversal visits the left subtree, then the node itself, and finally the right subtree.
*/

namespace inOrderTraversal {
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
  class BinaryTree<T> {
    root: TreeNode<T> | null;

    constructor() {
      this.root = null;
    }

    inOrderTraversal(node: TreeNode<T> | null = this.root, values: T[] = []) {
      if (!node) return values;

      this.inOrderTraversal(node.getLeft(), values);
      values.push(node.getValue());
      this.inOrderTraversal(node.getRight(), values);

      return values;
    }
  }

  const tree = new BinaryTree();
  tree.root = new TreeNode(1);
  tree.root.setRight(new TreeNode(3));
  tree.root.setLeft(new TreeNode(2));
  console.log(tree);
  console.log(tree.inOrderTraversal());
  console.log(tree);
}
