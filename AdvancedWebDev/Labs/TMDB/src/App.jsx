import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { About } from './components/About'
import { Contact } from './components/Contact'
import axios from 'axios'
import Button from '@mui/material/Button'
import MovieCard from './components/MovieCard'
import { useState } from 'react'
import './App.css'

function App() {

  const [movies, setMovies] = useState([])
  const baseUrl = "https://www.themoviedb.org/3/"
  const handleClick = () => {
    console.log("Clicked");
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/movie/now_playing',
      params: {language: 'en-US', page: '1'},
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer 1b235de75a938768ce06f3ad06556b23'
      }
    };

    axios(options)
    .then(response => {
      console.log(response)
      let movieArray = response.data.results.map((movie) => {
        return <MovieCard newMovie = {movie} />
      })
      setMovies(movieArray)
    })
    .catch(err => console.log(err))
  }

  return (
    <>
      <Router>
        <div className='App'>
          <div className="container" s>
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            <hr />
          </div>
          <div className="container">
            <Routes>
              <Route path="/home" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
            </Routes>
          </div>
        </div>
      </Router>
      <div className="container">
        <Button variant="contained" color="success" onClick={handleClick}>Now Playing</Button>
      </div>
      {movies}
    </>
  )
}

export default App
