# JavaScript Test (5 câu)

**Thời gian:** 60 phút
**Yêu cầu:** Không sử dụng thư viện ngoài. Code bằng JavaScript ES6+.

---

## Câu 1 (2 điểm) – Viết lại logic của `reduce()`

Hãy tự xây dựng một hàm tên `myReduce()` hoạt động tương tự phương thức `Array.prototype.reduce()`.

### Input mẫu

```javascript
const numbers = [1, 2, 3, 4, 5];

const result = myReduce(numbers, (acc, current) => {
    return acc + current;
}, 0);

console.log(result);
```

### Output mong đợi

```javascript
15
```

### Yêu cầu

* Không được sử dụng `.reduce()`.
* Hàm phải nhận:

  * Array
  * Callback function
  * Initial value
* Trả về kết quả cuối cùng giống reduce.

---

## Câu 2 (2 điểm) – Sử dụng `map()` để hiển thị dữ liệu lên giao diện

Cho dữ liệu sau:

```javascript
const products = [
    { id: 1, name: "iPhone 15", price: 25000000 },
    { id: 2, name: "Samsung S24", price: 22000000 },
    { id: 3, name: "Xiaomi 14", price: 18000000 }
];
```

HTML:

```html
<div id="product-list"></div>
```

### Yêu cầu

Sử dụng `map()` để render danh sách sản phẩm vào giao diện với cấu trúc:

```html
<div class="product">
    <h3>iPhone 15</h3>
    <p>25000000 VNĐ</p>
</div>
```

### Kết quả mong muốn

Hiển thị đầy đủ 3 sản phẩm bên trong `#product-list`.

---

## Câu 3.1 (1 điểm) – Áp dụng Closure

Viết hàm `createCounter()`.

### Yêu cầu

* Mỗi lần gọi `increment()` sẽ tăng giá trị lên 1.
* Giá trị đếm phải được lưu bằng Closure.

### Ví dụ

```javascript
const counter = createCounter();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.increment()); // 3
```

### Output

```javascript
1
2
3
```


## Câu 3.2 (1 điểm) – Áp dụng Closure để đóng gói dữ liệu (Data Encapsulation)

Trong JavaScript, Closure có thể được sử dụng để mô phỏng tính **đóng gói (Encapsulation)** giống như trong OOP.

### Yêu cầu

Viết hàm `createBankAccount(owner, initialBalance)`.

### Quy tắc

* `balance` phải là biến private.
* Bên ngoài không được phép truy cập trực tiếp hoặc sửa giá trị `balance`.
* Chỉ cho phép:

  * Xem số dư bằng hàm `getBalance()`.
  * Nạp tiền bằng hàm `deposit(amount)`.
* Không cung cấp bất kỳ hàm nào cho phép set trực tiếp balance.

### Ví dụ

```javascript
const account = createBankAccount("Ashley", 1000);

console.log(account.getBalance());
```

### Output

```javascript
1000
```

Nạp thêm tiền:

```javascript
account.deposit(500);

console.log(account.getBalance());
```

### Output

```javascript
1500
```

### Trường hợp truy cập trực tiếp

```javascript
console.log(account.balance);

account.balance = 999999;

console.log(account.getBalance());
```

### Output mong đợi

```javascript
undefined
1500
```

### Yêu cầu đánh giá

* Sử dụng Closure để tạo biến private.
* Không được dùng Class.
* Dữ liệu phải được bảo vệ khỏi việc sửa trực tiếp từ bên ngoài.
* Chỉ thao tác thông qua các method được trả về.

---

## Câu 4 (2 điểm) – Sửa lỗi `this` với Arrow Function

Đoạn code sau đang bị lỗi:

```javascript
const user = {
    name: "Ashley",

    sayHello: () => {
        console.log(`Hello ${this.name}`);
    }
};

user.sayHello();
```

### Yêu cầu

1. Giải thích tại sao code không hoạt động như mong đợi.
2. Sửa lại để kết quả hiển thị:

```javascript
Hello Ashley
```

---

## Câu 5 (2 điểm) – Áp dụng ES6 Rest và Spread

Cho dữ liệu:

```javascript
const student1 = {
    name: "John",
    age: 20
};

const student2 = {
    major: "IT",
    university: "FPT"
};
```

### Yêu cầu

### Phần A

Sử dụng **Spread Operator** để tạo object mới:

```javascript
{
    name: "John",
    age: 20,
    major: "IT",
    university: "FPT"
}
```

### Phần B

Viết hàm:

```javascript
sum(...)
```

Sử dụng **Rest Parameter** để tính tổng tất cả các số truyền vào.

### Ví dụ

```javascript
console.log(sum(1, 2, 3));
console.log(sum(10, 20, 30, 40));
```

### Output

```javascript
6
100
```

---