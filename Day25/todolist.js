
class Model {
    constructor() {
        this.tasks = [];
        this.spans = []; 
    }
    addTask(task) {
        // push : to add an element to the end of an array
        this.tasks.push(task);
    }
    addSpan(span){
        this.spans.push(span) ;       
    }
}

class View {
    constructor() { 
        this.input = document.querySelector('.todo-input');
        this.button = document.querySelector('.todo-submit');
        this.list = document.querySelector('.todo-list');
        this.form = document.querySelector('.todo-form');
    }
    showTask(tasks, model) {
        this.list.innerHTML = '';
        tasks.forEach( (task , index) => {
            const specifiedTask = document.createElement('div');
            specifiedTask.classList.add('current-task');
            const item = document.createElement('div');
            item.classList.add('content');
            const deleteBtn = document.createElement('span');
            deleteBtn.textContent = 'X';
            model.addSpan(deleteBtn);
            item.textContent = task ;
            // appendChild : to add a child node to the end of the list of children of a specified parent node
            specifiedTask.appendChild(item);
            

            // remove task 
            deleteBtn.addEventListener('click', () => {
                specifiedTask.remove();
                model.tasks.splice(index, 1);
            });

            specifiedTask.appendChild(deleteBtn) ;       
            this.list.appendChild(specifiedTask); // or this.list.append(item)
        });
    }
}

class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.button.addEventListener('click', () => {
            this.model.addTask(this.view.input.value);
            this.view.showTask(this.model.tasks, this.model);
            this.view.input.value = '';
        });
        this.view.form.addEventListener('submit', (e) => {
            // preventDefault : to prevent the default behavior of the form submission : which is to reload the page
            e.preventDefault();
            // trim : to remove whitespace from both ends of a string
            const value = this.view.input.value.trim();
            // if(!value) return ; : to prevent adding empty tasks to the list
            if(!value) return ;
            this.model.addTask(value);
            this.view.showTask(this.model.tasks);
            // clear the input field after adding a task
            this.view.input.value = '';
        });
    
    }
    
}
const app = new Controller(new Model(), new View());

