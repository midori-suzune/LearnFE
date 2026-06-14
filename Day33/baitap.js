
callBack = (previousValue, currentValue) => {
    return previousValue + currentValue;
};

function myReduce(arr, callBack, initialValue) {
    let result = initialValue;
    for (let i = initialValue; i < arr.length; i++) {
        result = callBack(result, arr[i]);
    }
    return result;
};
const arr = [1, 2, 3];
const kq = myReduce(arr, callBack, 0);
console.log(kq);



const products = [
    { id: 1, name: "iPhone 15", price: 25000000 },
    { id: 2, name: "Samsung S24", price: 22000000 },
    { id: 3, name: "Xiaomi 14", price: 18000000 }
];

products.map(item => {
    const div = document.createElement('div');
    const h3 = document.createElement('h3')
    const p = document.createElement('p');
    document.body.appendChild(div);
    div.appendChild(h3);
    div.appendChild(p);
    h3.textContent = item.name;
    p.textContent = item.price;
});

createCounter = () => {
    let cnt = 0;
    let result = {
        increament: () => {
            cnt++;
            return cnt;
        }
    };
    return result;
}
const counter = createCounter();
console.log(counter.increament());
console.log(counter.increament());
console.log(counter.increament());

function createBankAccount(owner1, initialBalance) {
    let balance = initialBalance ;
    var obj2 = {
        getBalance: () => {
            return balance;
        },
        deposit: (amount) => {
            balance += amount ;
        }
    };
    return obj2;
}

const account = createBankAccount('suzune', 1000);
console.log(account.getBalance());
console.log(account.balance);
account.deposit(500);
console.log(account.getBalance());



console.log(account.balance);

account.balance = 999999;

console.log(account.getBalance());


const student1 = {
    name: "John",
    age: 20
};

const student2 = {
    major: "IT",
    university: "FPT"
};

const newObj = {...student1 , ...student2};
console.log(newObj);

function sum(...numbers){
    let [num1 , ...rest ] = numbers ;
    return num1 + rest.reduce( (sum , item) => { return sum + item });
}

console.log(sum(1, 2, 3));
console.log(sum(10, 20, 30, 40));
