const prompt = require("prompt-sync")();


function greet(name) {
    console.log("hello " + name + ".");
}
greet('dhruvi');

function add(a, b) {
    console.log(a + b);
}
add(4, 6);

function addition(a, b) {
    return a + b;
}
let num1 = parseInt(prompt("Enter first number: "));
let num2 = parseInt(prompt("Enter a second number: "));

let result = addition(num1, num2);
console.log("sum is" + result);

//function define as a expression
let x = function (num) {
    return num * num;
}
console.log(x(4));

let y = x(2);
console.log(y);

//global scope variable

a = "hello";

function globalscope() {
    a = 4;
    let b = 10;
}

console.log(a);
//console.log(b);//error
globalscope();
console.log(a);

function countDown(number) {
    console.log(number);

    const newNumber = number - 1;

    if (newNumber > 0) {
        countDown(newNumber);
    }
}
countDown(4);

let age = 5;
let welcome = (age > 18) ? () => console.log("baby") : console.log("Adult");
//welcome();

//nested function 

console.log("Nested Function : ")
function greetname(name) {

    // inner function
    function displayName() {
        console.log('Hii' + ' ' + name);
    }

    // calling inner function
    displayName();
}
greetname('dhruvi')

//return function

console.log("Return function -> ")
function greetreturn(name) {
    function displayName() {
        console.log('Hi' + ' ' + name);
    }

    // returning a function
    return displayName;
}

const g1 = greetreturn('John');
console.log(g1); // returns the function definition
g1(); // calling the function
//console.log(g1());

//javascript Closure :: provides access to the outer scope of a function from inside the inner function

console.log("Closure --> ")

function greet() {
    let name = 'Dhruvi';

    function displayName() {
        return 'hello ' + name;
    }
    return displayName;
}

const cl1 = greet();
console.log(cl1);
console.log(cl1());

function calculate(x) {
    function mul(y) {
        return x * y;
    }
    return mul;
}

const multiply1 = calculate(3);
const multiply2 = calculate(7);

console.log(multiply1);
console.log(multiply1(4));

console.log(multiply2(2));