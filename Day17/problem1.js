/* Solution 1 : 
let addEvent = document.querySelector('.modal');
if(addEvent) {
    setTimeout(function() {
        addEvent.classList.add('is-show');
    }, 5000); // Add the class 'is-show' to the element with class 'modal' after 5 seconds
}
*/

// Solution 2 : 

/* const template = ` <div class="modal">
        <div class="modal-content">
            <i class="fa fa-times modal-close"></i>
            <div class="modal-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cumque expedita neque enim, perferendis quia ipsa vero, temporibus voluptates provident pariatur quasi quas ex tenetur consectetur voluptas dolorum amet tempora!
            </div>
            <div class="modal-action">
                <button class="modal-submit">Confirm</button>
                <button class="modal-cancel">Cancel</button>
            </div>
        </div>
    </div>`; // Create a template string for the modal HTML structure` ;

let body = document.body; // Get the <body> element
body.insertAdjacentHTML('beforeend', template); // Insert the modal template at the end of the <body>
const modal = document.querySelector('.modal'); // Select the modal element
setTimeout(function() {
    modal.classList.add('is-show'); // Add the class 'is-show' to the modal element after 5 seconds
}, 5000);
*/
const modal = document.createElement('div'); // Create a new <div> element for the modal
modal.classList.add('modal'); // Add the class 'modal' to the new <div> element
const modalContent = document.createElement('div'); // Create a new <div> element for the modal content
modalContent.classList.add('modal-content'); // Add the class 'modal-content' to the modal content element
modal.appendChild(modalContent); // Append the modal content element to the modal element

const modalClose = document.createElement('i'); // Create a new <i> element for the modal close button
modalClose.classList.add('fa', 'fa-times', 'modal-close');
modalContent.appendChild(modalClose); // Append the modal close button to the modal content
document.body.appendChild(modal); // Append the modal element to the <body>

const modalDesc = document.createElement('div'); // Create a new <div> element for the modal description
modalDesc.classList.add('modal-desc');
modalDesc.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque cumque expedita neque enim, perferendis quia ipsa vero, temporibus voluptates provident pariatur quasi quas ex tenetur consectetur voluptas dolorum amet tempora!'; // Set the text content of the modal description
modalContent.appendChild(modalDesc); // Append the modal description to the modal content

const modalAction = document.createElement('div'); // Create a new <div> element for the modal action buttons
modalAction.classList.add('modal-action');
modalContent.appendChild(modalAction); // Append the modal action element to the modal content

const modalSubmit = document.createElement('button');
modalSubmit.classList.add('modal-submit'); // Add the class 'modal-submit' to the submit button
modalSubmit.textContent = 'Confirm';
modalAction.appendChild(modalSubmit); // Append the submit button to the modal action element

const modalCancel = document.createElement('button');
modalCancel.classList.add('modal-cancel');
modalCancel.textContent = 'Cancel';
modalAction.appendChild(modalCancel); // Append the cancel button to the modal action element

setTimeout(function() {
    modal.classList.add('is-show'); // Add the class 'is-show' to the modal element after 5 seconds
}, 1000);


