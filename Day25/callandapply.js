// Call and Apply methods in JavaScript
const person = {
    name : "Suzune",
    age : 20,
}
function greet(greeting1, greeting2) {
    console.log(`${greeting1} ${this.name} ${greeting2} ${this.age}`); // Suzune 20
};
// Call method : to call a function with a specific this value and arguments provided individually :
// how many arguments that greet function receive ? 2 arguments : greeting1 and greeting2 ?
// yes, so we have to pass 2 arguments
// So , what about person arguments ?
// person arguments are passed as the first argument of the call method, so that the this keyword in the greet function will refer to the person object.
// Sumazize : call receives only or more as i need  3 arguments ? 
// yes, the first argument is the object that we want to bind the this keyword to, and the rest of the arguments are the arguments that we want to pass to the function.
greet.call(person, "Hello", "How are you ?"); // Hello Suzune How are you ? 20

// Apply method : to call a function with a specific this value and arguments provided as an array :
greet.apply(person, ["Hi", "Nice to meet you"]); // Hi Suzune Nice to meet you 20


