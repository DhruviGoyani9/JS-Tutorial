let x;
x = 5;
console.log(x);
var a = 10;
//console.log(a);
var a = 15;
console.log(a);
//In let, can not redeclare variable
//var, redeclare variable
let x1 = 5, y = 6, z = 7;
console.log(x1, y, z);

let x2; // x is the name of the variable

console.log(x2); // undefined

let b = 'hii';
let B = 5;
console.log(b);
console.log(B);

console.log("e notation");
const a1 = 5e9;
console.log(a1);

const a2 = 5e-5;
console.log(a2);

const hex = 0xff;
console.log(hex);

//invalid
//et new = 5; // Error! new is a keyword.

const c = 5;
//x = 10;  // Error! constant cannot be changed.
console.log(c)
//const x;  // Error! Missing initializer in const declaration.

const number1 = 3 / 0;
console.log(number1); // Infinity

const number2 = -3 / 0;
console.log(number2); // -Infinity

// strings can't be divided by numbers
const number3 = "abc" / 3;
console.log(number3);  // NaN

// BigInt value
const value1 = 900719925124740998n;
console.log(value1);

// Adding two big integers
const result1 = value1 + 1n;
console.log(result1); // "900719925124740999n"

const value2 = 900719925124740998n;

// Error! BitInt and number cannot be added
//const result2 = value2 + 1; 
//console.log(result2); 

const s1 = Symbol('hello');
const s2 = Symbol('hello');
console.log(s1);
console.log(s2);
console.log(s2.description);
console.log(s1 === s2);

let id = Symbol("id");

let person = {
    name: "dhruvi",
    age: 21,
    // adding symbol as a key
    [id.description]: 123 // not "id": 123
};

console.log('object - ', person);
//Symbols are not included in for...in Loop
// using for...in
for (let key in person) {
    console.log(key, ': ', person[key]);
}

person.id = 12;
console.log(person.id);

person.id = 'Another value';
console.log(person.id);

//Object
const student = {
    firstName: 'abc',
    class: 10
}
console.log(student);
console.log(student.firstName);
console.log(student["firstName"]);

const student1 = {
    name: 'dhruvi',
    age: 21,
    marks: {
        science: 70,
        math: 75
    },
    greet: function () { console.log('hello') }
}
console.log(student1);
console.log(student1.marks);
console.log(student1.marks.science);
student1.greet();

delete age;
//console.log(age);


//set :: 

const set1 = new Set([1, 'hello', { abc: 123 }]);
console.log(set1);

set3 = new Set([1, 1, 2, 2]);
console.log(set3.values());
console.log(set3.has(1));
set3.add(3);
console.log(set3);
set3.delete(2);
console.log(set3);
set3.clear();
console.log(set3);

for (const i of set1) {
    console.log(i);
}

//weak set
console.log("Weak Set =>");

const weakSet = new WeakSet();
console.log(weakSet);
const obj = {
    message: 'hi',
    send: true
}
weakSet.add(obj);
console.log(weakSet);


//Map::
console.log("MAP :: ")
const map1 = new Map();
console.log(map1);

map1.set('info', { name: 'dhruvi', age: 20 });
map1.set('gxf', 'fg')
console.log("Using set method : ", map1);

let ob = {};
map1.set(ob, { sfg: 'fsg', ffg: 'fg' });
console.log("Using object as a key ", map1);

console.log("access map element :: ", map1.get('info'));

console.log("Has method :: ", map1.has('info'));

for (ele of map1) {
    console.log('== ', ele)
}
map1.delete(ob);
console.log("delete method :: ", map1);

console.log("map size :: ", map1.size);

for (let [key, value] of map1) {
    console.log(key + ' - ' + value)
}

map1.clear();
console.log("clear method :: ", map1);

//WeakMap can only contain objects as keys.

const weakMap = new WeakMap();
console.log(weakMap);

let ob1 = {};

weakMap.set(ob1, 'hii');
console.log("weakmap :: ", weakMap);

//weakMap.set('obj', 'hdyh');//error

//get element of a waekmap
console.log("get method :: ", weakMap.get(ob1));

//check if an element is present in weakmap
console.log("has method :: ", weakMap.has(ob1));

//delete the element 
console.log("delete method :: ", weakMap.delete(ob1));

console.log(weakMap);

//weakMap are not iterable.
// for (let i of weakMap) {
//     console.log(i);
// }

//proxy 

console.log("Proxy ---> ");
let stud = {
    age: 24,
    name: "Felix"
}

const handler = {
    get: function (obj, prop) {
        return obj[prop];
        /* if (prop == 'name') {
            return obj[prop];
        } else {
            return 'Not Allowed';
        } */
        //return obj[prop] ? obj[prop] : 'property does not exist';
    }
}

const proxy = new Proxy(stud, handler);
console.log(proxy.name);
console.log(proxy.age);
console.log(proxy.class); // property does not exist

//set method

let stud1 = {
    name: 'John'
}

let setNewValue = {
    set: function (obj, prop, value) {

        if (obj[prop]) {
            console.log('read only');
        }
        //obj[prop] = value;
        //return;
    }
};

// setting new proxy
let person1 = new Proxy(stud1, setNewValue);

// setting new key/value
person1.name = 'John';
console.log("read only:: ", person1); // Proxy {name: "John", age: 25}


const user = {
    name: 'dhruvi',
    std: 8,
    clg: 'xyz',
    sem: 7
}
console.log("User standard", user.std);
let user1 = { ...user, std: 10 };
//user1.std = 10
//console.log("new std", user1.std)
console.log("User std ", user1.std)


const arr = [10, 20, 30, 40, { name: 'dhruvi', age: 20 }];
console.log("Array");
arr.forEach(element => {
    console.log(element)
});
let arr1 = [...arr, arr[0] = 60,];
arr1[0] = 500;
arr1[4].age = 22
console.log("new array")
arr1.forEach(element => {
    console.log(element)
});
//clas

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
// }

// const per = new Person('Dhruvi');
// console.log("class :: ", per.name);

