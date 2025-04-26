const PromptSync = require('prompt-sync')();

const findSpecialNumber = (dateBorn: string): number => {
  const arrayA: string[] = dateBorn.split('-');
  let specialNumber: number = 0;
  for (let element of arrayA) {
    specialNumber += parseInt(element);
  }
  let b: string = String(specialNumber);
  specialNumber = 0;
  for (let element of b) {
    specialNumber += parseInt(element);
  }
  b = String(specialNumber);
  specialNumber = 0;
  for (let element of b) {
    specialNumber += parseInt(element);
  }
  return specialNumber;
};

const dateBorn: string = PromptSync(`Type your date born (DD-MM-YYYY): `);
const a: number = findSpecialNumber(dateBorn);
console.log(a);
