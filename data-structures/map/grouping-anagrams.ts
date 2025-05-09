const groupAnagrams = (words: string[]): Map<string, string[]> => {
  const result: Map<string, string[]> = new Map<string, string[]>();
  for (let word of words) {
    const aux: string = Array.from(word).sort().toString().split(',').join('');
    console.log(aux);
    if (result.has(aux)) {
      result.get(aux)?.push(word);
    } else {
      result.set(aux, [word]);
    }
  }
  return result;
};

const words: string[] = [
  'listen',
  'silent',
  'enlist',
  'inlets',
  'google',
  'gooegl'
];

console.log(groupAnagrams(words));
