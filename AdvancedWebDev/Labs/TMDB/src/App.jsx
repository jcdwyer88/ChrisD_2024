import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { Results } from './components/Results'
import axios from 'axios'
import { Button, Container } from '@mui/material'
import MovieCard from './components/MovieCard'
import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { useEffect } from 'react'


function App() {
  const { VITE_TMDB_API_TOKEN } = process.env;
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
        Authorization: `Bearer ${VITE_TMDB_API_TOKEN}`
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
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/results" element={<Results/>} />
        {/* <Route path="/contact" element={<Contact/>} /> */}
      </Routes>
    </Router>
    </>
  )
}

export default App
