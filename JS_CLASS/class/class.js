/*class Car {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
}

const bmw = new Car("BMW", 1999);
const audi = new Car("Audi", 2000);
const ford = new Car("Ford", 2001);

console.log(bmw);*/

//Class Methods
/*class Car {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    run(){
         console.log(this.name + " is running.");
    }

    age(){
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}

const bmw = new Car("BMW", 1999);
const audi = new Car("Audi", 2000);
const ford = new Car("Ford", 2001);

audi.run();
console.log("My " + audi.name + " is " + audi.age() + " years old");*/

//Class Methods with parameters
class Car {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    run(){
         console.log(this.name + " is running.");
    }

    age(x){
        return x - this.year;
    }
}

const bmw = new Car("BMW", 1999);
const audi = new Car("Audi", 2000);
const ford = new Car("Ford", 2001);

let date = new Date();
let year = date.getFullYear();

console.log("My " + audi.name + " is " + audi.age(year) + " years old");