function checkOpenClosed(open: string): string {
  let close: string = '';
  if (open === '(') {
    close = ')';
  } else if (open === '[') {
    close = ']';
  } else if (open === '{') {
    close = '}';
  }
  return close;
}

const verifyParentheses = (value: string): boolean => {
  const stack: string[] = value.split('');
  for (let index = 0; index < value.length / 2; index++) {
    if (checkOpenClosed(value[index]) !== stack.pop()) {
      return false;
    }
  }
  return true;
};

const parenthesesString1 = '(()))';
const parenthesesString2 = '((()))';

console.log(verifyParentheses(parenthesesString1));
console.log(verifyParentheses(parenthesesString2));
