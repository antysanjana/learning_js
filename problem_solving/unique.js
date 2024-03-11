//How to take out the unique numbers from an array?
const numbers = [1, 4, 5, 5, 6, 7, 6, 8, 9, 10, 4];

const unique = numbers.filter(function(value, index, array){
    return array.indexOf(value) === index;
})

console.log(unique);