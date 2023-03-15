// In this task we'd like you to create an array of three items, stored inside a variable called myArray. The items can be anything you want — how about your favorite foods or bands?

//Next, modify the first two items in the array using simple bracket notation and assignment. Then add a new item to the beginning of the array.
console.log('\n Task 1 --> \n');
let myArray = ['pizza', 'Burger', 'Frankie'];

console.log('Array :: ')
myArray.forEach(element => {
    console.log(element);
})
myArray[0] = 'Fruits';
myArray[1] = 'Vegetable';

console.log("\nModified Array --> ")
myArray.forEach(element => {
    console.log(element);
})

myArray.unshift('apple', 'mango');
console.log("\nAdd two item at the beginning of array -> ")
myArray.forEach(element => {
    console.log(element)
})

console.log("shift -> ", myArray.shift())
console.log(myArray);

//Convert the string into an array, removing the + characters in the process. Save the result in a variable called myArray.
//Store the length of the array in a variable called arrayLength.
//Store the last item in the array in a variable called lastItem.

console.log('\n Task 2 --> \n');
let str = 'Dhruvi+goyani+tagline';
let newstr = str.replace(/[+]/g, ' ')
console.log(newstr);
//console.log(str.replace('+'," "));
let arr = newstr.split(' ');
console.log('Array --> ', arr)
arrayLength = arr.length;
console.log("length of array -> ", arrayLength);
let lastItem = arr.slice(-1);
console.log("Last Item -> ", lastItem);

//Remove the last item in the array.
//Add two new names to the end of the array.
//Go over each item in the array and add its index number after the name inside parentheses, for example Ryu (0). Note that we don't teach how to do this in the Arrays article, so you'll have to do some research.
//Finally, join the array items together in a single string called myString, with a separator of "-".

console.log('\nTask 3 --->\n')

let myArray1 = ['pizza', 'Burger', 'Frankie'];
let removelement = myArray1.pop();
console.log('remove elemnt --> ', removelement);
myArray1.push('Fruits', 'vegetable');
console.log("Add two Item -> ", myArray1)

for (let i = 0; i < myArray.length; i++) {
    console.log(`${myArray1[i]}(${i})`)
}
let myString1 = myArray.join('-');
console.log(myString1)
let myString = myArray.toString();
console.log(myString)


//Find the index of the "Eagles" item, and use that to remove the "Eagles" item.
//Make a new array from this one, called eBirds, that contains only birds from the original array whose names begin with the letter "E". Note that startsWith() is a great way to check whether a string starts with a given character.


console.log('\n Task 4 --> \n')
const birds = ["Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets"];

let index = birds.indexOf('Eagles');
console.log("index of Eagles -> ", index);
let rBirds = birds.splice(2, 3, 'Eddf', 'fgg');
console.log("eBirds -> ", rBirds);
console.log(birds);
let eBirds = birds.filter(function (value, index) {
    return value.startsWith('E');
})
console.log("bird Startwith 'E' --> ", eBirds)
