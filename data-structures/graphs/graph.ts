/*
Implement a simple graph data structure to store nodes and edges, and build functions to add nodes and edges to the graph.
*/

export class GraphNode<T> {
  private id: string;
  private data: T;
  private neighbors: Map<GraphNode<T>, number>;

  constructor(id: string, data: T) {
    this.id = id;
    this.data = data;
    this.neighbors = new Map();
  }

  public getId(): string {
    return this.id;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public getData(): T {
    return this.data;
  }

  public setData(data: T): void {
    this.data = data;
  }

  public getNeighbors(): Map<GraphNode<T>, number> {
    return this.neighbors;
  }

  public setNeighbors(neighbors: Map<GraphNode<T>, number>): void {
    this.neighbors = neighbors;
  }

  public addNeighbor(node: GraphNode<T>, weight: number): void {
    this.neighbors.set(node, weight);
  }

  public removeNeighbor(node: GraphNode<T>): void {
    this.neighbors.delete(node);
  }
}

export class Graph<T> {
  private nodes: Map<string, GraphNode<T>>;
  private isDirected: boolean;

  constructor(isDirected: boolean = false) {
    this.isDirected = isDirected;
    this.nodes = new Map();
  }

  addNode(id: string, data: T): GraphNode<T> {
    if (this.nodes.has(id)) {
      throw new Error(`The node with id: ${id} already exist!`);
    }
    const newNode: GraphNode<T> = new GraphNode(id, data);
    this.nodes.set(id, newNode);
    return newNode;
  }

  addEdge(fromId: string, toId: string, weight: number = 1): void {
    const fromNode: GraphNode<T> | undefined = this.getNode(fromId);
    const toNode: GraphNode<T> | undefined = this.getNode(toId);

    if (!fromNode || !toNode) {
      throw new Error(`One or both nodes aren't exist!`);
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
    const nodeToRemove: GraphNode<T> | undefined = this.getNode(id);
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
    console.log('Graph {');

    console.log('    nodes: [');
    const nodesArray = Array.from(this.nodes.values());
    nodesArray.forEach((node, index) => {
      console.log(
        `         Node { name: '${node.getId()}' }${
          index < nodesArray.length - 1 ? ',' : ''
        }`
      );
    });
    console.log('    ],');

    const edges: { from: string; to: string; weight: number }[] = [];
    const edgeSet = new Set<string>();
    for (const node of this.nodes.values()) {
      for (const [neighbor, weight] of node.getNeighbors()) {
        const edgeKey = this.isDirected
          ? `${node.getId()}->${neighbor.getId()}`
          : [node.getId(), neighbor.getId()].sort().join('->');
        if (!edgeSet.has(edgeKey)) {
          edges.push({ from: node.getId(), to: neighbor.getId(), weight });
          edgeSet.add(edgeKey);
        }
      }
    }

    console.log('    edges: [');
    edges.forEach((edge, index) => {
      console.log(
        `         Edge { from: [Node ${edge.from}], to: [Node ${
          edge.to
        }], weight: ${edge.weight} }${index < edges.length - 1 ? ',' : ''}`
      );
    });
    console.log('    ]');
    console.log('}');
  }

  getNode(id: string): GraphNode<T> | undefined {
    return this.nodes.get(id);
  }

  public getNodes(): Map<string, GraphNode<T>> {
    return this.nodes;
  }

  public setNodes(nodes: Map<string, GraphNode<T>>): void {
    this.nodes = nodes;
  }

  public isIsDirected(): boolean {
    return this.isDirected;
  }

  public setIsDirected(isDirected: boolean): void {
    this.isDirected = isDirected;
  }
}

const graph = new Graph<string>(false); // Grafo no dirigidoc

graph.addNode('A', 'Node A');
graph.addNode('B', 'Node B');
graph.addNode('C', 'Node C');
graph.addNode('D', 'Node D');
graph.addNode('E', 'Node E');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'C', 1);
graph.addEdge('B', 'D', 5);
graph.addEdge('C', 'D', 8);
graph.addEdge('C', 'E', 10);
graph.addEdge('D', 'E', 2);
graph.print();
