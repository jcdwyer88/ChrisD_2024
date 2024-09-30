import { useState } from 'react'
import './App.css'

const randomNum = () => Math.floor(Math.random() * 10 + 1);

const App = () => {
  
  const [randomIndex, setRandomIndex] = useState(0);
  const [isWinning, setIsWinning] = useState(false);

  const generateNumber = () => {
    const newNumber = randomNum();
    setRandomIndex(newNumber);
    setIsWinning(newNumber === 7);
  };

  return (
    <div className="app">
      <div className="title">
        <h1>Your number is: </h1>
      </div>
      <div>
        <button style={{visibility: !isWinning ? "visible" : "hidden"}} 
        onClick={generateNumber}>Generate Number</button>
      </div>
      <h3>Your number is: {randomIndex}</h3>
      {isWinning && <h1>You Win!</h1>}
    </div>
  );
}

export default App
