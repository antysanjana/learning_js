//Creating a constructor
function Person(first, last, age){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.fullName = function(){
        this.firstName + " " + this.lastName;
    }
}

const sumit = new Person("Sumit", "Saha", 35);
const anty = new Person("Sanjana", "Anty", 29);
const emon = new Person("Ishtiaque", "Iqbal", 33);

emon.country = "Bangladesh";

console.log(anty);
console.log(emon);