const icon = document.querySelectorAll('.text , .icon');
const content = document.querySelectorAll('.content');

icon.forEach(item => {
     item.addEventListener('click', (event) => {
        let index = Array.from(icon).indexOf(event.currentTarget);
        content[index].classList.toggle('active');
        // console.log(event.target);
     });
}) ;

