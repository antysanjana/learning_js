//JavaScript Array at()
/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);
console.log(fruit);*/

//JavaScript Array join()
/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join(" * "));*/

//Popping and Pushing
//The pop() method removes the last element from an array
/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.pop();
console.log(fruit);
console.log(fruits);*/

//The push() method adds a new element to an array (at the end)
/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.push("Kiwi");
console.log(length);
console.log(fruits);*/

//Shifting Elements
/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.shift();
console.log(fruit);
console.log(fruits);*/

//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements
/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.unshift("Lemon");
console.log(length);
console.log(fruits);*/

//The length property provides an easy way to append a new element to an array
/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";
console.log(fruits);*/

//delete method
/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];
console.log(fruits);*/

//JavaScript Array concat()
/*const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren);*/

/*const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
console.log(myChildren);*/

/*const arr1 = ["Cecilie", "Lone"];
const myChildren = arr1.concat("Peter");
console.log(myChildren);*/

//Array copyWithin()
/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);
console.log(fruits);*/

/*const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.copyWithin(2, 0, 2);
console.log(fruits);*/

//JavaScript Array flat()
// const arr = [[1, 2], [3, 4], [5, 6]];
// console.log(arr.flat());

//JavaScript Array splice()
/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);*/

/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
const fruit = fruits.splice(2, 2, "Lemon", "Kiwi");
console.log(fruit);
console.log(fruits);*/

//Using splice() to Remove Elements
/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
const fruit = fruits.splice(0, 1);
console.log(fruit);
console.log(fruits);*/

/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
const fruit = fruits.toSpliced(0, 1);
console.log(fruit);
console.log(fruits);*/

//JavaScript Array slice()
/*const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);
console.log(citrus);
console.log(fruits);*/

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(citrus);
console.log(fruits);












































