


const input = document.querySelector('input');

input.addEventListener('focus', (event) => {
    input.style.borderColor = '#667eea';
});
input.addEventListener('blur',() => {
    input.style.borderColor = '';
});