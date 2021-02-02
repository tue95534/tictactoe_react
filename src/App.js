import React from 'react';
import './App.css';
import Board from "./components/Board";
import Difficulty from './components/Difficulty';
import TheHeader from './components/TheHeader';


function App() {
  return (
    <div className="App">
      <TheHeader />
      <br/><br/>
      <Difficulty />
      <Board />
    </div>
  );
}

export default App;
