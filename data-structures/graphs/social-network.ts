/*
Consider a social network where users are connected by friendship relationships. Given a social network, find the person with the most number of friends. You can represent the social network as a graph, where each person is a node, and there is an edge between two nodes if they are friends. To find the person with the most number of friends.
*/
export class GraphNode<T> {
  private id: string;
  private data: T;
  private neighbors: Map<GraphNode<T>, number>;

  constructor(id: string, data: T) {
    if (!id || id.trim() === '') {
      throw new Error('The ID cannot be null or empty!');
    }
    this.id = id;
    this.data = data;
    this.neighbors = new Map();
  }

  getId(): string {
    return this.id;
  }

  getData(): T {
    return this.data;
  }

  getNeighbors(): Map<GraphNode<T>, number> {
    return this.neighbors;
  }

  addNeighbor(node: GraphNode<T>, weight: number): void {
    this.neighbors.set(node, weight);
  }

  removeNeighbor(node: GraphNode<T>): void {
    this.neighbors.delete(node);
  }
}

class Graph<T> {
  private nodes: Map<string, GraphNode<T>>;
  private isDirected: boolean;

  constructor(isDirected: boolean = false) {
    this.nodes = new Map();
    this.isDirected = isDirected;
  }

  addNode(id: string, data: T): GraphNode<T> {
    if (this.nodes.has(id)) {
      throw new Error(`El nodo con ID ${id} ya existe`);
    }
    const node = new GraphNode(id, data);
    this.nodes.set(id, node);
    return node;
  }

  getNode(id: string): GraphNode<T> | undefined {
    return this.nodes.get(id);
  }

  addEdge(fromId: string, toId: string, weight: number = 1): void {
    const fromNode = this.getNode(fromId);
    const toNode = this.getNode(toId);

    if (!fromNode || !toNode) {
      throw new Error('One or both nodes not exist');
    }
    if (fromNode === toNode) {
      throw new Error(`Loops aren't permitted!`);
    }

    fromNode.addNeighbor(toNode, weight);
    if (!this.isDirected) {
      toNode.addNeighbor(fromNode, weight);
    }
  }

  removeNode(id: string): void {
    const nodeToRemove = this.getNode(id);
    if (!nodeToRemove) return;

    for (const neighbor of nodeToRemove.getNeighbors().keys()) {
      neighbor.removeNeighbor(nodeToRemove);
    }
    this.nodes.delete(id);
  }

  removeEdge(fromId: string, toId: string): void {
    const fromNode = this.getNode(fromId);
    const toNode = this.getNode(toId);

    if (!fromNode || !toNode) return;

    fromNode.removeNeighbor(toNode);
    if (!this.isDirected) {
      toNode.removeNeighbor(fromNode);
    }
  }
  getNodeCount(): number {
    return this.nodes.size;
  }

  getEdgeCount(): number {
    let edgeCount = 0;
    for (const node of this.nodes.values()) {
      edgeCount += node.getNeighbors().size;
    }
    return this.isDirected ? edgeCount : edgeCount / 2;
  }

  isEmpty(): boolean {
    return this.nodes.size === 0;
  }
  getAllNodes(): GraphNode<T>[] {
    return Array.from(this.nodes.values());
  }

  print(): void {
    if (this.nodes.size === 0) {
      console.log('  [Graph is empty!]');
      return;
    }
    for (const node of this.nodes.values()) {
      const neighbors = Array.from(node.getNeighbors())
        .map(
          ([neighbor, weight]) => `${neighbor.getData()} (weight: ${weight})`
        )
        .join(', ');
      console.log(
        `  ${node.getId()} (${node.getData()}) follow to: [${neighbors}]`
      );
    }
  }
}

export class SocialNetwork {
  private users: Graph<string>;

  constructor() {
    this.users = new Graph(true);
  }

  public getUsers(): Graph<string> {
    return this.users;
  }

  public setUsers(users: Graph<string>): void {
    this.users = users;
  }

  addUser(id: string, name: string): void {
    this.users.addNode(id, name);
  }

  followUser(fromUser: string, toUser: string): void {
    this.users.addEdge(fromUser, toUser);
  }

  findUserWithMostFollowers(): string {
    let userWithMostFollowers: string = '';
    let max: number = 0;
    for (let node of this.users.getAllNodes()) {
      const aux: number = node.getNeighbors().size;
      if (max < aux) {
        max = aux;
        userWithMostFollowers = node.getData();
      }
    }
    return userWithMostFollowers;
  }
}

const socialNetwork: SocialNetwork = new SocialNetwork();
socialNetwork.addUser('A', 'Mario');
socialNetwork.addUser('B', 'Lizbeth');
socialNetwork.addUser('C', 'Clarity');
socialNetwork.addUser('D', 'John');
socialNetwork.addUser('E', 'Joe');

socialNetwork.followUser('A', 'B');
socialNetwork.followUser('A', 'C');
socialNetwork.followUser('B', 'C');
socialNetwork.followUser('B', 'D');
socialNetwork.followUser('B', 'E');
socialNetwork.followUser('C', 'D');
socialNetwork.followUser('C', 'E');
socialNetwork.followUser('C', 'A');
socialNetwork.followUser('C', 'B');
socialNetwork.followUser('D', 'E');

socialNetwork.getUsers().print();
console.log(
  `\nUser with most followers is: ${socialNetwork.findUserWithMostFollowers()}`
);
