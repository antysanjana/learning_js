//this in a Method
/*const person = {
    firstName : "John",
    lastName : "Doe",
    ID : 55667,
    fullname : function(){
        console.log(this.firstName + " " + this.lastName);
    }
};

person.fullname();

//this Alone
let x = this;
console.log(x);*/

//this in strict mode
/*"use strict";
let x = this;
console.log(x);*/

//this in a Function (Default)
/*function myFunc(){
    return this;
}

console.log(myFunc());

//this in a Function (strict)
"use strict"
function myFunc(){
    return this;
}

console.log(myFunc());*/

//this in Event Handlers
/*<button onclick="this.style.display='none'">
  Click to Remove Me!
</button>*/

//Object Method Binding
/*const person = {
    firstName : "John",
    lastName : "Doe",
    ID : 55667,
    fullname : function(){
        console.log(this.firstName + " " + this.lastName);
    }
};

person.fullname();*/

//Explicit Function Binding
/*const person1 = {
    fullName: function(){
        console.log(this.firstName + " " + this.lastName)
    }  
}

const person2 = {
    firstName : "John",
    lastName : "Doe"
};

person1.fullName.call(person2);*/

//Function Borrowing
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function(){
        return this.firstName + " " + this.lastName
    }
};

const member = {
    firstName : "Sanjana",
    lastName: "Anty"
};

let name = person.fullName.bind(member);
console.log(name())

