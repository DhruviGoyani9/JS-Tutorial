const student ={
    fname:'Dhruvi',
    // get getName(){
    //     return this.fname;
    // }

    set changeName(newName){
        this.fname = newName;
    }
};

// accessing data property
console.log(student.fname); // Dhruvi

// accessing getter methods
//console.log(student.getName); // Dhruvi

// trying to access as a method
//console.log(student.getName()); // error

student.changeName = 'Goyani';
console.log(student.fname);