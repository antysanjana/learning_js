//call method
/*const person = {
    fullname: function(){
        return this.firstName + " " + this.lastName;
    }
};

const p1 = {
    firstName: "John",
    lastName: "Doe"
};

const p2 = {
    firstName: "Mary",
    lastName: "Doe"
};

console.log(person.fullname.call(p1));*/

//call with parameters
const person = {
    fullname: function(city, country){
        return this.firstName + " " + this.lastName + " " + city + " " + country;
    }
};

const p1 = {
    firstName: "John",
    lastName: "Doe"
};

const p2 = {
    firstName: "Mary",
    lastName: "Doe"
};

console.log(person.fullname.call(p1, "New York", "USA"));
