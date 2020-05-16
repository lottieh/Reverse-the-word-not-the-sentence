//const phrases = "cheese is the best"; 

//1. Take in a phrase string

//2. Split string into array for each word - space as the delimiter

function splitToArray(phrases) {

return arrayOutput = phrases.split(" ");  
}

// split the letters in the array

function splitToArrayWords(phrases) {

    return arrayOutput = phrases.split("");  
    }
//3. Reverse the letter in each individual array 
function reverser(arrayOutput){
    return arrayOutput.reverse();
}

//4. Join the arrays back together

//5. Output the final phrase




module.exports = {
    splitToArray,
    splitToArrayWords
  };
