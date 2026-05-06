// 2 . Slecting nodes ;
// 2.1  document.querySelector() : returns the first element that matches a specified CSS selector(s) in the document.
// selector: .header , #main , div , p , .container , etc 
const singleNode = document.querySelector("h1");
console.log(singleNode); // <h1>Hello, World!</h1>
const singleNode2 = document.querySelector(".container");
console.log(singleNode2);

// 2.2 document.querySelectorAll() : returns a static (not live) NodeList containing all elements that match a specified CSS selector(s) in the document.
// can be accessed by index and looped through, but does not have array methods like map, filter, etc.
const multipleNodes = document.querySelectorAll(".item");
console.log(multipleNodes);

// 2.3 document.getElementsByClassName(className) : returns a live HTMLCollection of elements with the given class name.
// className: item , header , container , etc
// HTML Collection: 
const divElements = document.getElementsByClassName("item");
console.log(divElements);

// 2.4 document.getElementsByTagName(tagName) : returns a live HTMLCollection of elements with the given tag name.
// tagName: div , p , h1 , span , etc
const pElements = document.getElementsByTagName("li");
console.log(pElements);

// 2.5 document.getElementById(id) : returns the element with the specified ID.
// id: main , header , container , etc
const mainElement = document.getElementById("spinner");
console.log(mainElement);

// 2.6 getAttributes() : returns a live collection of all attributes of the specified element.
// attributes: class , id , src , href , style , etc
const link = document.querySelector(".link");
console.log(link.getAttribute("href")); // https://www.example.com

const ul = document.querySelectorAll(".item"); // return nodeList of elements with class "item"
ul.forEach( item => {
     console.log(item.getAttribute("class")); // item
})

// 2.7 setAttribute() : sets the value of an attribute on the specified element.
//  If the attribute already exists, it will be updated with the new value.
// setAttribute(key, value) : name is the name of the attribute to set, and value is the value to assign to that attribute.
const setData = document.querySelector(".set-data"); // Hello World !!
setData.setAttribute("data-value", "Hello Suzune !!!");
console.log(setData.getAttribute("data-value")); // Hello Suzune !!!

// 2.8 removeAttribute() : removes the specified attribute from the element.
const removeData = document.querySelector(".remove-data"); // Hello World !!
removeData.removeAttribute("data-value");
console.log(removeData.getAttribute("data-value")); // null

// 2.9 hasAttribute() : returns a boolean indicating whether the specified element has the specified attribute.
const hasData = document.querySelector(".has-data"); // Hello World !!
console.log(hasData.hasAttribute("class")); // true
console.log(hasData.hasAttribute("id")); // false
 
// 2.10  textContent : returns the text content of the specified element and all its descendants.
const textContent = document.querySelector(".text-content"); // Hello World !!
console.log(textContent.textContent); // Hello World !!

const objTextContent2 = document.querySelector(".text-content-parent"); // A <div>B <span>C</span></div>
console.log(objTextContent2.textContent); // ABC

// 2.11 innerText : returns the visible text content of the specified element, excluding hidden elements and line breaks.
const objInnerText = document.querySelector(".inner-text"); // Hello World !!
console.log(objInnerText.innerText); // Hello World !!

// 2.12 innerHTML : returns the HTML content of the specified element as a string.
const objInnerHTML = document.querySelector(".inner-html"); // Hello Suzune !!
console.log(objInnerHTML.innerHTML); // Hello Suzune !!

// 
