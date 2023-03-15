// JSON object
const data = {
    "name": "John",
    "age": 22,
    "hobby": {
        "reading": true,
        "gaming": false,
        "sport": "football"
    },
    "class": ["JavaScript", "HTML", "CSS"]
}

// accessing JSON object
console.log(data.name); // John
console.log(data.hobby); // { gaming: false, reading: true, sport: "football"}

console.log(data.hobby.sport); // football
console.log(data.class[1]); // HTML

//json data can contain object and array
//can not contain function as value


//convert JSON to js object
const jsonData = '{ "name": "John", "age": 22 }';

// converting to JavaScript object
const obj = JSON.parse(jsonData);

// accessing the data
console.log("js object --> ", obj);

// convert js object to json
const obj1 = JSON.stringify(obj);
console.log("json --> ", obj1);