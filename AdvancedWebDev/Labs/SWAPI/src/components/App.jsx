import { useState } from 'react'
import axios from 'axios';
import { Table } from './Table';
import '../App.css'

export function App() {
  const [data, setData] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const handleSubmit = async () => {
    try {
      const response = await axios.get('https://swapi.dev/api/people/');
      setData(response.data.results);
      setShowTable(true);
  } catch (error) {
      console.error('Error fetching data:', error);
  }
  };

  const handleReset = () => {
    setData([]);
    setShowTable(false);
  };

  return (
    <>
      <h1>SWAPI</h1>
      <h2>The Star Wars API</h2>
      <div className="card">
        <button className='show-table' onClick={handleSubmit}>
          Show Table
        </button>
        <button className="reset-table" onClick={handleReset}>
          Reset Table
        </button>
      </div>
      {showTable && <Table data={data} />}
    </>
  )
}