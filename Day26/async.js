// function sleep(timer){
//     return new Promise(function(resolve, reject) {
//         setTimeout(resolve, timer);
//     });
// }

// async function main(){
//     console.log("Hello");
//     await sleep(5000);
//     console.log("World");
// }

// main();


// let x = 10 ;
// function timesTen(a){
//     return a * 10 ;
// }
// let y = timesTen(x);
// console.log(y);

// creation phase
// x = undefined
// timesTen = function timesTen(a){ return a * 10 } ;
// y = undefined

// execution phase
// x = 10
// y = timesTen(x) => 100

// Global Object : window
// this : window

//  Single Thread 
function task(message){
    let number = 10000000000 ;
    while(number > 0){
        number-- ;
    }
    console.log(message);
}
console.log("Start"); // Start -> Loading... -> End
task("Loading..."); // Loading... (after 10 seconds) : blocking the main thread
console.log("End"); // End (before Loading...)

// Callback 
console.log("Start"); // Start -> End -> Loading...
// because setTimeout belongs to Web APIs and 
// it is asynchronous, so it will not block the main thread
//leave call stack winthin 5 seconds then it run in call back queue 
// and then it will be executed when the call stack is empty
setTimeout(function() {
    console.log("Loading...");
}, 5000); 
console.log("End");

// Callback Hell
setTimeout(function() {
    console.log("Step 1");
    setTimeout(function() {
        console.log("Step 2");
        setTimeout(function() {
            console.log("Step 3");
            setTimeout(function() {
                console.log("Step 4");
                setTimeout(function() {
                    console.log("Step 5");
                }, 1000);       
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

// Promise : to handle asynchronous operations in a more elegant way and to avoid callback hell
//  is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// 3 states : pending, fulfilled, rejected
// then : to handle the fulfilled state of a promise  
// catch : to handle the rejected state of a promise
// .then(fullfilledHandler, rejectedHandler) : to handle both fulfilled and rejected states of a promise

function sleep(timer){
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, timer);
    });
}

sleep(1000)
.then(function() {
    console.log("Step 1");
    return sleep(1000); 
})
.then(function() {
    console.log("Step 2");
    return sleep(1000);
})
.then(function() {
    console.log("Step 3");
    return sleep(1000);
})
.then(function() {
    console.log("Step 4");
    return sleep(1000);
})
.then(function() {
    console.log("Step 5");
})
.catch(function(error) {
    console.error(error);
});

// Promise All : to handle multiple promises at the same time and to wait for all of them to be fulfilled or rejected
// Promise.race : to handle multiple promises at the same time and to wait for the first one to be fulfilled or rejected
