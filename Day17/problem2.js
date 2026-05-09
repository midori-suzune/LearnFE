let title = "Hello Suzune";
function createNotification(title){

    const template = `<div class="noti">
        <img src="https://i.pinimg.com/736x/c0/d2/70/c0d2709541634f4a5fad210d5827c8ac.jpg" class="noti-image">
        <div class="noti-content">
            <h3 class="noti-title">${title}</h3>
            <p class="noti-desc">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod fuga vitae odit labore dolores qui mollitia ad voluptatibus excepturi! Ut officia commodi error possimus, inventore tempore optio voluptate vero aliquid.
            </p>
        </div>
    </div>    `; // Create a template string for the notification HTML structure
    document.body.insertAdjacentHTML("afterbegin", template);
}

const randomData = [
    "Xin chao",
    "Hello Suzune",
    "Welcome to the world of JavaScript",
    "Have a great day!",
    "Keep learning and coding!"
]

let index = 0;
setInterval(function(){
    const checkNoti = document.querySelector('.noti');
    if(checkNoti){
        // If the notification element exists, remove it from the DOM
        checkNoti.parentNode.removeChild(checkNoti);
    }
    createNotification(randomData[index]); 
    index++;
    if(index >= randomData.length){
        index = 0; // Reset the index to 0 if it exceeds the length of the randomData array
    }
},1000);


