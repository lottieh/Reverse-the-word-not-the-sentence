import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/1st Level/Header';
import Explanation from './Components/1st Level/Explanation';
import InputSection from './Components/2nd level/InputSection';
import OutputSection from './Components/2nd level/OutputSection';

class App extends React.Component {
  state = {
    phrases: [
      { id: 1, description: 'lets eat some cheese'},
    ]
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Explanation />

        <InputSection submitPhraseFunc={this.submitPhrase} />
        <OutputSection />
        

      </div>
    );
  }
}

export default App;
