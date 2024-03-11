//How to print randomly any number between 1 and 6 in a game of ludo
function rnd(min, max){
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

console.log(rnd(1, 6));