// Is bind in javascript same as binding in spring framework ? 
// No, bind in javascript is a method that creates a new function that, when called,
// has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
// while binding in spring framework is a process of connecting the application to the database and other resources.

// bind method : to bind the this keyword to a specific object :
let person = {
    name : "Suzune",
    age : 20,
    getName : function() {
        return this.name;
    }
}
let getName = person.getName; // it will return undefined because this keyword is not bound to the person object
console.log(getName()); // undefined

// using bind method to bind the this keyword to the person object :
let getName2 = person.getName.bind(person);
console.log(getName2()); // Suzune

// using bind method to bind the this keyword to another object :
let person2 = {
    name : "Suzune2",
    age : 21,
}
let getName3 = person.getName.bind(person2);
console.log(getName3()); // Suzune2

// bind method can also be used to bind the arguments to the function :
function log(level, time , message) {
    console.log(`[${level}] ${time} : ${message}`);
}
// what does loginfo receive ?
// loginfo receive a new function that has tonly one paremeter : INFO ? 
// no, loginfo receive a new function that has two parameters : time and message ?
// yes, because we have bound the level parameter to "INFO" and the time and message parameters are not bound, so they will be passed when we call the logInfo function.
// why do we pass null as the first paremeter ? because we do not want to bind the this keyword to any object, so we pass null as the first parameter.
let logInfo = log.bind(null, "INFO"); // it will bind the level parameter to "INFO"
logInfo("10:00", "This is an info message"); // [INFO] 10:00 : This is an info message


