

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    // getter method : to get the name of the person :
    // why do we don't define return type for getName method ?
    // because it is not necessary to define return type for a method in JavaScript,
    //  it will automatically return undefined if there is no return statement in the method.
    getName(){
        return this.name;
    }
    // setter method : to set the name of the person :
    setName(name){
        this.name = name;
    }
}
let person1 = new Person("Suzune", 20);
console.log(person1.getName()); // Suzune
person1.setName("HieuChu");
console.log(person1.getName()); // HieuChu

// Class expression : to create a class without a name :
let Person2 = class {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getName(){
        return this.name;
    }
}
let person2 = new Person2("Suzune2", 21);
console.log(person2.getName()); // Suzune2

// Class declaration : to create a class with a name :
class Person3 {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getName(){
        return this.name;
    }
}
let person3 = new Person3("Suzune3", 22);
console.log(person3.getName()); // Suzune3

// Super class : to create a class that inherits from another class :
class Student extends Person {
    constructor(name, age, grade){
        super(name, age); // to call the constructor of the parent class
        this.grade = grade;
    }
    getGrade(){
        return this.grade;
    }
}
let student1 = new Student("Suzune4", 23, "A");
console.log(student1.getName()); // Suzune4
console.log(student1.getGrade()); // A

