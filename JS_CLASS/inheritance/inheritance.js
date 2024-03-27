//inheritance property
/*class Car {
    constructor(brand){
        this.brand = brand;
    }

    present(){
        return "I have a " + this.brand;
    }
}

class Model extends Car {
    constructor(brand, mod){
        super(brand);
        this.model = mod;
    }

    show(){
        return this.present() + " , it is a " + this.model;
    }
}

let car = new Model("Ford", "Mustang");
console.log(car.show());*/

//getters and setters
class Car {
    constructor(brand){
        this.brand = brand;
    }

    get cname(){
        return this.brand;
    }

    set cname(x){
        this.brand = x;
    }
}

const car = new Car("Ford");
car.cname = "Volvo";
console.log(car.cname)