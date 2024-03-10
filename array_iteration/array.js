//JavaScript Array forEach()
/*const numbers = [45, 4, 9, 16, 25];

function myFunction(value, index, array){
    console.log(value);
    console.log(index);
    console.log(array);
    console.log("-------");
}

numbers.forEach(myFunction);*/

//JavaScript Array map()
/*const numbers = [45, 4, 9, 16, 25];

function myFunction(value, index, array){
    return value * 2;
}

const num = numbers.map(myFunction);
console.log(num);*/

//JavaScript Array flatMap()
/*const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap((x) => x * 2);
console.log(newArr);*/

//JavaScript Array filter()
/*const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunc);

function myFunc(value, index, array){
    return value > 18;
}

console.log(over18);*/

//Reduce method
/*const numbers = [45, 4, 9, 16, 25];
const sum = numbers.reduce(myFunc);

function myFunc(total, value, index, array){
    return  total + value;
}

console.log(sum);*/

//reduceRight method
/*const numbers = [45, 4, 9, 16, 25];
const sum = numbers.reduceRight(myFunc);

function myFunc(total, value, index, array){
    return  total + value;
}

console.log(sum);*/

//JavaScript Array every()
/*const numbers = [45, 4, 9, 16, 25];
const Allover18 = numbers.every(myFunc);

function myFunc(value, index, array){
    return  value > 18;
}

console.log(Allover18);*/

//JavaScript Array some()
/*const numbers = [45, 4, 9, 16, 25];
const Someover18 = numbers.some(myFunc);

function myFunc(value, index, array){
    return  value > 18;
}

console.log(Someover18);*/

//JavaScript Array.from()
/*const newArr = Array.from("ABCDEFGH");
console.log(newArr);*/

//JavaScript Array keys()
/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

for(let x of keys){
    console.log(x);
}*/

//JavaScript Array entries()
/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for(let x of f){
    console.log(x);
}*/

//JavaScript Array with() Method
/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.with(2, "Jackfruit");

for(let x of f){
    console.log(x);
}*/

//JavaScript Array Spread (...)
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];
console.log(year);
