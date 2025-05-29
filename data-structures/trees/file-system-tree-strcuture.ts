/*
Consider a file system where each directory can have multiple sub-directories and files. We can represent this structure as a tree where each directory is a node and it can have children nodes (sub-directories) and leaf nodes (files).
*/
namespace fileSystemTree {
  export class NaryTreeNode<T> {
    private value: T;
    private children: NaryTreeNode<T>[];

    constructor(value: T) {
      this.value = value;
      this.children = [];
    }

    public getValue(): T {
      return this.value;
    }

    public setValue(value: T): void {
      this.value = value;
    }

    public getChildren(): NaryTreeNode<T>[] {
      return this.children;
    }

    public setChildren(children: NaryTreeNode<T>[]): void {
      this.children = children;
    }
  }

  class NaryTree<T> {
    root: NaryTreeNode<T> | null;
    size: number;

    constructor(value: T) {
      this.root = new NaryTreeNode(value);
      this.size = 1;
    }

    isLeaf(): boolean {
      return this.root?.getChildren().length === 0;
    }

    findNode(node: NaryTreeNode<T>, value: T): NaryTreeNode<T> | null {
      if (node.getValue() === value) {
        return node;
      }
      for (let child of node.getChildren()) {
        const nodeFound = this.findNode(child, value);
        if (nodeFound !== null) {
          return nodeFound;
        }
      }
      return null;
    }

    addUniqueChildren(parentValue: T, value: T) {
      const parentNode = this.findNode(this.root!, parentValue);
      if (parentNode !== null) {
        const exists = parentNode
          .getChildren()
          .some((child) => child.getValue() === value);
        if (!exists) {
          const newNode = new NaryTreeNode(value);
          parentNode.getChildren().push(newNode);
          this.size++;
        }
      }
    }

    addChildren(parentValue: T, value: T) {
      const node = this.findNode(this.root!, parentValue);
      if (node !== null) {
        const newNode = new NaryTreeNode(value);
        node.getChildren().push(newNode);
        this.size++;
      }
    }
  }
  class FileSystemTree<T> {
    private root: NaryTree<T>;

    constructor(value: T) {
      this.root = new NaryTree<T>(value);
    }

    addFile(filePath: string) {
      const paths: T[] = filePath.split('/') as T[];
      paths[0] = '/' as T;

      for (let i = 1; i < paths.length; i++) {
        this.root.addUniqueChildren(paths[i - 1], paths[i]);
      }
    }

    public getRoot(): NaryTree<T> {
      return this.root;
    }

    public setRoot(root: NaryTree<T>): void {
      this.root = root;
    }
    printTree(
      node: NaryTreeNode<T> = this.root.root!,
      indent: string = ''
    ): void {
      console.log(indent + node.getValue());
      for (const child of node.getChildren()) {
        this.printTree(child, indent + '   ');
      }
    }
  }

  let fs: FileSystemTree<string> = new FileSystemTree('/');
  fs.addFile('/home/user1/file1.txt');
  fs.addFile('/home/user1/file2.txt');
  fs.addFile('/home/user2/file3.txt');
  fs.addFile('/home/user2/file4.txt');
  fs.addFile('/home/user2/file4.txt');
  fs.addFile('/etc/file5.txt');
  fs.addFile('/etc/file6.txt');
  fs.printTree();
}
