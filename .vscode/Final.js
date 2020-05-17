//1. Take in a phrase string
const phrases = "cheese is the best"; 

//2. Split string into array for each word - space as the delimiter

let  arrayWordOutput = phrases.split(" ");  
console.log(arrayWordOutput)
// need to change this to not be an array

for (let i = 0; i < arrayWordOutput.length; i++) {
    arrayWordOutput[i]=arrayWordOutput[i].split("")
    console.log(arrayWordOutput[i]);
    reversed = arrayWordOutput[i].reverse();
    console.log(reversed)
    words = reversed.join("");
    console.log(words);

}


    // 3. split the letters in the array
// let arrayLetterOutput = arrayWordOutput.split("");  
    
//4. Reverse the letter in each individual array 




//5. Join the arrays back together

    

//6. Output the final phrase
console.log(words)