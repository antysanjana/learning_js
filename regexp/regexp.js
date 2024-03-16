//Using String search() With a String
/*let text = "Welcome to w3schools";
console.log(text.search("w3schools"))*/

//Using String search() With a Regular Expression
/*let text = "Welcome to w3schools";
console.log(text.search(/W3SCHOOLS/i))*/

//Using String replace() With a String
/*let text = "Welcome to w3schools";
console.log(text.replace("w3schools", "Microsoft"))*/

//Use String replace() With a Regular Expression
/*let text = "Welcome to w3schools";
console.log(text.replace(/W3SCHOOLS/i, "Microsoft"))*/

//Regular Expression Modifiers
/*let text = "Welcome to w3schools. W3Schools is the best. Learn from w3Schools";
console.log(text.replace(/W3SCHOOLS/ig, "Microsoft"))*/

/*let text = "\nIs th\nis it?";
console.log(text.match(/^is/m));*/

//Regular Expression Patterns
/*let text = "Is this all there is?";
console.log(text.match(/[hi]/g));*/

/*let text = "123456789";
console.log(text.match(/[1-4]/g))*/

/*let text = "re, green, red, green, gren, gr, blue, yellow";
console.log(text.match(/(green|red)/g))*/

//Metacharacters are characters with a special meaning:
/*let Text = "Give 100%";
console.log(Text.match(/\d/g))*/

/*let text = "Is this all there is?"
console.log(text.match(/\s/g));*/

/*let text = "Hello! Look at you!"
console.log(text.match(/\bLO/ig));*/

/*let text = "Hello! Look at you!"
console.log(text.match(/Lo\b/ig));*/

/*let text = "Welcome to W3schools, Hello world!"
console.log(text.match(/\u0057/ig));*/

//Quantifiers define quantities
/*let text = "Helloooo W3schools, Hello world!"
console.log(text.match(/\o+/ig));*/

// let text = "Helloooo W3schools, Hello world!"
// console.log(text.match(/\lo*/ig));

/*let text = "Helloooo W3schools, Hello world!"
console.log(text.match(/\lo?/ig));*/

//Using the RegExp Object
console.log(/e/.test("The best things in life are free"))

console.log(/e/.exec("The best things in life are free"))









