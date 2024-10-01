import { useState, useEffect } from 'react'
import axios from 'axios';
import { Table } from './Table';
import '../App.css'

export function App() {
  const [data, setData] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [fetchDataTrigger, setFetchDataTrigger] = useState(false); // New state variable to trigger fetch

  useEffect(() => {
    const fetchData = async () => {
      if (fetchDataTrigger) {
        try {
          const response = await axios.get('https://swapi.dev/api/people/');
          setData(response.data.results);
          setShowTable(true);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setFetchDataTrigger(false); // Reset trigger after fetching
        }
      }
    };

    fetchData();
  }, [fetchDataTrigger]);

  const handleSubmit = () => {
    setFetchDataTrigger(true);
  };

  const handleReset = () => {
    setData([]);
    setShowTable(false);
  };

  return (
    <>
      <div className="card">
        <h1>SWAPI</h1>
        <h2>The Star Wars API</h2>
        <button className='show-table' onClick={handleSubmit}>
          Show Table
        </button>
        <button className="reset-table" onClick={handleReset}>
          Reset Table
        </button>
      </div>
      <div>
        {showTable && <Table data={data} />}
      </div>
    </>
  )
}