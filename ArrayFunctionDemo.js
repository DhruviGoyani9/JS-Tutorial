let FirstArray = [10, 80, 30, 245];
let secondArray = [40, 50, 60];

console.log("length() ---> " + FirstArray.length);

console.log("concat() ---> " + FirstArray.concat(secondArray));
console.log("indexOf() ---> " + FirstArray.indexOf(20));

findarray = FirstArray.find(function (value, index) {
    return value >= 10;
})
console.log("Find Array ---> " + findarray);

findIndexArray = FirstArray.findIndex(function (value, index) {
    return value >= 10;
});
console.log("FIndIndex() ---> " + findIndexArray);

console.log("ForEach ---> ")
FirstArray.forEach(element => {
    console.log(element);
});

console.log("includes() ---> " + FirstArray.includes(20));

console.log("push() ---> " + FirstArray.push(100));
console.log(FirstArray);

console.log("unShift() ---> " + FirstArray.unshift(200));
console.log(FirstArray);

console.log("pop() ---> " + FirstArray.pop());
console.log(FirstArray);

console.log("shift() ---> " + FirstArray.shift());
console.log(FirstArray);

console.log("sort() ---> " + FirstArray.sort());
// var names = ["Adam", "Jeffrey", "Fabiano", "Danil", "Ben"];

// function len_compare(a, b){
//     return a.length - b.length;
// }
// names.sort(len_compare);

// console.log(names);

let reverseArray = [...FirstArray].reverse();
console.log("reverse() ---> " + reverseArray);

console.log("slice() ---> " + FirstArray.slice(1, 3));
console.log("splice() ---> " + FirstArray.splice(2, 1, 200, 300, 400, 600));
console.log(FirstArray);

console.log(FirstArray.fill(200, 1, 3));

function findAllIndex(array, element) {
    indices = [];
    var currentIndex = array.indexOf(element);
    while (currentIndex != -1) {
        indices.push(currentIndex);
        currentIndex = array.indexOf(element, currentIndex + 1);
    }
    return indices;
}

var priceList = [10, 8, 2, 31, 10, 1, 65, 10];

var occurance1 = findAllIndex(priceList, 10);
console.log(occurance1); // [ 0, 4, 7 ]

var occurance2 = findAllIndex(priceList, 8);
console.log(occurance2); // [ 1 ]

var occurance3 = findAllIndex(priceList, 9);
console.log(occurance3); // []

function checkOrAdd(array, element) {
    if (array.indexOf(element) === -1) {
        array.push(element);
        console.log("Element not Found! Updated the array.");
    } else {
        console.log(element + " is already in the array.");
    }
}

var parts = ["Monitor", "Keyboard", "Mouse", "Speaker"];

checkOrAdd(parts, "CPU"); // Element not Found! Updated the array.
console.log(parts); // [ 'Monitor', 'Keyboard', 'Mouse', 'Speaker', 'CPU' ]

checkOrAdd(parts, "Mouse"); // Mouse is already in the array.

let fruits = Array.of("Apple", "Banana", "Grapes");

console.log(fruits);

let numbers = [2, 4, 6, 8, 10];
function square(number) {
    return number * number;
}
let square_numbers = numbers.map(square);
console.log(square_numbers);

const alphabets = ["A", "B", "C"];
let iterator = alphabets.entries();
for (let entry of iterator) {
    console.log(entry);
}

let words = ["apple", "ball", "cat", "dog"];
words.copyWithin(3, 0);
console.log(words);

// let laptops = ["dell", "hp", "acer", "asus"];
// laptops.copyWithin(0, 2, 4);
// console.log(laptops);

let number1 = [1, 2, [3, 4, [5, 6, [7, 8]]]];
let flattenArray = number1.flat(3);
console.log(flattenArray);

let numbers2 = [1, 2, 3, 4, 5];
const resultingArray = numbers.flatMap((x) => [x ** 2]);

console.log(resultingArray);