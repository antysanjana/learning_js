//Function Expressions
/*const x = function(a, b){
    return a * b;
};

console.log(x(3, 4));

//The Function() Constructor
const myFunc = new Function("a", "b", "return a * b");

console.log(myFunc(3, 4));*/

//Function Hoisting
/*console.log(myFunc(5));

function myFunc(y){
    return y * y;
}*/

//Self-Invoking Functions
/*(function(){
    console.log("I am self invoking!");
})();*/

//Functions Can Be Used as Values
/*function myFunc(a, b){
    return a * b;
}

const x = myFunc(4, 5);
console.log(x);*/

//Functions are Objects
/*function myFunc(a, b){
    return arguments.length;
}

const x = myFunc(2, 6);
console.log(x);*/

//The toString() method returns the function as a string
/*function myFunc(a , b){
    return a * b;
}

const x = myFunc.toString();
console.log(x);*/

//Arrow Functions
const x = (x, y) => x * y;

console.log(x(5, 6));