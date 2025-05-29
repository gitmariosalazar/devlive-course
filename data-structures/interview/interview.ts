/**
 * 🧠 EJERCICIO: Filtrar y agrupar usuarios por edad
 *
 * Tienes un arreglo de usuarios, donde cada uno tiene:
 * - name: string
 * - age: number
 *
 * Tu objetivo es:
 * 1. Filtrar los usuarios que tengan 18 años o más (mayores de edad).
 * 2. Agruparlos en dos categorías:
 *    - "youngAdults": usuarios con edad entre 18 y 29 (inclusive).
 *    - "adults": usuarios con edad 30 o más.
 * 3. Dentro de cada grupo, ordenar los nombres alfabéticamente.
 *
 * 🔁 Entrada:
 * const users = [
 *   { name: "Carlos", age: 17 },
 *   { name: "Ana", age: 25 },
 *   { name: "Luis", age: 32 },
 *   { name: "Zoe", age: 19 },
 *   { name: "Pedro", age: 45 },
 *   { name: "Marta", age: 28 },
 * ];
 *
 * ✅ Salida esperada:
 * {
 *   youngAdults: ["Ana", "Marta", "Zoe"],
 *   adults: ["Luis", "Pedro"]
 * }
 */

export interface User {
  name: string;
  age: number;
}

export interface Result {
  youngAdults: string[];
  adults: string[];
}

const filterUsers = (users: User[]) => {
  const youngAdults: string[] = [];
  const adults: string[] = [];
  for (let user of users) {
    if (user.age >= 18 && user.age <= 29) {
      youngAdults.push(user.name);
    } else if (user.age >= 30) {
      adults.push(user.name);
    }
  }
  youngAdults.sort();
  adults.sort();
  return { youngAdults, adults };
};

const filterUserByAge = (users: User[]): Map<string, User[]> => {
  const hash: Map<string, User[]> = new Map();
  hash.set('youngAdults', []);
  hash.set('adults', []);
  for (let user of users) {
    if (user.age < 18) continue;
    if (user.age >= 18 && user.age <= 29) {
      hash.get('youngAdults')?.push(user);
    } else {
      hash.get('adults')?.push(user);
    }
  }
  hash.get('youngAdults')?.sort((a, b) => a.name.localeCompare(b.name));
  hash.get('adults')?.sort((a, b) => a.name.localeCompare(b.name));
  return hash;
};

const users: User[] = [
  { name: 'Carlos', age: 17 },
  { name: 'Ana', age: 25 },
  { name: 'Luis', age: 32 },
  { name: 'Zoe', age: 19 },
  { name: 'Pedro', age: 45 },
  { name: 'Marta', age: 28 }
];

console.log(filterUserByAge(users));
