//closure in function with self invoking function
/*const add = (function(){
    counter = 0;

    return function(){
        counter += 1;
        return counter;
    }
})();


console.log(add());
console.log(add());
console.log(add());
console.log(add());*/

//closure in function without self invoking function
function temp(){
    counter = 0;

    return function(){
        counter += 1;
        return counter;
    }
}

const add = temp();

console.log(add());
console.log(add());
console.log(add());
console.log(add());