//Sort all the rolls of students in ascending order
const roll = [3, 5, 1, 6, 50, 12, 30];

console.log(roll.sort(function(a, b){
    return a - b; //changes the original array
}));
