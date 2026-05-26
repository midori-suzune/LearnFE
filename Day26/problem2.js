
const jokeHeading = document.querySelector('.joke-heading');
const jokeButton = document.querySelector('.joke-button');
const divJoke = document.querySelector('.joke');
const endpoint = "https://icanhazdadjoke.com";
getJoke = async () => {
    try{
        const response = await fetch(endpoint, {
            // format header
            headers : {
                Accept: "application/json",
            }
        });
        const data = await response.json();
        return data ;
    }catch(error){
        console.log("Error\n",error);
    }
};


hanleClick = async () => {
    const data = await getJoke();
    return data ;
}

jokeButton.addEventListener('click', () => {
    const loading = document.createElement('div');
    loading.textContent = "loading...";
    loading.style.textAlign = "center";
    loading.style.marginTop = "5px";
    const check = "";
    setTimeout( async () => {
        const title = await getJoke();
        jokeHeading.textContent = title.joke;
        loading.remove();
    }, 3000);
    divJoke.insertAdjacentElement("afterend", loading);
});
