//const phrases = "cheese is the best"; 

//1. Take in a phrase string

//2. Split string into array for each word - space as the delimiter

function splitToArray(phrases) {

return arrayWordOutput = phrases.split(" ");  
}

// 3. split the letters in the array

function splitToArrayWords(arrayWordOutput) {

    return arrayLetterOutput = arrayWordOutput.split("");  
    }
//4. Reverse the letter in each individual array 

function reverser(arrayLetterOutput){
    return reversed = arrayLetterOutput.reverse();
}

//5. Join the arrays back together

//6. Output the final phrase




module.exports = {
    splitToArray,
    splitToArrayWords,
    reverser
  };
