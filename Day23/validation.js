const form  = document.getElementById('myForm');

form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    // form.elements : HTMLFormControlsCollection
    // get data : form.element[0] or form.elements['fieldName']
    let password  = form.elements.password ;
    let confirm = form.elements.confirm ;
    console.log("Submit event" + password.value);
    console.log("Submit event" + confirm.value);

    confirm.setCustomValidity('');
    if(password.value !== confirm.value){
        // set message error this will exists unless removing manually 
        confirm.setCustomValidity('Password do not match');        
    }
    
    // most of validation html rule 
    if(!form.checkValidity()){
        // report to browser
        form.reportValidity();
        return; // stop callback function 
    }
    //  get form data by Object 
    const data = Object.fromEntries(new FormData(form));
    alert(JSON.stringify(data));
}); 
// input event : it occurs as its value changed 
form.addEventListener('input', (e) => {
    const pwd = form.elements.password ;
    const cf = form.elements.confirm ;
    console.log("Input event" + pwd.value);
    console.log("Inpur event" + cf.value);
    if(e.target.name === 'confirm' || e.target.name == 'password'){
        e.target.setCustomValidity('');
    }
});

const inputPassword = document.querySelector('input[name="password"]');
const togglePassword = document.getElementById("toggle-password");

togglePassword.addEventListener('click', (event) => {
    let currentState = inputPassword.type;
    inputPassword.type = currentState === "password" ? "text" : "password";
    togglePassword.classList.toggle('active');
});
