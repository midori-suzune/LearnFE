const button = document.querySelector('.counter') ;
const buttonMinus = document.querySelector('.counter-decrease');
const buttonPlus = document.querySelector('.counter-increase');
const number = document.querySelector('.counter-number');

// optimize code : use a single event listener for both buttons then check which button is clicked using event.target
button.addEventListener('click', (event) => {
    let currentValue = number.textContent ;
    if(event.target.classList.contains('counter-decrease') && currentValue > 0) {
        number.textContent = parseInt(currentValue) - 1 ;
    } else if(event.target.classList.contains('counter-increase')) {
        number.textContent = parseInt(currentValue) + 1 ;
    }
});


// let isMunus = false;
// buttonMinus.addEventListener('click', () => {
//     let currentValue = number.textContent ;
//     if(currentValue > 0 ){
//         number.textContent = parseInt(currentValue) - 1 ;
//         isMunus = true ;
//     }    
// });

// let isPlus = false ;
// buttonPlus.addEventListener('click', () => {
//     let currentValue = number.textContent ;
//         number.textContent = parseInt(currentValue) + 1 ;
//         isPlus = true ;
// })
