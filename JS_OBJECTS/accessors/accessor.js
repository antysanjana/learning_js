//JavaScript Getter (The get Keyword)
/*const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    language: "en",
    get lang(){
        return this.language;
    }
};

console.log(person.lang);*/

//JavaScript Setter (The set Keyword)
/*const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    language: "en",
    set lang(l){
        this.language = l;
    }
};

person.lang ="bn";
console.log(person.language);*/

//Object.defineProperty()
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    language: "en",
};

Object.defineProperty(person, "lang",{
    get: function(){return this.language;}
})

Object.defineProperty(person, "set_age", {
    set: function(a){this.age = a}
})
console.log(person.lang);
person.set_age = 40;
console.log(person.age)