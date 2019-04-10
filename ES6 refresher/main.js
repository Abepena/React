// CONST & LET
// let name = "John";
// name = "Jack";
// console.log(name);

// const person = {
//   name: "John",
//   age: 33
// };

// person.name = "Jack";
// console.log(person);

// const nums = [1, 2, 3, 4];
// nums.push(5);
// console.log(nums);
// Can set any non-native data-type to const and still manipulate it

//ARROW FUNCTIONS
// Befor
// function sayHello(){
//     console.log("hello")
// };

const sayHello = name => console.log(`Hello ${name}`);
sayHello("Abe");

//FOREACH uses each item of a specific array to do something
const fruits = ["apples", "oranges", "grapes"];
fruits.forEach((fruit, index) => console.log(fruit));

//MAP creates a new array
const singleFruit = fruits.map(fruit => fruit.slice(0, -1).toUpperCase());
console.log(singleFruit);

//FILTER returns an array with things filtered out
const people = [
  { id: 1, name: "Karen" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Sharon" }
];

const people2 = people.filter(person => person.id !== 2);
console.log(people2);

//SPREAD

const arr = [1, 2, 3];
const arr2 = [...arr, 4]; //similar to .extend in python
const arr3 = [...arr.filter(num => num !== 2)]; // filter(item => condition)

console.log(arr2);

// const person1 = {
//   name: "Brad",
//   age: 36
// };

// const person2 = {
//   ...person1,
//   email: "example@gmail.com"
// };

// console.log(person2);

//DESTRUCTURING

const profile = {
  name: "John Doe",
  address: {
    street: "40 Main street",
    city: "Boston"
  },
  hobbies: ["movies", "music"]
};

const { name, address, hobbies } = profile; // Pulls the name from profile object
const { street, city } = address;

console.log(name);
console.log(street, city);
console.log(hobbies[0]);

// CLASSES
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age}`;
  }
}

const person1 = new Person("Abe", 26);
const person2 = new Person("Krystina", 27);

console.log(person1.greet());
console.log(person2.greet());

// SUBCLASSES extending core classes
class Customer extends Person {
  constructor(name, age, balance) {
    super(name, age);
    this.balance = balance;
  }

  info() {
    return `${this.name} owes $${this.balance}.00`;
  }
}

const customer = new Customer("Kevin", 32, 300);
console.log(customer.info());

//MODULES
// webpack - module bundler
// babel - compiles es6 to browser compatible code (modules cant be used without babel)
// react uses webpack and babel

// //file 1 (file1.js)
// export const name = 'Jeff';
// export const nums = [1,2,3];
// export default Person;

// //file2 (file2.js)
// import Person from './file1'; //default doesnt need braces
// import { name } from './file1';
// console.log(name) // Jeff from different file