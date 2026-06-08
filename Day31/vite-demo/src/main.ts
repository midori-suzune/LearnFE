import './style.css'

function greater(person : string){
  return "hello" + person;
}

let user  = "Jane user";
document.body.textContent = greater(user);

let usename : string = "Suzune";
let age : number = 18;
let isStudent : boolean = true;

document.body.textContent = `My name is ${usename}, I'm ${age} years old, and I'm a student: ${isStudent}`;

let person : [string , number ] = ["Suzune", 18];
console.log(typeof person); // object);
console.log(person[0]); // "Suzune"
console.log(person[1]); // 18

let numbers : number[] = [1, 2, 3, 4, 5];
console.log(numbers); // [1, 2, 3, 4, 5]

let userInfo : { name: string; age: number } = {
  name: "Suzune",
  age: 18
};
console.log(userInfo); // { name: "Suzune", age: 18 }

// Union Types : is a variable that can hold more than one type of value
// include | operator to specify multiple types for a variable
let id : number | string = 123;
console.log(id); // 123

id = "abc";
console.log(id); // "abc"

// intersection types : is a variable that can hold multiple types of values at the same time
// interface is not variable, object , class or function but is label 
// it is a way to define the shape of an object and it only exists at compile time in TypeScript
interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: number;
}

// type : is a variable that can hold multiple types of values at the same time
// & : is a operator that is used to combine multiple types into one type
// EmployeePerson must have all the properties of both Person and Employee

type EmployeePerson = Person & Employee;

let employeePerson : EmployeePerson = {
  name: "Suzune",
  age: 18,
  employeeId: 123
};

console.log(employeePerson); // { name: "Suzune", age: 18, employeeId: 123 }

// type and interface : are used to define the shape of an object
// and it only exists at compile time in TypeScript
//  and is not present in the generated JavaScript code


// type guard : is a function that is used to check the type of a variable at runtime
// and it is used to narrow down the type of a variable
function isString(value: any): value is string {
  return typeof value === "string";
}

let value: any = "Hello, World!";

if (isString(value)) {
  console.log(value.toUpperCase()); // "HELLO, WORLD!"
} else {
  console.log("Value is not a string");
}

// Generics : is a way to create reusable components that can work with any type of data

// Before not using generics
type StringBox = {
  value: string ;
};
type NumberBox = {
  value: number ;
};

// create a function that takes a string and returns a StringBox
// function (functionName)(parameter: parameterType): returnType

function createStringBox(value: string): StringBox {
  return { value };
}

function createNumberBox(value: number): NumberBox {
  return { value };
}

// After using generics
// define : type (name of the generic type) <T> = { value: T }
// T is a placeholder for the type that will be specified when the generic type is used
type Box<T> = {
  value: T;
};
let stringBox1 : Box<string> = { value: "Hello, World!" };
console.log(stringBox1); // { value: "Hello, World!" }
console.log(typeof stringBox1); // object

// syntax : functionName<T>(parameter: T): returnType
function createBox<T>(value: T): Box<T> {
  return { value };
}

let stringBox = createBox("Hello, World!");
console.log(stringBox); // { value: "Hello, World!" }

let numberBox = createBox(123);
console.log(numberBox); // { value: 123 }

// Constraints in Generics : is a way to restrict the types that can be used with a generic type
// syntax : <T extends constraintType>
// in this example, the generic type T is constrained to be either a number or a string
function createArray<T extends number | string>(value: T): T[] {
  return [value];
}

let stringArray = createArray("Hello, World!");
console.log(stringArray); // ["Hello, World!"]

// utility types : are built-in types that are provided by TypeScript to make it easier to work with types
// Partial<T> : makes all properties of T optional
interface User {
  name: string;
  age: number;
}

type PartialUser = Partial<User>;

let partialUser: PartialUser = {
  name: "Suzune"
};

console.log(partialUser); // { name: "Suzune" }
// Required<T> : makes all properties of T required
type RequiredUser = Required<PartialUser>;

let requiredUser: RequiredUser = {
  name: "Suzune",
  age: 18
};

console.log(requiredUser); // { name: "Suzune", age: 18 }


// Readonly<T> : makes all properties of T read-only
type ReadonlyUser = Readonly<User>;

let readonlyUser: ReadonlyUser = {
  name: "Suzune",
  age: 18
};

// readonlyUser.name = "New Name"; // Error: Cannot assign to 'name' because it is a read-only property

console.log(readonlyUser); // { name: "Suzune", age: 18 }

// Pick<T, K> : creates a new type by picking a set of properties K from T
type UserName = Pick<User, "name">;

let userName: UserName = {
  name: "Suzune"
};

console.log(userName); // { name: "Suzune" }

// Omit<T, K> : creates a new type by omitting a set of properties K from T
type UserWithoutAge = Omit<User, "age">;

let userWithoutAge: UserWithoutAge = {
  name: "Suzune"
};

console.log(userWithoutAge); // { name: "Suzune" }

// Notable :
// A1 is a type that has two properties: a of type string and b of type number
// A1 not a variable, object, class or function but is a label that can be used to refer to the type of an object
// it same like class in java 
type A1 = {
  a: string;
  b: number;
}
// class A1 {
//   String a ;
//   int b ;
//
// }
// create object of type A1
let objA1: A1 = {
  a: "Hello",
  b: 123
};
// A1 objA1 = new A1('Hello', 123); same like java

console.log(objA1); // { a: "Hello", b: 123 }