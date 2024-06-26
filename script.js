let str = "prabhat";

console.log(str[4]);


/// ----------------- templete literals ---------------------------------------//

let string = `this is prabhat and is price is $(1+2+3)`;

console.log(string);


// ------------------------ template literals------------------------ /////
// Basic string interpolation
const name = 'John';
const age = 30;
console.log(`My name is ${name} and I'm ${age} years old.`);
// Output: My name is John and I'm 30 years old.

// Multiline strings
const multilineString = `This is
a multiline
string`;
console.log(multilineString);
/*
Output:
This is
a multiline
string
*/

// Expression interpolation
const x = 10;
const y = 20;
console.log(`The sum of ${x} and ${y} is ${x + y}.`);
// Output: The sum of 10 and 20 is 30.

// Tagged templates
function highlight(strings, ...values) {
  let str = '';
  strings.forEach((string, i) => {
    str += string + (values[i] ? `<b>${values[i]}</b>` : '');
  });
  return str;
}

const name2 = 'Alice';
const age2 = 25;
console.log(highlight`My name is ${name2} and I'm ${age2} years old.`);
// Output: My name is <b>Alice</b> and I'm <b>25</b> years old.

// --------------------- Escape characters --------------------//

console.log('This is\na new line'); // Output: This is
                                 //         a new line


// ------------------------ String Methods --------------------//


// String length
const str1 = "Hello, World!";
console.log("Length of the string:", str1.length); // Output: Length of the string: 13

// Character at index
console.log("Character at index 0:", str.charAt(0)); // Output: Character at index 0: H

// Index of a substring
console.log("Index of 'World':", str.indexOf("World")); // Output: Index of 'World': 7

// Replacing a substring
const newStr = str.replace("World", "Universe");
console.log("Replaced string:", newStr); // Output: Replaced string: Hello, Universe!

// Splitting a string
const words = str.split(",");
console.log("Words array:", words); // Output: Words array: ["Hello", " World!"]

// Converting to uppercase
console.log("Uppercase string:", str.toUpperCase()); // Output: Uppercase string: HELLO, WORLD!

// Trimming whitespace
const trimmedStr = "   Hello, World!   ".trim();
console.log("Trimmed string:", trimmedStr); // Output: Trimmed string: Hello, World!

// Repeating a string
console.log("Repeated string:", "Hello, ".repeat(3)); // Output: Repeated string: Hello, Hello, Hello, 

// Padding a string
console.log("Padded string (start):", "Hello".padStart(10, "*")); // Output: Padded string (start): *****Hello
console.log("Padded string (end):", "Hello".padEnd(10, "*")); // Output: Padded string (end): Hello*****


// -------------------------   practise question ---------------------------///

let naam = prompt("Enter your fullname");
    console.log("@" + naam + naam.length);


// ---------------------------- Arrays in javasript ------------------------------------------

// ---------------------------------Creating an Array
// Array literal
const fruits = ['apple', 'banana', 'orange'];

// Array constructor
const numbers = new Array(1, 2, 3, 4, 5);


// ----------------------------------Accessing Array Elements

const fruit = ['apple', 'banana', 'orange'];


console.log(fruit[0]); // Output: 'apple'
console.log(fruit[2]); // Output: 'orange'

console.log(fruit.length);


// -------------------------------Arrays Methods --------------------------------------

const Fruits = ['apple', 'banana', 'orange'];

// push() - Add an element to the end of the array
fruits.push('grape');
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape']

// pop() - Remove the last element from the array
const lastFruit = fruits.pop();
console.log(fruits); // Output: ['apple', 'banana', 'orange']
console.log(lastFruit); // Output: 'grape'

// unshift() - Add an element to the beginning of the array
fruits.unshift('kiwi');
console.log(fruits); // Output: ['kiwi', 'apple', 'banana', 'orange']

// shift() - Remove the first element from the array
const firstFruit = fruits.shift();
console.log(fruits); // Output: ['apple', 'banana', 'orange']
console.log(firstFruit); // Output: 'kiwi'

// concat() - Merge two or more arrays
const vegetables = ['carrot', 'broccoli'];
const produce = fruits.concat(vegetables);
console.log(produce); // Output: ['apple', 'banana', 'orange', 'carrot', 'broccoli']

// slice() - Extract a section of an array
const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // Output: ['banana', 'orange']

// indexOf() - Find the index of an element in the array
const index = fruits.indexOf('banana');
console.log(index); // Output: 1

// includes() - Check if an array contains a certain element
const hasBanana = fruits.includes('banana');
console.log(hasBanana); // Output: true

// toStringsMethods

const st = Fruits.toString();
console.log(st);

//splice()
let kl = [1,2,3,4,5];
// kl.splice(2,2,101,102);
// kl.splice(2,0,101)
  kl.splice(3,1);
console.log(kl);


// ------------------------ iterating over arrays-----------------

const phal = ['apple', 'banana', 'orange'];

// for loop
for (let i = 0; i < phal.length; i++) {
  console.log(phal[i]);
}

// for...of loop
for (const fruit of phal) {
  console.log(phal);
}

// forEach() method
fruits.forEach(function(phal) {
  console.log(phal);
});


//--------------------- Practise Questions -----------------------//

let average = [85,97,44,37,76,60];

let sum=0;
let total = average.length;
for (let index = 0; index < average.length; index++) {
    sum = sum + average[index];
    }
    console.log(sum/total);


/// ------------------  Practise Question 2 ----------------//

let price = [250,645,300,900,50];
for (let index = 0; index < price.length; index++) {
    let discout = (price[index]/100) * 10;
    price[index] = price[index] - discout;
    console.log(price[index])
    
}
console.log(price);

    
// -----------------   practise question 3---------------//

let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];

companies.shift();
console.log(companies);

companies.splice(2,1,"ola");
console.log(companies);

companies.push("amazon");
console.log(companies);

// ----------------------- Functions in javascript --------------------


// Function declaration
function greet(name) {
  console.log(`Hello, ${name}!`);
}

// Calling the function
greet('John'); // Output: Hello, John!


// Function expression
const square = function(num) {
    return num * num;
  };
  
  console.log(square(5)); // Output: 25


// Arrow function (single parameter)
const double = num => num * 2;
console.log(double(4)); // Output: 8

// Arrow function (multiple parameters)
const sume = (a, b) => a + b;
console.log(sume(2, 3)); // Output: 5

// Arrow function (block body)
const multiply = (a, b) => {
  const result = a * b;
  return result;
};
console.log(multiply(3, 4)); // Output: 12


//  Default Parameters

function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`);
}

greet('John'); // Output: Hello, John!
greet(); // Output: Hello, Guest!

//  Rest parameters

/* function sum(...numbers) {
    let total = 0;
    for (const num of numbers) {
      total += num;
    }
    return total;
  }
  
  console.log(sum(1, 2, 3)); // Output: 6
  console.log(sum(4, 5, 6, 7, 8)); // Output: 30
  

 //   Callback Functions

function greet(name, callback) {
  const message = `Hello, ${name}!`;
  callback(message);
}

// Callback function
function displayMessage(message) {
  console.log(message);
}

greet('John', displayMessage); // Output: Hello, John!
*/


//   ==>> Closures

function outerFunction(outerVar) {
  return function innerFunction(innerVar) {
    console.log(`Outer variable: ${outerVar}, Inner variable: ${innerVar}`);
  };
}

const inner = outerFunction('Hello');
inner('World'); // Output: Outer variable: Hello, Inner variable: World

// ------------------------- practise question---------------------//

function vowels(Str){
    for (let i = 0; i < Str.length; i++) {
          if(str[i]==="a" || str[i]==="e" || str[i]==="i" ||str[i]==="o" ||str[i]==="u" ){
            console.log(str[i]);
          }
        
    }
}

vowels("aeroplane");


// -------------------------- for each -------------------------------//

let arr = [1,2,3,4,5];

arr.forEach(function printval(val){
    console.log(val);
});

// ---- for each isa higher order function -------------//

let arr1 = [2,3,4,5,6];

arr1.forEach(function printsquare(val){
   console.log(val*val);
});


//------------------ array methods -------------------------//


// map method  => used to store array into new array;----//
let no =[1,2,3,4,5,6];

let noplay = no.map((val) => {
  return val *2;
});

console.log(noplay);


// filter method 

let filters = no.filter((val)=>{
    return val%2===0;
});

console.log(filters);

//reduce method 

const output = no.reduce((res,cur)=>{
    return res + cur;
});
console.log(output);

//----------------------practise questions----------------//

let marks = [89,94,93,67,75];

let filter = marks.filter((val)=>{
  return val>90;
});
console.log(filter);


//----------------------------------Dom manipulation------------------------//

/*let heading = document.getElementById("heading");
console.dir(heading);
console.log(heading);
*/

let heading = document.getElementsByClassName("heading-class");
console.dir(heading);
console.log(heading);


let parah = document.getElementsByTagName("p")
console.dir(parah);
console.log(parah);


/// --------------------Query selector-------------//

let firstel = document.querySelector("p");
console.dir(firstel);
// console.log(first);

/* 
let allsel = document.querySelectorAll("p");
console.dir(allsel);
console.log(allsel);
*/

let button1 = document.getElementsByClassName("button1");
console.dir(button1);