const sortStack = (numbers: number[]): number[] => {
  const stack: number[] = [...numbers];
  const tempStack: number[] = [];

  while (stack.length > 0) {
    const temp = stack.pop()!;
    while (tempStack.length > 0 && tempStack[tempStack.length - 1] > temp) {
      stack.push(tempStack.pop()!);
    }
    tempStack.push(temp);
  }
  return tempStack;
};

const numArray = [34, 3, 31, 98, 92, 23];
console.log(sortStack(numArray));
