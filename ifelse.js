const prompt = require("prompt-sync")();

const number = prompt("enter a number : ");

if(number > 0 ){
    console.log("Positive number");

}
else if(number == 0){
    console.log("Zero number");
}
else
{
    console.log("Negative Number");
}

if(number >= 0){

    if(number == 0){
        console.log("You Entered Number 0");
    }else{
        console.log("You Entered a positive number");
    }
    
}else{
    console.log("You Entered Negative number");
}

//turnary operator
let results = (number >= 0)? 'Positive Number' : 'Negative Number';
console.log(results);

results = (number >= 0)? (number == 0 ? "zero" : "Positive") : "negative";
console.log(results);

//switch case
let a = 2;

switch (a) {

    case 1:
        a = 'one';
        break;
    case 2:
        a = 'two';
        break;
    default:
        a = 'not found';
        break;
}
console.log(`The value is ${a}`);

const operator = prompt('Enter operator ( either +, -, * or / ): ');

const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

switch(operator) {
    case '+':
        result = number1 + number2;
        console.log(`${number1} + ${number2} = ${result}`);
        break;
    case '-':
        result = number1 - number2;
        console.log(`${number1} - ${number2} = ${result}`);
        break;
    case '*':
        result = number1 * number2;
        console.log(`${number1} * ${number2} = ${result}`);
        break;
    case '/':
        result = number1 / number2;
        console.log(`${number1} / ${number2} = ${result}`);
        break;

    default:
        console.log('Invalid operator');
        break;
}