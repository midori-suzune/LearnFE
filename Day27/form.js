

let addPost = async (title, author) => {
    let response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(
            { title, author }
        ),
    })
    let data = await response.json();
    return data;
};

const form = document.querySelector(".form-post");
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("submitting form...");
    const title = form.title.value;
    const author = form.author.value;
    const post = await addPost(title, author);
    console.log(post);
});

