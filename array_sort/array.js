//Sorting an Array
/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());*/

//Reversing an Array
/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.reverse());*/

/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits.reverse());*/

//JavaScript Array toSorted() Method
/*const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toSorted());*/

//JavaScript Array toReversed() Method
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.toReversed());

//Numeric Sort
//Ascending order
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b)
//     {return a - b;}
// )
// console.log(points);

//Descending order
// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b)
//     {return b - a;}
// )
// console.log(points);

//Sorting an Array in Random Order
/*const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){
    return 0.5 - Math.random();
})

console.log(points);*/

//Fisher Yates Method
/*const points = [40, 100, 1, 5, 25, 10];

for(i = points.length -1; i > 0; i--){
    let j = Math.floor(Math.random() * (i + 1));
    let k = points[i];
    points[i] = points[j];
    points[j] = k;
}

console.log(points);*/

//Find the Lowest (or Highest) Array Value
/*const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){
    return a - b;
})
let min = points[0];
let max = points[points.length-1];
console.log(min, max);*/

//Using Math.min() on an Array
/*const points = [40, 100, 1, 5, 25, 10];
let min = myArr(points);
console.log(min);

function myArr(points){
    return Math.min.apply(null, points);
}*/

//Using Math.max() on an Array
/*const points = [40, 100, 1, 5, 25, 10];
let min = myArr(points);
console.log(min);

function myArr(points){
    return Math.max.apply(null, points);
}*/

//JavaScript Array Minimum Method
/*const points = [40, 100, 1, 5, 25, 10];
let min = minArr(points);
console.log(min);

function minArr(arr){
    let len = points.length;
    let min_val = Infinity;
    while(len--){
        if(arr[len] < min_val){
            min_val = arr[len];
        }
   }
   return min_val;
}*/

//JavaScript Array Maximum Method
/*const points = [40, 100, 1, 5, 25, 10];
let max = myArr(points);
console.log(max);

function myArr(arr){
    let len = arr.length;
    max_val = -Infinity;
    while(len--){
        if(arr[len] > max_val){
            max_val = arr[len];
        }
    } 
    return max_val;
}*/

//Sorting Object Arrays
/*const cars = [
    {type: "Volvo", Year: 2016},
    {type: "Saab", Year: 2001},
    {type:"BMW", Year:2010}
]

cars.sort(function(a, b){
    return a.Year - b.Year;
})

console.log(cars);*/

const cars = [
    {type: "Volvo", Year: 2016},
    {type: "Saab", Year: 2001},
    {type:"BMW", Year:2010}
]

cars.sort(function(a, b){
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if(x < y){
        return -1;
    }
    if(x > y){
        return 1;
    }
    return 0;
})

console.log(cars);



