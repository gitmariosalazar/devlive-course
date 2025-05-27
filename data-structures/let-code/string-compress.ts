function compress(chars: string[]) {
  if (chars.length == 0) return 0;
  let write = 0;
  let count = 1;
  let current = chars[0];

  for (let read = 1; read <= chars.length; read++) {
    if (read == chars.length || chars[read] != current) {
      chars[write++] = current;
      if (count > 1) {
        let countStr = String(count);
        for (let c of countStr) {
          chars[write++] = c;
        }
      }
      if (read < chars.length) {
        current = chars[read];
        count = 1;
      }
    } else {
      count++;
    }
  }
  return write;
}

function compress2(chars: string[]): number {
  let char = chars[0];
  let count = 1;
  let row = 0;
  let aux = char;
  for (let index = 1; index < chars.length; index++) {
    if (char !== chars[index]) {
      count = 1;
    }
    if (char === chars[index]) {
      count++;
      row++;
    }
    char = chars[index];
    console.log(count, aux, row, char);
  }
  return 0;
}

function compressVerbose(chars: string[]): number {
  let result = '';
  let count = 1;

  for (let i = 1; i <= chars.length; i++) {
    if (chars[i] === chars[i - 1]) {
      count++;
    } else {
      result += chars[i - 1];
      if (count > 1) result += String(count);
      count = 1;
    }
  }
  return result.length;
}

export const chars = [
  'a',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b'
];
console.log(compressVerbose(chars));
