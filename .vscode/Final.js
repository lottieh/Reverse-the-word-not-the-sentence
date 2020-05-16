const phrases = "cheese is the best"; 

//1. Take in a phrase string

//2. Split string into array for each word - space as the delimiter

let  arrayWordOutput = phrases.split(" ");  
console.log(arrayWordOutput)

// 3. split the letters in the array
let arrayLetterOutput = arrayWordOutput.split(" ");  
    
//4. Reverse the letter in each individual array 

let reversed = arrayLetterOutput.reverse();


//5. Join the arrays back together
let words = reversed.join("");
    

//6. Output the final phrase
console.log(words)