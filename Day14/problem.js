function isObject(value){
    return typeof value === "object" && !Array.isArray(value);
}
let obj = { name: "Suzune", age: 20 };
let arr = [1, 2, 3];
let check = isObject(obj); // true
console.log(check); // true

let student = [
    { name: "Suzune", age: 20 },
    { name: "Suzu", age: 22 }
];
for( index in student) {
    console.log(student[index].name);
}
m


