// ONLY ODDS

//take an array of numbers and loop through them
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArray = [];
//If the number is odd the add it to a new array
for (let i=0; i<nums.length; i++) {
    if (nums[i] % 2 != 0) {
        newArray += nums[i]+',';
    }
}
console.log(newArray);

// VOWELS VS CONSTANTS 

//take a string of lower case letter,
let word = "awesome";
let vowelLetters = "aeiou"
let vowels = 0;
let constants = 0;
//loop through the letter and separate the vowels and the constants
for (let i=0; i<word.length; i++) {
    if (vowelLetters.includes(word[i])) {
        vowels++; 
    }
    else {
        constants++;
    }
}
//Create a string that starts with the word and states how many vowels and constants there are
console.log(word +" has " + constants + " constants and "+ vowels + " vowels.")

// REVERSE ARRAY

//take and array and reverse the order 
let inputArray = [1, 2, 3];
let reverseArray = [];

for (let i=inputArray.length-1; i>=0; i--) {
    reverseArray += inputArray[i]+ ",";
}

console.log(reverseArray)

//FizzBuzz

//write a for loop for the numbers 1-10
for (let i=1; i<100; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
    }
    else if (i % 5 === 0) {
        console.log("Buzz");
    }
    else if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }
    else {
        console.log(i);
    }
    
}


