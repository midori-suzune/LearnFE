const endpoint = "http://localhost:8080/users";
const userList = new Array();
const fetchAllUsers = async () => {
    try {
        const response = await fetch(endpoint + "/getAll");
        if (!response.ok) {
            throw new Error(`Request failed: ${response.status}`);
        }
        const body = await response.json();
        userList.length = 0;
        body.forEach(item => {
            const users = {
                name: item.userName,
                email: item.email,
                password: item.password,
                fullName: item.fullName,
                age: item.age
            };
            userList.push(users);
        });
        const table = document.getElementById('table-body');
        table.innerHTML = '';
        userList.forEach(item => {
            const row = document.createElement('tr');
            const cellData = [item.name, item.email, item.password, item.fullName, item.age];
            cellData.forEach(data => {
                const cell = document.createElement('td');
                cell.textContent = data;
                row.appendChild(cell);
            });
            table.appendChild(row);
        });
    } catch (error) {
        console.error("Fetch user failed", error);
    }
}

fetchAllUsers();


const form = document.querySelector('.form-post');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const user = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        fullName: document.getElementById('fullname').value,
        age: Number(document.getElementById('age').value),
    };
    try{
        const res = await fetch(endpoint + "/create", {
            method : "post",
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(user)
        });
        if(!res.ok){
            throw new Error(`Create failed: ${res.status}`);
        }
        await fetchAllUsers();
        form.reset();
    }catch(err){
        console.log(err);
    }
});


