import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/1st Level/Header';
import Explanation from './Components/1st Level/Explanation';
import InputSection from './Components/2nd level/InputSection';
import OutputSection from './Components/2nd level/OutputSection';

class App extends React.Component {
  state = { 'lets eat some cheese' }
  
output = (stateDescription) =>
{ 
  const input= "ben has gone downstairs"
  
  // Split the words in the string into arrays
  
  const  arrayWordOutput = input.split(" ");  
  
  //Split the letters in the array    
      const arrayLetterOutput = arrayWordOutput.split("");
     
  // Reverse the letter in each individual array 
       const reversed = arrayLetterOutput.reverse();
  

  // Join the arrays back together
       const words = reversed.join("");

  
}

  render() {
    return (
      <div className="App">
        <Header />
        <Explanation />

        <InputSection input={this.state.phrases}
          submitPhraseFunc={this.submitPhrase}
          outputFunc={this.output} />
        <OutputSection  input={this.state.phrases}
            />


      </div>
    );
  }
}

export default App;
