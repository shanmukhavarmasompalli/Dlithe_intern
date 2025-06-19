// Arithmetic Operators
let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a % b); // 1
a++; // 11
b--; // 2
// Assignment Operators
let x = 5;
x += 3; // x = 8
x *= 2; // x = 16
x %= 7; // x = 2
// Comparison Operators
let c = 5 
let d = '5';
console.log(c == d);  // true
console.log(c === d); // false
console.log(c != d);  // false
console.log(c !== d); // true
// Logical Operators
let age = 20;
let isStudent = true;
if (age > 18 && isStudent) {
  console.log('Access granted');
}
// Conditional Statements
let score = 75;
if (score >= 90) {
  console.log('Grade A');
} else if (score >= 60) {
  console.log('Grade B');
} else {
  console.log('Grade C');
}
// Switch and Ternary
let fruit = 'apple';
switch(fruit) {
  case 'apple': console.log('Red'); break;
  case 'banana': console.log('Yellow'); break;
  default: console.log('Unknown');
}
//2nd eg
let age = 18;
let type = (age >= 18) ? 'Adult' : 'Minor';
