/* function Person () {
    this.name = 'John',
    this.age = 23
}

// create an object
const person1 = new Person();
const person2 = new Person();
console.log(person1.name);
console.log(person2.name); */

function Person (person_name, person_age, person_gender) {

    // assigning  parameter values to the calling object
     this.name = person_name,
     this.age = person_age,
 
     this.greet = function () {
         return ('Hi' + ' ' + this.name);
     }
 }

 const person1 = new Person('Dhruvi',21);
 const person2 = new Person('Goyani',20);

 person1.gender = 'female';
Person.prototype.year = '3';
 console.log(person1.name);
 console.log(person2.name);

console.log(person1.greet());
 console.log(person1.gender);

 console.log(person1.year);
 console.log(person2.year);

 console.log(Person.prototype);

 //;Object Literal is generally used to create a single object. 
 //The constructor function is useful if you want to create multiple objects. 

 let person = {
     name: 'dhruvi'
 }

 console.log(person.name);

 let student = person;
 student.name = 'abc';

 console.log(person.name);