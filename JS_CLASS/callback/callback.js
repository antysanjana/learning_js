//Callback function
/*function display(some){
    console.log(some);
}

function calculate(x, y, callback){
    let sum = x + y;
    if(callback){
        callback(sum);
    }
}

calculate(5, 5, display);*/

//another example
const numbers = [4, 1, -20, -7, 5, 9, -6];

let posNum = remNeg(numbers, (x) => {return x >= 0;})

function remNeg(num, callback){
    const arr = [];
    for(let i of num){
        if(callback(i))
            arr.push(i);
    }
    return arr;
}

console.log(posNum);