const removeValues = (array: any[]): any[] => {
  return array.filter((value) => !!value);
};

const mixedValues = [
  NaN,
  0,
  15,
  false,
  -22,
  '',
  undefined,
  47,
  null,
  'a simple string'
];
console.log(mixedValues);
console.log(removeValues(mixedValues));
