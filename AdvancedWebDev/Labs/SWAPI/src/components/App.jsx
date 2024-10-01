import { useState } from 'react'
import axios from 'axios';
import { Table } from './Table';
import '../App.css'

export function App() {
  const [data, setData] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const handleSubmit = () => {
    const endpoint = `https://swapi.dev/api/people/`;

    axios
    .get(endpoint)
    .then(response => setData(response.data.results))
    .then(() => setShowTable(true))
    .catch(error => {
      console.log('Error', error.message)
    })    
  }

  const handleReset = () => {
    setData([]);
    setShowTable(false);
  };

  return (
    <>
      <div className="title">
        <h1>SWAPI</h1>
        <h2>The Star Wars API</h2>
      </div>
      <div>
        <button className='show-table' onClick={handleSubmit}>
          Show Table
        </button>
        <button className="reset-table" onClick={handleReset}>
          Reset Table
        </button>
      </div>
      <div className='table'>
        {showTable && <Table data={data} />}
      </div>
    </>
  )
}