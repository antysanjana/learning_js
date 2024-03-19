//Creating class
/*class Car {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    age(){
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}

const Car1 = new Car("Audi", 2020);
const Car2 = new Car("BMW", 2017);

console.log("My " + Car1.name + " is " + Car1.age() + " years old");
console.log("My " + Car2.name + " is " + Car2.age() + " years old");*/

//Class methods with parameters
class Car {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    age(x){
        return x - this.year;
    }
}

const Car1 = new Car("Audi", 2020);
const Car2 = new Car("BMW", 2017);

const date = new Date(); 
const year = date.getFullYear();       

console.log("My " + Car1.name + " is " + Car1.age(year) + " years old");
console.log("My " + Car2.name + " is " + Car2.age(year) + " years old");

