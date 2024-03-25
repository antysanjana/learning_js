//create a map
/*const fruits = new Map([
    ["apples", 500],
    ["bananas", 400],
    ["mangoes", 300]
]);
console.log(fruits);*/

//using set method
/*const fruits = new Map();

fruits.set("apples", 500);
fruits.set("bananas", 400);
fruits.set("mangoes", 300);

console.log(fruits);

//the get method
console.log(fruits.get("apples"));

//size property
console.log(fruits.size);

//delete property
fruits.delete("apples");
console.log(fruits);

//clear property
fruits.clear();
console.log(fruits);*/

//has property
/*const fruits = new Map();

fruits.set("apples", 500);
fruits.set("bananas", 400);
fruits.set("mangoes", 300);

console.log(fruits.has("apples"));

//Maps are Objects
console.log(typeof fruits);

//instaceof
console.log(fruits instanceof Map);*/


//Map.forEach()
/*const fruits = new Map([
    ["apples", 500],
    ["bananas", 400],
    ["mangoes", 300]
]);

let text = "";
fruits.forEach(function(value, key){
    text += key + " = " + value + "\n";
})

console.log(text);*/

//entries()
/*const fruits = new Map([
    ["apples", 500],
    ["bananas", 400],
    ["mangoes", 300]
]);

let text = "";
for(let x of fruits.entries()){
    text += x + "\n";
}

console.log(text);*/

//Map.keys()
/*const fruits = new Map([
    ["apples", 500],
    ["bananas", 400],
    ["mangoes", 300]
]);

let text = "";
for(let x of fruits.keys()){
    text += x + "\n";
}

console.log(text);*/

//Map.values()
/*const fruits = new Map([
    ["apples", 500],
    ["bananas", 400],
    ["mangoes", 300]
]);

let text = "";
for(let x of fruits.values()){
    text += x + "\n";
}

console.log(text);*/

// Sum all values
/*const fruits = new Map([
    ["apples", 500],
    ["bananas", 400],
    ["mangoes", 300]
]);

let total = 0;
for(let x of fruits.values()){
    total += x ;
}

console.log(total);*/

//Objects as Keys
const apple = {name: "Apples"};
const banana = {name: "Bananas"};
const mango = {name: "Mangoes"};

const fruits = new Map();

fruits.set(apple, 500);
fruits.set(banana, 400);
fruits.set(mango, 300);

console.log(fruits);
