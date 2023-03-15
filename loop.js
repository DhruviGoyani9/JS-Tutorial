const prompt = require("prompt-sync")();

console.log('for loop');
for (let i = 1; i <= 5; i++) {
    if (i == 3) {
        //break;
        continue;
    }
    console.log(i);
}

let sum = 0, number;
while (true) {
    number = parseInt(prompt('Enter number'));
    if (number < 0) {
        break;
    }
    sum += number;
}
console.log(sum);
//let number = parseInt(prompt('Enter number'));
/* while(number >= 0){
    sum += number;

    number = parseInt(prompt('Enter number'));
}
console.log(`Sum is ${sum}`);
console.log("sum " + sum);

do{
    sum += number;
    number = parseInt(prompt('Enter a number: '));
}while(number >= 0)
console.log('The Sum is ' + sum); */

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i == 2) {
            break;
        }
        console.log(`i = ${i}, j = ${j}`);
    }
}

let arr = ['el1', 'el2', 'el3'];

//arr.addedProp = 'arrProp';

// elKey are the property keys
console.log("for...in --->")
for (let elKey in arr) {
    console.log(elKey);
}

// elValue are the property values
console.log("for..of ---> ")
for (let elValue of arr) {
    console.log(elValue)
}