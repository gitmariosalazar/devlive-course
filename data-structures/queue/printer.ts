export type TypeDocument = 'Word' | 'PDF' | 'Excel';

export class Queue<T> {
  private storage: T[];
  private capacity: number;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.storage = [];
  }

  size(): number {
    return this.storage.length;
  }

  isEmpty(): boolean {
    return this.storage.length === 0;
  }

  isFull(): boolean {
    return this.capacity === this.storage.length;
  }

  addToQueue(item: T): boolean {
    if (!this.isFull()) {
      this.storage.push(item);
      return true;
    }
    return false;
  }

  giveShift(): T | null {
    if (!this.isEmpty()) {
      return this.storage.shift()!;
    }
    return null;
  }

  nextShift(): T | null {
    if (!this.isEmpty()) {
      return this.storage[0];
    }
    return null;
  }

  printQueue(): string {
    let resp: string = '';
    for (let index = 0; index < this.storage.length; index++) {
      resp +=
        'shift ' + index + ' -> ' + JSON.stringify(this.storage[index]) + '\n';
    }
    return resp;
  }
}

export class Document {
  type: TypeDocument;
  title: string;
  name: string;
  constructor(type: TypeDocument, title: string, name: string) {
    this.type = type;
    this.title = title;
    this.name = name;
  }
}

export class PdfDocument extends Document {
  isEncrypted: boolean;
  pageSize: string;
  constructor(
    isEncrypted: boolean,
    pageSize: string,
    title: string,
    name: string
  ) {
    super('Word', title, name);
    this.isEncrypted = isEncrypted;
    this.pageSize = pageSize;
  }
}
export class WordDocument extends Document {
  wordCount: number;
  template: string;
  constructor(
    wordCount: number,
    template: string,
    title: string,
    name: string
  ) {
    super('Word', title, name);
    this.wordCount = wordCount;
    this.template = template;
  }
}
export class ExcelDocument extends Document {
  sheetCount: number;
  sheetNames: string[];
  constructor(sheetNames: string[], title: string, name: string) {
    super('Excel', title, name);
    this.sheetNames = sheetNames;
    this.sheetCount = sheetNames.length;
  }
}

export class Printer {
  printerQueue: Queue<Document>;
  capacity: number;
  constructor(capacity: number) {
    this.capacity = capacity;
    this.printerQueue = new Queue(capacity);
  }

  addJob(document: Document): boolean {
    return this.printerQueue.addToQueue(document);
  }

  nextJob(): Document | null {
    return this.printerQueue.giveShift();
  }
}

const pdf: PdfDocument = new PdfDocument(
  true,
  '25px',
  'PDF Document',
  'Mario Salazar'
);
const word: WordDocument = new WordDocument(
  15,
  'Word Template',
  'Word Document',
  'Lizbeth Suarez'
);
const excel: ExcelDocument = new ExcelDocument(
  ['Sheet 01', 'Sheet 02'],
  'Excel Document',
  'John Eren'
);

const queue: Printer = new Printer(3);
console.log(queue.addJob(pdf));
console.log(queue.addJob(word));
console.log(queue.addJob(excel));
console.log(queue.printerQueue.printQueue());
console.log(`\nPrinting...: \n`);
console.log(queue.nextJob());
console.log(`\nPrinting...: \n`);
console.log(queue.nextJob());
console.log(`\nPrinting...: \n`);
console.log(queue.nextJob());
console.log(`\nPrinting...: \n`);
console.log(queue.nextJob());
console.log(queue.printerQueue.printQueue());
