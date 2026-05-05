 const x = 100 ;
//  x = 200 ;
 console.log(x); // TypeError: Assignment to constant variable.

let y = 100 ;
y = "hello" ;
console.log(y); // hello 

// undefined : type of variable that has not been assigned a value yet.
let z ;
console.log(z); // undefined

// null : represents the intentional absence of any object value.
let a = null ;
console.log(a); // null

// boolean : represents a logical entity that can have two values: true or false.
let isTrue = true ;
let isFalse = false ;
console.log(isTrue); // true
console.log(isFalse); // false

// const and let won't be hoisted while var will be hoisted.
// undefined : when a variable is declared but not assigned a value 
// most use let insted of var to avoid hoisting issues.

// var x ;
// console.log(x); // undefined

const name = "John" ;
console.log(name); // John
console.log(typeof name); // string

// + string concatenation == ${variable}
const firstName = "John" ;
console.log("Hello " + firstName); // Hello John

// ` ` : allows use ${variable} to embed expressions inside string 
console.log(`Hello ${firstName}`); // Hello John
console.log(`The length of the name is ${firstName.length}`); // The length of the name is 4

let name2 = "Chu Minh Hieu" ;
console.log(name2.split(" ")); // ["Chu", "Minh", "Hieu"]

console.log(name2.split(" ")[0]); // Chu

// split("/") : since there is no "/" in the string, it will return an array with the original string as the only element.
console.log(name2.split("/")); // ["Chu Minh Hieu"]

// split(""): splits the string into an array of individual characters, including spaces and punctuation.
//  Each character becomes an element in the resulting array.
console.log(name2.split("")); // ["C", "h", "u", " ", "M", "i", "n", "h", " ", "H", "i", "e", "u"]

// substring(start, end) : returns the part of the string between the start and end indexes
let name3 = "ChuMinhHieu" ;
console.log(name3.substring(0, 3)); // Chu

// slice(start, end) : returns the part of the string between the start and end indexes
console.log(name3.slice(0, 3));

// Number() : converts a string to a number
console.log(Number("123")); // 123
console.log(Number("abc")); // NaN
console.log(Number("")); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// Comparison operators : >, <, >=, <=, ==, ===, !=, !==
console.log(4 > 3); // true
console.log(4 < 3); // false

// loose equality (==) : compares values and automatically converts types 
// strict equality (===) : compares values without type coercion without converting types, it checks both value and type.
// most use strict equality (===) to avoid unexpected results due to type coercion.

console.log(4 == "4"); // true (loose equality, type coercion)
console.log(4 === "4"); // false (strict equality, no type coercion)
console.log(4 != "5"); // true (loose inequality, type coercion)
console.log(4 !== "5"); // true (strict inequality, no type coercion)

// prompt() : displays a dialog box that prompts the user for input and returns the input as a string.
// let userInput = prompt("Please enter your name:") ;
// console.log(userInput); // the name entered by the user

// alert() : displays an alert box with a specified message and an OK button.
// alert("Hello, " + userInput + "!"); // Hello, [user's name]!

// confirm() : displays a dialog box with a specified message, along with an OK and a Cancel button. It returns true if the user clicks OK, and false if the user clicks Cancel.
// let isConfirmed = confirm("Do you want to proceed?") ;
// console.log(isConfirmed); // true if OK is clicked, false if Cancel is clicked

// non-returning function : return undefined by default if there is no return statement.

function sum(a , b) {
    return a + b ;
}
let kq = sum(2, 3) ; // 5
console.log("Sum of Values: " + kq); // Sum of Values: 5

// default parameters : allows you to specify default values for function parameters if no value is provided when the function is called.
function sum2(a =3 , b = 4) {
    return a + b ;
}
console.log(sum2()); // 7 (default values are used)
console.log(sum2(5)); // 9 (a is 5, b is default 4)
console.log(sum2(5, 6)); // 11 (a is 5, b is 6)

let store = sum2(2 , 3); // 5
console.log(store); // 5

// anonymous function : a function that is defined without a name and is often used as an argument to other functions or assigned to a variable.
let anonymousFunc = function() {
    console.log("This is an anonymous function");
}
anonymousFunc(); // This is an anonymous function

// arrow function : a shorter syntax for writing functions in JavaScript, using the => syntax.
let arrowFunc = () => {
    console.log("This is an arrow function");
}
arrowFunc();

let arrowFunc2 = ( x ) => {
    return x * 2 ;
}
console.log(arrowFunc2(5)); // 10

// arrow function with implicit return : if the function body contains only a single expression, you can omit the curly braces and the return keyword.
let add = (a, b) => a + b ;
console.log(add(2, 3)); // 5

