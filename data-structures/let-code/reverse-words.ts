function reverseWords(s: string): string {
  return s.replace(/\s+/g, ' ').trim().split(' ').reverse().join(' ');
}
const str = '   hola    mundo  cruel   ';
console.log(reverseWords(str));

function reverseWords2(s: string): string {
  return s.trim().split(' ').filter(Boolean).reverse().join(' ');
}
