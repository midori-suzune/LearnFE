const form = document.getElementById('myForm');
form.addEventListener('submit', (e) => {
    e.preventDefault(); // stop reload page
    const formDataObj =  new FormData(form);    
    console.log(formDataObj);
    if(!form.checkValidity()){
         form.reportValidity();
         return ;
    }
    // convert to plain object 
    const plainObject = Object.fromEntries(formDataObj);
    // Json.stringif : convert a object or array of javascript to Json
    alert("Sent" + JSON.stringify(plainObject));
});