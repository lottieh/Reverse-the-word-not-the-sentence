import React from 'react';

class ActualOutput  extends React.Component {

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
        function wordBackTogether(reversed){
            return words = reversed.join("");
   
render(){
    return (
        <div>
             <div className=" Bordered ">Task 1
             g
             dsg
             sdg
             sd
             gs
             defaultgsd
             gds
             dsggsd
             gd
             dgs
             gd
             gd
             g
             dsggsdg
             gds
             gdsgds
             dsggsddggd
              </div>


        </div>



    );
}}
export default ActualOutput;

