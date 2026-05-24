// Way 1
const fetchData = async () => {
    return "data";
};

// Way 2
async function getData(params) {
    return "data";    
}

// Promise : 
async function sayHello() {
    return "Hello";
}
console.log(sayHello()); // Promise { 'Hello' }
// get the value from promise :
sayHello().then((res) => console.log(res)); // Hello

// get the value from promise using await :
let res = await sayHello();
console.log(res); // Hello


// Async/Await :
async function sayHello() {
    return "Hello";
}
async function main() {
    const res = await sayHello();
    console.log(res); // Hello
}
main();

/// await waiting for promise to resolve and then return the value, if promise is rejected then it will throw an error.
async function HelloSuzune() {
    return "HelloSuzune";
}
async function main2() {
    // why do i have to use try catch block ? because if the promise is rejected then it will throw an error and we can catch that error using try catch block.
    try {
        // i wonder how long does it take  ? => 0.0000000000000000000000000000000000000000000000000000000000001 seconds
        // why ? because it is a promise and it will be resolved immediately, so it will return the value immediately.
        // suppose the HelloSuzune function is complex , then await still take 0...1 ? 
        // no, it will take more time because it will wait for the promise to resolve and then return the value, so it will take more time.
        // how do i know how long does promise take to resolve ? Does it depend on the complexity of the function, right ?
        // yes
        // if i do not use await then what will happen ?
        // if you do not use await then it will return a promise and you will have to use then to get the value from the promise.
        // so using await then it won't have to use then in getting value from the promise ?
        // yes 
        // Is promise an object ? Yes 
        // Is promise a function ? No
        // Are async and await a kind of returning type of function ? Yes
    
        const res = await HelloSuzune(); 
        console.log(res); // HelloSuzune
    }   
    catch (error) {
        console.log(error);
    }
}
main2();
