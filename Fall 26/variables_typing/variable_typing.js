// String
let name = "Alex";
// BigInt
let bigNumber = 12345678901234567890n;
// Boolean
let isStudent = true;
// Undefined
let score;
// Null
let favoriteFood = null;
// Symbol
let id = Symbol("id");
// Object
let person = {
    name: "Alex", age: 15
};
// This will result in "42Jackie Robinson" because of type coercion
let numberAsString = 42 + "Jackie Robinson"; 
// Number
// z is unchangable because of the const
let x=5;
let y=6;
const z=x+y;
// Print them
console.log("String:", name);
// use toString() method to convert BigInt so it does not dislay the "n" at the end of the number
console.log("BigInt:", bigNumber.toString());
console.log("Boolean:", isStudent);
console.log("Undefined:", score);
console.log("Null:", favoriteFood);
console.log("Symbol:", id);
console.log("Object:", person);
console.log("Number as a string:", numberAsString);
console.log("x:", x);
console.log("y:", y);
console.log("z:", z);
// Using let allows you to change the value later in the code
x = 3 + y;
// z=x + y;
console.log("New value of x:", x);
// console.log("New value of z:", z);