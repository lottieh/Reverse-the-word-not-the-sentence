import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/1st Level/Header';
import Explanation from './Components/1st Level/Explanation';

class App extends React.Component {
  render(){
  return (
    <div className="App">
     

        <Header/>
        <Explanation/>

    
    </div>
  );
}}

export default App;
