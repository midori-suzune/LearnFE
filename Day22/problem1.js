const title = document.querySelector('.main-title');
const content = document.querySelector('.drop-down-content');

function show() {
    content.classList.add('show');
}
function hide() {
    content.classList.remove('show');
}

// Keep dropdown open while hovering either the title or the dropdown
title.addEventListener('mouseenter', show);
content.addEventListener('mouseenter', show);
title.addEventListener('mouseleave', hide);
content.addEventListener('mouseleave', hide);



// Close when clicking outside
document.addEventListener('click', (e) => {
    if (!title.contains(e.target) && !content.contains(e.target)) {
        hide();
    }
});
title.addEventListener('mouseleave', ()=> {
    content.classList.remove('show');
});