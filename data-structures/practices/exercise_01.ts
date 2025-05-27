/*
1. Par con suma objetivo
Enunciado: Dado un array ordenado de enteros nums y un entero target, devuelve los índices de dos números que sumen target.

Input: nums = [1, 2, 4, 6, 10], target = 8

Output: [1, 3]

Pista: Empieza con dos punteros en extremos opuestos.
*/

namespace exercise_01 {
  function twoSum(numbers: number[], target: number): number[] {
    let left: number = 0;
    let right: number = numbers.length - 1;
    while (left < right) {
      const add: number = numbers[left] + numbers[right];
      if (add === target) {
        return [left, right];
      } else if (add > target) {
        right--;
      } else {
        left++;
      }
    }
    return [];
  }

  const numbers: number[] = [1, 2, 4, 6, 10];
  const target: number = 8;
  console.log(twoSum(numbers, target));
}
