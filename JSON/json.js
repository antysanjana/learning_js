//Creating JSON text file
let text = '{ "employees" : [' +
    '{"firstName" : "John" , "lastName" : "Doe"},' +
    '{"firstName" : "Anna" , "lastName" : "Smith"},' +
    '{"firstName" : "Peter" , "lastName" : "Jones"}]}' ;
    

console.log(text);

//Converting to js object
const obj = JSON.parse(text);

console.log(obj);
   