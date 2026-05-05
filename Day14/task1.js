// Array 
let arr = [];
// Index
arr[0] = 1;
arr[1] = 2;
arr[2] = "Suzune";
console.log(arr[1]); // 2
console.log(arr[2]); // Suzune
console.log(arr.length - 1 ); // 2

// Looping through array
// forEach(value, index, array) : not return new array
arr.forEach((item , index, array) => {
    console.log(item, index, array);
});
// or
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i], i);
}/*  */

// change array
// map(value, index, array) : return new array
const arr2 = [1, 2, 3];
const arr3 = arr2.map(item => item * 2); // [2, 4, 6]
console.log(arr2); // [1, 2, 3] - arr2 is not changed
console.log(arr3); // [2, 4, 6] - new array is created

// Object 
let student = {
    // key: value
    name: "Suzune",
    age: 20,
    city: "Tokyo",
    // method 
    hi: function() {
        console.log("Hi, I'm " + this.name);
    }
};
console.log("Show info of student: ");
console.log(student.name); // Suzune    // or student["name"]
console.log(student.age); // 20         // or student["age"]
console.log(student.city); // Tokyo     // or student["city"]
student.hi(); // Hi, I'm Suzune

// change vales of object
student.name = "Suzu";
console.log("Name changed to: " + student.name); // Suzu

// delete property of object
delete student.city;
console.log("City deleted: " + student.city); // undefined

// traverse key of object 
for(let key in student){
    console.log(key); // show keys of student object
    if(typeof student[key] === "function") {
        student[key](); // call method hi()
    }else{
        console.log(student[key]); // show values of student object
    }
}    

// Object.keys() : return array of keys
const keys = Object.keys(student);
console.log(keys); // ["name", "age", "hi"]

// Object.values() : return array of values
const values = Object.values(student);
console.log(values); // ["Suzu", 20, function() { ... }]

// optional chaining (?.) : check if property exists before accessing it
console.log(student.name); // Suzu
console.log(student.name?.city); // undefined (no error thrown)

// destructuring assignment : extract values from object
teacher =  {
    name: "Mr. Smith",
    age: 40,
    subject: "Math"
}
const { name, age } = teacher;
console.log(name); // Mr. Smith
console.log(age); // 40     

