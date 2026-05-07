// 1. Selector.classList.add() - add a or more class to the element
//  classList.remove() - remove a or more class from the element
// classList.contains() - check if the element has a specific class

const element = document.querySelector('.my-element'); 
element.classList.add('is-active'); // Add a single class

//  classList.toggle() - toggle a class on or off the element
// if the element has the class, it will be removed. If it doesn't have the class, it will be added.
element.classList.toggle('is-active'); // Toggle the class 'is-active' on the element 

// selector.classname : return a string of all the classes of the element
const title = document.querySelector('.title');
console.log(title.className); // Output: "title heading abc"

// CRUD in JavaScript
// Create: createElement(), appendChild(), insertAdjacentHTML()
// Read: querySelector(), getElementById(), getElementsByClassName()
// Update: textContent, innerHTML, classList
// Delete: removeChild(), remove()

const newElement = document.createElement('div'); // Create a new <div> element
const body = document.querySelector('body'); // Select the <body> element
body.appendChild(newElement); // Append the new <div> element to the <body>
newElement.textContent = 'This is a new element'; // Set the text content of the new element


//  document.createTextNode() - create a text node
const textNode = document.createTextNode('This is a text node'); // Create a new text node
newElement.appendChild(textNode); // Append the text node to the new element

// cloneNode() - clone an element
// true : clone the element and all its children and false : clone only the element without its children
const clonedElement = newElement.cloneNode(true); // Clone the new element and its children
body.appendChild(clonedElement); // Append the cloned element to the <body>

// hasChildNodes() - check if the element has child nodes
if (newElement.hasChildNodes()) {
    console.log('The new element has child nodes');
} else {
    console.log('The new element does not have child nodes');
}

// insertAdjacentText() - insert text at a specific position relative to the element

const h3 = document.querySelector('h3');
// 'beforebegin' : before the element
// 'afterbegin' : inside the element, before the first child
// 'beforeend' : inside the element, after the last child
// 'afterend' : after the element
h3.insertAdjacentText('beforebegin', 'Before the heading'); // Insert text before the <h3> element
h3.insertAdjacentText('afterbegin', 'After the heading'); // Insert text inside the <h3> element, before the first child
h3.insertAdjacentText('beforeend', 'Before the end of the heading'); // Insert text inside the <h3> element, after the last child
h3.insertAdjacentText('afterend', 'After the heading'); // Insert text after the <h3> element               

// insertAdjacentElement() - insert an element at a specific position relative to the element
const newParagraph = document.createElement('p'); // Create a new <p> element
newParagraph.textContent = 'This is a new paragraph'; // Set the text content of the new paragraph
h3.insertAdjacentElement('afterend', newParagraph); // Insert the new paragraph after the <h3> element

// insertAdjacentHTML() - insert HTML at a specific position relative to the element
h3.insertAdjacentHTML('afterend', '<span>This is a new paragraph inserted with HTML</span>'); // Insert a new paragraph after the <h3> element using HTML 

// traversing between elements in the DOM
const list = document.querySelector('ul'); // Select the <ul> element
const parent = list.parentElement; // Get the parent element of the <ul>
console.log(parent.tagName); // Output: "BODY"

const firstItem = list.firstElementChild; // Get the first child element of the <ul>
console.log(firstItem.textContent); // Output: "First item"

const lastItem = list.lastElementChild; // Get the last child element of the <ul>
console.log(lastItem.textContent); // Output: "Third item"


let x = list.children; // Get all child elements of the <ul> as an HTMLCollection
console.log(x); // Output: HTMLCollection(3) [li, li, li]

let x1 = list.firstChild; // Get the first child node of the <ul> (could be a text node)
console.log(x1); // Output: #text (if there is whitespace before the first <li>)