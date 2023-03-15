//destructing


const per1 = {
    name: 'dhruvi',
    age: 20,
    gender: 'female'
}
let { name, age, Gender } = per1;

console.log("Desctructing ---> ")
console.log(name);
console.log(age);
console.log(Gender);

console.log("assign different variable name -->")
let { name: name1, age: age1, gender: gender1 } = per1;
console.log(name1);
console.log(age1);
console.log(gender1);


console.log("Assign default value to array -->");
let arrvalue = [10, 'one', ['two', 'three'],];

let [ar1 = 5, , cr1] = arrvalue;

console.log(ar1);
//console.log(br1);
console.log(cr1);

const [as1, ...as2] = arrvalue;
console.log("Assign Remaining element to a single variable --> ");
console.log(as1);
console.log(as2);

const [ne1, ne2, [ne3, ne4]] = arrvalue;
console.log("Nested array element --> ");
console.log(ne1);
console.log(ne2);
console.log(ne3);
console.log(ne4);

//swaping variable

let sw1 = 3;
let sw2 = 10;

console.log("Swapping ---> ");
[sw1, sw2] = [sw2, sw1];
console.log("x = ", sw1);
console.log("y = ", sw2);

