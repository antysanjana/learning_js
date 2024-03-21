/*const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "Blue" 
};

console.log(person.firstName + " is " + person.age + " years old.");

let text = "";
for(let x in person){
    text += person[x] + " ";
}

console.log(text);*/

//Adding New Properties
/*person.country = "Bangladesh";

console.log(person);*/

//Deleting a property
/*const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "Blue" 
};

delete person.age;
console.log(person);*/

//Nested Objects
/*const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    cars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat"
    }
};

console.log(person.cars.car2);
console.log(person.cars["car3"]);
console.log(person["cars"]["car1"])*/

//Nested Arrays and Objects
const myObj = {
    firstName: "John",
    age: 50,
    cars: [
        {car: "Ford", models: ["Fiesta", "Focus", "Mustang"]},
        {car: "BMW", models: ["320", "X3", "X5"]},
        {car: "Fiat", models: ["500", "Panda"]}
    ]
};

let text = "";
for(let x in myObj.cars){
    text += myObj.cars[x].car + " ";
    for(let y in myObj.cars[x].models){
        text += myObj.cars[x].models[y] + " ";
    }
}

console.log(text);