import { useState } from 'react';
import Dice from './components/Dice';
import { randomNum } from './components/helper';
import { useEffect } from 'react';
import './App.css';

const App = () => {

  const [randomIndex, setRandomIndex] = useState(randomNum());
  const [randomIndex2, setRandomIndex2] = useState(randomNum());

  const rollDice = () => {
    setRandomIndex(randomNum());
    setRandomIndex2(randomNum());
  }

  useEffect(() => {
    setRandomIndex(randomNum());
    setRandomIndex2(randomNum());
  }, []);

  return (
    <div className="app">
      <div className="title">
        <h1>Roll the Dice!</h1>
      </div>
      <div className="dice">
        <Dice randomIndex={randomIndex} />
        <Dice randomIndex={randomIndex2} />
      </div>
      <div>
        <button className="button" onClick={rollDice}>Roll Dice</button>
      </div>
      <h3>Your roll equals: {randomIndex + randomIndex2 + 2}</h3>
    </div>
  );
};

export default App;