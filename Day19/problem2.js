const contentButton = document.querySelectorAll('.content-button button');
const contentText = document.querySelectorAll('.text-content');

// way 1
    // const handleTabClick = (event) => {
    //     contentButton.forEach(item => {
    //         item.classList.remove('active');
    //     });
    //     event.target.classList.add('active');
    //     contentText.forEach(item => item.classList.remove('active'));
    //     contentButton.forEach((item , key) => {        
    //         if(item.classList.contains('active')){
    //             contentText[key].classList.add('active');
    //         }
    //     });
    // }

    // contentButton.forEach(item => {
    //     item.addEventListener('click', handleTabClick);
    // });

//  optimize 
const handleTabClick2 = (event) => {
    // Convert NodeList to Array and find the index of the clicked button
    const index = Array.from(contentButton).indexOf(event.target);
    contentButton.forEach(item => item.classList.remove('active'));
    contentText.forEach(item => item.classList.remove('active'));
    event.target.classList.add('active') ;
    contentText[index].classList.add('active');
}
contentButton.forEach(item => {
    item.addEventListener('click', handleTabClick2);
});

