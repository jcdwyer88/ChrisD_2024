import { useState } from 'react'

function App() {
  const [selectedFruit, setSelectedFruit] = useState('');
  const fruits = ['Durian', 'Persimmon', 'Cherimoya'];

  return (
    <>
     <div style={{textAlign: 'center'}}>
      <div>
        {fruits.map((fruit) => (
          <button key={fruit} onClick={() => setSelectedFruit(fruit)}>
            {fruit}
          </button>
        ))}
      </div>
      {selectedFruit && <h1>You selected: {selectedFruit}</h1>}
    </div>
    </>
  )
}

export default App;