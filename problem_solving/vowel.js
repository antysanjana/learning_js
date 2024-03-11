//How many vowels are there in a sentence?
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function vowelCount(sentence){
    let count = 0;
    const letters = Array.from(sentence);

    letters.forEach(function(value){
        if(vowels.includes(value)){
            count++;
        }
    })
    return count;
}

console.log(vowelCount("I love Bangladesh"));