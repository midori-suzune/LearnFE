const button = document.querySelector('.change');

const arrayColor = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
let index = 0 ; 
changeColor = () =>  {
    if(index >= arrayColor.length) {
        index = 0;
    }
    document.body.style.backgroundColor = arrayColor[index];
    index++;    
}
button.addEventListener('click', () => {
    changeColor();    
});

