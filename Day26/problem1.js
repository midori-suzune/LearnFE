const endpoint = "https://jsonplaceholder.typicode.com/posts";
// using promise 
displayData = (userID) => {{
    const promise = fetch(`${endpoint}/${userID}`);
    promise.then( data => {
        return data.json();
    }).then((json) => {
        console.log( "Parsed JSON: ", json);
        console.log(json.title);
    })
    .catch( error => {
        console.error("loi me roi", error);
    }); 
}};

displayData(12);

// using async await
displayDataAsync = async (userID) => {
    try {
        const response = await fetch(`${endpoint}/${userID}`);
        const data = await response.json();
        console.log( "Parsed JSON: ", data);
        console.log(data.title);
    } catch (error) {
        console.error("loi me roi", error);
    }
};
displayDataAsync(12);