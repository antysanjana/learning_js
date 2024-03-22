//Displaying Object Properties
/*const person = {
    p_name: "John",
    age: 30,
    city: "Newyork"
};

console.log(person.p_name + " , " + person.age + " , " + person.city);*/

//Displaying the Object in a Loop
/*const person = {
    p_name: "John",
    age: 30,
    city: "Newyork"
};

let txt = "";
for(let x in person){
    txt += person[x];
}

console.log(txt);*/

//Using Object.values()
/*const person = {
    p_name: "John",
    age: 30,
    city: "Newyork"
};

const myArr = Object.values(person);

console.log(myArr);*/

//Using JSON.stringify()
/*const person = {
    p_name: "John",
    age: 30,
    city: "Newyork"
};

let mystr = JSON.stringify(person);
console.log(mystr);*/

//Stringify Dates
/*const person = {
    p_name: "John",
    age: 30,
    city: "Newyork",
    today: new Date()
};

let mystr = JSON.stringify(person);
console.log(mystr);*/

//Stringify Functions
/*const person = {
    p_name: "John",
    age: function(){
        return 30;
    },
    city: "Newyork",
    today: new Date()
};

person.age = person.age.toString();
let mystr = JSON.stringify(person);
console.log(mystr);*/

//Stringify Arrays
const arr = ["John", "Peter", "Sally", "Jane"];

let mystr = JSON.stringify(arr);
console.log(mystr);
