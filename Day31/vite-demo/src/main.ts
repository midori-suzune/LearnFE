import './style.css'

function greater(person : string){
  return "hello" + person;
}

let user  = "Jane user";
document.body.textContent = greater(user);