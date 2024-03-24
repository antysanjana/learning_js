//Create a Set
/*const letters = new Set(["a", "b", "c"]);
console.log(letters);*/

/*const letters = new Set();
letters.add("a");
letters.add("b");
letters.add("c");
console.log(letters);*/

/*const a = "a";
const b = "b";
const c = "c";

const letters = new Set();
letters.add(a);
letters.add(b);
letters.add(c);
console.log(letters);*/

//The forEach() Method
/*const letters = new Set(["a", "b", "c"]);

let text = "";
letters.forEach(function(values){
    text += values;
})
console.log(text);*/

//The values() Method
/*const letters = new Set(["a", "b", "c"]);
const i = letters.values();

let text = "";
for(let x of i){
    text += x;
}
console.log(text);*/

//The entries() Method
const letters = new Set(["a", "b", "c"]);
const i = letters.entries();

let text = "";
for(let x of i){
    text += x + " ";
}
console.log(text);
console.log(letters instanceof Set);