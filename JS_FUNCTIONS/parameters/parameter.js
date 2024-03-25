//Default Parameter Values
/*function myFunc(x, y = 10){
    return x + y;
}

console.log(myFunc(5));*/

//Function Rest Parameter
/*function sum(...args){
    let sum = 0;
    for(let a of args){
        sum += a;
    }
    return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
console.log(x);*/

//The arguments object
const x = findMax(1, 123, 500, 115, 44, 88);

function findMax(){
    let max = -Infinity;
    for(i=0; i < arguments.length; i++){
        if(arguments[i]>max){
            max = arguments[i];
        }
    }
    return max;
}

console.log(x);