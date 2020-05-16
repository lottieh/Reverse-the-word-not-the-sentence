import React from 'react';

class ActualOutput extends React.Component {
    // Split the words in the string into arrays
    // splitToArray(phrases) {

    //     return arrayWordOutput = phrases.split(" ");  
    //     }

    // splitToArray = () => {
    //    let output=  this.state.description.split(" ").split("").reverse().join("")
    // }
    //Split the letters in the array

    splitToArrayWords(arrayWordOutput) {

        let arrayLetterOutput = arrayWordOutput.split("");
        return arrayLetterOutput; 
    };

    // Reverse the letter in each individual array 

    reverser(arrayLetterOutput) {
         let reversed = arrayLetterOutput.reverse();
    }

    // Join the arrays back together
    wordBackTogether(reversed) {
        let words = reversed.join("");
        this.setState ={ 
            phrases : words
        }
    }
    
    // state = {

    // }
    render() {
        return (
            <div>
                <div className=" Bordered ">
                 
                {/* {this.props.input.description.split(" ").split("").reverse().join("")
    } */}
              </div>


            </div>



        );
    }
}
export default ActualOutput;

