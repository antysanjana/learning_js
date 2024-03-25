//Invoking a Function as a Function
/*function myFunc(a, b){
    return a * b;
}

const x = myFunc(9, 8);
console.log(x);*/

//global window onject
/*function myFunc(a, b){
    return a * b;
}

const x = window.myFunc(9, 8);
console.log(x);*/

//The Global Object
/*let x = myFunc();
console.log(x);

function myFunc(){
    return this;
}*/

//Invoking a Function with a Function Constructor
function myFunc(arg1, arg2){
    this.firstName = arg1;
    this.lastName = arg2;
}

const person = new myFunc("John", "Doe");

console.log(person.firstName);