import Greeting from './components/Greeting.jsx';
import UserCard from './components/UserCard.jsx';
import CardContainer from './components/CardContainer.jsx';

const App = () => {

  const cards = [
    {name: 'Bob', age: 20}, 
    {name: 'Charlie', age: 35}, 
    {name: 'Alice', age: 25}
  ];

  // Helper function to sort cards by age
  const sortedCards = cards.sort((a, b) => a.age - b.age);

  const cardArray = sortedCards.map((user, index) => (
    <UserCard key={index} name={user.name} age={user.age} />
  ));
    
  return (
    <div>
      <Greeting name="Chris" />
      <CardContainer children={cardArray} />
    </div>
  )};

export default App;