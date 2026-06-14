function myReduce(array, callback, initialValue) {
    let result = initialValue;

    for (let i = 0; i < array.length; i++) {
        result = callback(result, array[i], i, array);
    }

    return result;
}

const numbers = [1, 2, 3, 4, 5];

const reduceResult = myReduce(numbers, (acc, current) => {
    return acc + current;
}, 0);

console.log("Câu 1:", reduceResult);


const products = [
    { id: 1, name: "iPhone 15", price: 25000000 },
    { id: 2, name: "Samsung S24", price: 22000000 },
    { id: 3, name: "Xiaomi 14", price: 18000000 }
];

const productList = document.getElementById("product-list");

if (productList) {
    const productHTML = products.map((product) => {
        return `
            <div class="product">
                <h3>${product.name}</h3>
                <p>${product.price} VNĐ</p>
            </div>
        `;
    });

    productList.innerHTML = productHTML.join("");
}


function createCounter() {
    let count = 0;

    return {
        increment: function () {
            count++;
            return count;
        }
    };
}

const counter = createCounter();

console.log("Câu 3.1:", counter.increment());
console.log("Câu 3.1:", counter.increment());
console.log("Câu 3.1:", counter.increment());


function createBankAccount(owner, initialBalance) {
    let balance = initialBalance;

    return {
        owner: owner,
        getBalance: function () {
            return balance;
        },
        deposit: function (amount) {
            if (amount > 0) {
                balance += amount;
            }

            return balance;
        }
    };
}

const account = createBankAccount("Ashley", 1000);

console.log("Câu 3.2:", account.getBalance());
account.deposit(500);
console.log("Câu 3.2:", account.getBalance());
console.log("Câu 3.2:", account.balance);
account.balance = 999999;
console.log("Câu 3.2:", account.getBalance());


const user = {
    name: "Ashley",

    sayHello: function () {
        console.log(`Hello ${this.name}`);
    }
};

user.sayHello();


const student1 = {
    name: "John",
    age: 20
};

const student2 = {
    major: "IT",
    university: "FPT"
};

const student = {
    ...student1,
    ...student2
};

console.log("Câu 5A:", student);

function sum(...numbers) {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    return total;
}

console.log("Câu 5B:", sum(1, 2, 3));
console.log("Câu 5B:", sum(10, 20, 30, 40));
