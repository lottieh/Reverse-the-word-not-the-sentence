import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/1st Level/Header';
import Explanation from './Components/1st Level/Explanation';
import InputSection from './Components/2nd level/InputSection';

class App extends React.Component {
  state = {
    phrase: "lets eat cheese"
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Explanation />

        <InputSection submitPhraseFunc={this.submitPhrase} />

      </div>
    );
  }
}

export default App;
