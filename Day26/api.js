
const endpoint = "https://jsonplaceholder.typicode.com/posts/1";

const promise = fetch(endpoint);

// error including : network error, server error, client error
promise.then( data => {
    console.log(data);
    // status promise now is peding ?
    // data.json() is also a promise, so we need to return it to the next then, why
    // because we need to wait for the data to be parsed before we can use it, 
    // if we don't return it, the next then will receive undefined
    // console.log("status promise now is peding ?", data.json()); // why is it peding ? because data.json() is a promise, it will be resolved after the data is parsed, so it is still peding at this point
    // return the parsed json so the next `then` receives it
    return data.json();
}).then((json) => {
    console.log( "Parsed JSON: ", json);
    console.log(json.title);
})
.catch( error => {
    console.error("loi me roi", error);
});