// new , this , method , caution 

let student = {
    name : "Suzune",
    age : 20,
}
let student3 = {
    name : "Suzune2",
    age : 21,
}
// Constructor function : to create multiple objects with same properties and methods :
function Student(name, age) {
    this.name = name;
    this.age = age;
    // method : to get the name of the student :
    // it is imperative to write this method ouside the constructor function 
    this.getName = function() {
        return this.name;
    }
}

let student2 = new Student("Suzune2", 21);
console.log(student2); // Student { name: 'Suzune2', age: 21 }
console.log(student2.getName()); // Suzune2

// prototype : to add properties and methods to the constructor function :
String.prototype.duplicate = function() {
    // how does it works ?
    // step1 : it will take the string value and then it will return the string value + string value
    // step2 : it will return the string value + string value
    // what does this present for ? it present the string value that we are calling the method on
    // why do have use this plus this ? because we want to return the string value + string value
    return this + this;
}
console.log("Hello".duplicate()); // HelloHello


function Girl(){
    // What is cook ?
    // is it a name of method ? yes
    // why do we have use this ? because we want to add the method to the object that we are creating
    // so this says that cook method only belongs to the object that this keyword is referring to ?
    // yes, it is a method that belongs to the object that we are creating using the constructor function
    this.cook = function() {
        console.log("Cooking...");
    };
}

Girl.prototype.sing = function() {
    console.log("Singing...");
};
// suzune is an object , it will extend the properties and methods of the Girl
let suzune = new Girl();
suzune.cook(); // Cooking...
suzune.sing(); // Singing...
