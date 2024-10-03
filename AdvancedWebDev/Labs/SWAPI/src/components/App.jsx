import { useState } from 'react'
import axios from 'axios';
import { Table } from './Table';
import { Container, Box, Button } from '@mui/material'
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
    <Container fixed sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', paddingTop: '20px' }}>
      <Box sx={{ marginBottom: '20px' }}>
        <div className="title">
          <h1 style={{ margin: 0 }}>SWAPI</h1>
          <h2 style={{ margin: 0 }}>The Star Wars API</h2>
        </div>
      </Box>
      <Box sx={{ marginBottom: '20px' }}>
        <Button variant="contained" className='show-table' onClick={handleSubmit}>
          Show Table
        </Button>
        <Button variant="contained" className="reset-table" onClick={handleReset} style={{ marginLeft: '10px' }}>
          Reset Table
        </Button>
      </Box>
      <Box className='table'>
        {showTable && <Table data={data} />}
      </Box>
    </Container>
  )
}