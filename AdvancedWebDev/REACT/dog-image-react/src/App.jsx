import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Card, CardContent, Stack, Button } from '@mui/material';
import DogImageCard from './components/DogImageCard';

const App = () => {
  
  // Consume API
  // HTTP request
  // Click a button
  // Get random dog image

  // Built in fetch skeleton
  // fetch(endpoint) -- 1. Utilize endpoint
  // .then(response) -- 2. Get a response
  // .then(parsedData) -- 3. Do something with the data
  // .catch(error) -- 4. Handle Errors

  // Axios skeleton
  // axios.method(endpoint) -- Step 1
  // .then(response) -- Step 2 and 3
  // .then(error) -- Step 4

  const [dogImage, setDogImage] = useState("")

  const endpoint = `https://dog.ceo/api/breeds/image/random`;

  const handleClick = () => {
    axios
    .get(endpoint)
    .then(response => setDogImage(response.data.message))
    .catch(error => {
      console.log('Error', error.message)
    })
  }

  useEffect(() => {
    axios
    .get(endpoint)
    .then(response => setDogImage(response.data.message) )
    .catch(error => {
      console.log('Error', error.message)
    })
  },[]);
  
  return (
    <>
      <h1>Random Dog Image Generator</h1>
      <Button size="large" variant="contained" color="success" onClick={handleClick}> Click me</Button>
      <DogImageCard imagePath={dogImage} imageAlt={dogImage.message}/>
      <Stack direction="row" spacing={2}>
        <Button color="secondary">Secondary</Button>
        <Button size="large" variant="contained" color="success">Success</Button>
        <Button variant="contained" color="warning">Error</Button>
      </Stack>
    </>
  )
}

export default App