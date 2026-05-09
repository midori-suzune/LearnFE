// selector.addEventListener(event, handler, options) : add an event listener to the element
const button = document.querySelector('.button');
const span = document.querySelector('.button .span');
// results : span clicked !!
//             button clicked !!
// bubbling : the event run from inner elements to outer elements
// capturing : the event run from outer elements to inner elements
    // button.addEventListener('click', () => {
    //     console.log('Button clicked');
    // });
// span.addEventListener('click',() => {
//     console.log('Span clicked !!');
// });

// event.stopPropagation() : stop the event from bubbling up to parent elements
    // span.addEventListener('click', (event) => {
    //     event.stopPropagation(); // Stop the event from bubbling up to parent elements
    //     console.log('Span clicked !!');
    // });

// target : the element that triggered the event
// currentTarget : the element that the event listener is attached to
button.addEventListener('click', (event) => {
    console.log('Button clicked !!');
    console.log('Event target:', event.target); // The element that triggered the event
    console.log('Event currentTarget:', event.currentTarget); // The element that the event listener is attached to
});

// event object : an object that is passed to the event handler function when an event is triggered
// event.type : the type of the event
// event.target.style.property = value : change the style of the element that triggered the event 
// and create style inline to the element
const link = document.querySelector('.link');

// link.addEventListener('click', (event) => {
//     console.log(event.target); // The element that triggered the event
//     console.log(event.target.style); // The style property of the element that triggered the event
//     event.target.style.color = 'red'; // Change the color of the element that triggered the event to red
// });

const link2 = document.querySelector('.link2');
link2.addEventListener('click', (event) => {
    // dataset : an object that contains all the data attributes of the element
    const name = event.target.dataset.name;  
    console.log(name); // Output: "Suzune"
});


