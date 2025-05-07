const sequence: string = 'ggt';
const dna: string = 'gtggggggtttatgcctttagaacagcag';

const identifyingGeneticDiseases = (sequence: string, dna: string): boolean => {
  for (let index = 0; index < dna.length; index += 1) {
    const aux: string = dna?.slice(index, index + sequence.length);
    if (aux === sequence) {
      return true;
    }
  }
  return false;
};

console.log(identifyingGeneticDiseases(sequence, dna));
