const click = document.querySelector('.submit .button');
const cover = document.querySelector('.cover');

click.addEventListener('click', (event) => {
    cover.classList.add('active');
    click.classList.add('inactive');
    event.stopPropagation();    
})
document.addEventListener('click', (event) => {
    if(event.target.classList.contains('cover')){
         cover.classList.remove('active');
         click.classList.remove('inactive');
    }
})

