class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`hello ${this.name}`)
    }
}

class Student extends Person {
    constructor(name) {
        console.log("Creating student class");
        super(name);
    }
    subclass() {
        console.log("Subclass");
    }
}


let student1 = new Student('Goyani');
student1.greet();
//student1.subclass();
let intervalId = setTimeout(student1.subclass, 2000);
console.log('Id: ' + intervalId)
console.log('this mesage is shown first');
// let person1 = new Person('dhruvi');
// person1.greet()


function showTime() {

    let dateTime = new Date();
    let time = dateTime.toLocaleTimeString();

    console.log(time)
    let id = setTimeout(showTime, 3000);
    //console.log("id --> ", id)
    //clearTimeout(id);
    // console.log('setTimeout stopped ');
}
showTime();