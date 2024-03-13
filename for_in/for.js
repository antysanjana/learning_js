/*const person = {fname: "John", lname: "Doe", Age: 25};

for(let x in person){
    console.log(person[x]);
}*/

//Array.forEach
const numbers = [45, 4, 9, 16, 25];

let sum =0;

numbers.forEach(myFunc);

function myFunc(value, index, array){
    sum += value;
}

console.log(sum);

