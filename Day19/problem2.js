const contentButton = document.querySelectorAll('.content-button button');
contentButton.forEach(element => {
    element.addEventListener('click', () => {
        
        element.classList.add('active');
    });
});

