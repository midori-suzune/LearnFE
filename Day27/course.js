const endpoint = "http://localhost:3000/courses";

const getCourses = async (course) => {
    try{
        const response = await fetch(endpoint, {
            // format header
            method : "POST",
            headers : {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
          body : JSON.stringify(course),
        });
        const data = await response.json();
        return data ;
    }catch(error){
        console.log("Error\n",error);
    }
};

const form = document.querySelector('.form-post');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const course = {
        title: form.title.value.trim(),
        image: form.image.value,
        price: Number(form.price.value) || 0,
        bestSeller: form.bestSeller.checked, // checkbox value is checked or not
        buyAmount: form.buyAmount.value,
        rating: form.rating.value,
        author: form.author.value.trim(),
    };
    // destructuring
    const { title, image, price, bestSeller, buyAmount, rating, author } = course;

    const data = await getCourses(course);
    console.log(title, price, author);
});