class Car {
    constructor(name){
        this.name = name;
    }

    static hello(x){
        return "Hello! " + x.name;
    }
}

const car = new Car("Ford")
console.log(Car.hello(car));