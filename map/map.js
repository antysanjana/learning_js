//The new Map() Method
/*const fruits = new Map([
    ["Apples", 500],
    ["Banana", 400],
    ["Mango", 300]
]);

console.log(fruits);*/

//The set() Method
/*const fruits = new Map();

fruits.set("Apples", 500);
fruits.set("Banana", 400);
fruits.set("Mango", 300);

fruits.set("Apples", 200);
console.log(fruits);*/

//The get() Method
/*const fruits = new Map([
    ["Apples", 500],
    ["Banana", 400],
    ["Mango", 300]
]);

console.log(fruits.get("Apples"));*/

//The size Property
/*const fruits = new Map([
    ["Apples", 500],
    ["Banana", 400],
    ["Mango", 300]
]);
console.log(fruits.size);*/

//The delete() Method
/*const fruits = new Map([
    ["Apples", 500],
    ["Banana", 400],
    ["Mango", 300]
]);

fruits.delete("Apples");
console.log(fruits);*/

//The has() Method
/*const fruits = new Map([
    ["Apples", 500],
    ["Banana", 400],
    ["Mango", 300]
]);

console.log(fruits.has("Apples"));
console.log(fruits.has("Kiwi"));*/

//The forEach() Method
/*const fruits = new Map([
    ["Apples", 500],
    ["Banana", 400],
    ["Mango", 300]
]);

let text = "";
fruits.forEach(function(value, key){
    text += key + ' = ' + value;
})
console.log(text);*/

//The entries() Method
const fruits = new Map([
    ["Apples", 500],
    ["Banana", 400],
    ["Mango", 300]
]);

let text = "";
for(let x of fruits.entries()){
    text += x;
}
console.log(text);