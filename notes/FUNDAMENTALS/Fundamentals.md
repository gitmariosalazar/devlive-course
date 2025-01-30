# input 
* Install
```bash
* npm install prompt-sync
```
* Example
```javascript
const prompt = require('prompt-sync')();
//import prompt from 'prompt-sync'

const name = prompt('What is your name? ');
console.log(`Hey there, ${name}!`)

const number = prompt('Give me a number: ');
console.log(`Number:, ${number}`);
```
* Run index.js
```bash
# node [path file.js]
node index.js
```

# Naming convection
### SNAKE CASE
```
this_is_a_snake_case
frst_name
last_name
age
```
### PASCAL CASE
```
ThisIsAPascalCase
FrstName
LastName
Age
```
### CAMEL CASE
**Use this case to programming**
```
thisIsACamelCase
frstName
lastName
age
```
```javascript
const firstName = 'Mario';
const lastName = "Salazar";
const isValue = true;

function getRandomNumber() {

}
```
# Comments
```javascript
// This is a comment
/*
 description
 parameter
 return
*/
```
# Primitive Types
* char
```javascript
const char = 'a';
```
* string
```javascript
const string = 'mario';
```
* number
```javascript
const number = 15;
```
* float
```javascript
const number = 15.2;
const number = 45.25;
```

* bigint
```javascript
const number = 9007199254710991;
```
* boolean
```javascript
const boolean = true;
const flag = false;
```
* undefined
```javascript
undefined;
```
* null
```javascript
const number = null;
```

# Variables
## var
* es una variable global
## const
## let
* es una variable privada
# Scope
```javascript
// This code is the whole universe
const speedOfLight = '299 792 458 m/s' // Global Scope (variable initialized)

var gravity // Global Scope (variable declared)

gravity = '(6.6743 ± 0.00015) x10^–11 m^3 kg^–1 s^–2' // Gravity for the universe (variable initialized)

console.log(speedOfLight) // 299 792 458 m / s
console.log(gravity) // (6.6743 ± 0.00015) x10^–11 m^3 kg^–1 s^–2

function earth() { // Function Scope
	console.log(gravity) // (6.6743 ± 0.00015) x10^–11 m^3 kg^–1 s^–2 (global scope)

	var gravity = '9.8 m/s2' // Function Scope (initialize a new variable that only applies to the function scope)
	var temperature = '24C'

	console.log(gravity) // 9.8 m/s2 (once we create the new variable, the scope changed)

	{ // Block Scope (Image this is your house scope)
		let houseSize = '240m2' // Block Scope

		console.log(speedOfLight) // 299 792 458 m / s
		console.log(houseSize) // 240m2
	}
	
	console.log(gravity) // 9.8 m/s2
	console.log(houseSize) // Reference Error (I can not access that variable scope)

}

console.log(speedOfLight) // 299 792 458 m / s
console.log(gravity) // (6.6743 ± 0.00015) x10^–11 m^3 kg^–1 s^–2
```

