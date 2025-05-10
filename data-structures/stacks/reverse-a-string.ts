const reverseString = (word: string): string => {
  let aux: string = '';
  const stack: string[] = word.split('');
  while (stack.length > 0) {
    aux += stack.pop()!;
  }
  return aux;
};

console.log(reverseString('Hello World!'));
