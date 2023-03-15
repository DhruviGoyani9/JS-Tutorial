//call back :: The callback function is helpful when you have to wait for a result that takes time. 
//For example, the data coming from a server because it takes time for data to arrive.

console.log("Callback :: ")
function greet1(name, callback) {
    console.log('Hi ' + name);
    callback();
}

function callMe() {
    console.log('I am callback function')
}

//greet1('DHruvi', callMe);

setTimeout(greet1, 1000, 'dhruvi', callMe)


//asynchronous

const count = false;
//resolve , reject is a function
let countvalue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject('There is no count value.')
    }
});
console.log(countvalue);

countvalue.then(function successValue(result) {
    console.log("result --> ", result)
})

    .then(function successValue1() {
        console.log("You can call multiple function this way.");
    })
    .catch(
        function errorValue(result) {
            console.log("result -->", result)
        }
    )


async function f() {
    console.log('Async function. ');
    return Promise.resolve(1);
}

f().then(function (result) {
    console.log(result)
})


//await

let promise = new Promise(function (resolve, reject) {

    resolve("Promise resolved...await");

});

async function asyncFunc() {
    let result = await promise;

    console.log(result);
    console.log('hello');
}

asyncFunc();

//setInterval() method repeats a block of code at every given timing event.

function greet(name, lastName) {
    console.log('Hello' + ' ' + name + ' ' + lastName);
}

// passing argument to setInterval
setInterval(greet, 1000, 'Dhruvi', 'Goyani');