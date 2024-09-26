import { diceValues } from "./helper";

const Dice = ({ randomIndex }) => {
    return (
      <div className="dice">
        <i className={`fas fa-dice-${diceValues[randomIndex]}`}></i>
      </div>
    );
  };
  
  export default Dice;