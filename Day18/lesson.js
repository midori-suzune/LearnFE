// offsetWidth : take the width of the element, including padding and border, but not margin
// offsetHeight : take the height of the element, including padding and border, but not margin
// offsetLeft : take the distance from the left edge of the element to the left edge of its offsetParent
// offsetTop : take the distance from the top edge of the element to the top edge of its offsetParent
// clientWidth : take the width of the element , including padding but not border and margin
// clientHeight : take the height of the element , including padding but not border and margin
const box = document.querySelector('.boxed');
function logWidth() {
    console.log(box.offsetWidth);
    console.log(box.offsetHeight);
    console.log(box.offsetLeft);
    console.log(box.offsetTop);
    console.log(box.clientWidth);
    console.log(box.clientHeight);
}
logWidth();

// window.innerWidth : take the width of the viewport, including scrollbar
// window.innerHeight : take the height of the viewport, including scrollbar
function logViewport() {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
}
logViewport();

// selector.getBoundingClientRect() : return the size of an element and its position relative to the viewport
function logBoundingClientRect() {
    const rect = box.getBoundingClientRect();
    console.log(rect.width);
    console.log(rect.height);
    console.log(rect.left);
    console.log(rect.top);
}
logBoundingClientRect();

// Node and Element 
// Node : any type of node in the DOM, including elements, text nodes, comments, etc.
// Element : a type of node that represents an HTML element, such as <div>, <p>, etc.

