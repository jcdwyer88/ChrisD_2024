import axios from 'axios';
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

export const Results = () => {
    const { VITE_TMDB_API_TOKEN } = process.env;
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const options = {
                    method: 'GET',
                    url: 'https://api.themoviedb.org/3/movie/now_playing',
                    params: { language: 'en-US', page: '1' },
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${VITE_TMDB_API_TOKEN}`,
                    },
                };

                const response = await axios.request(options);
                console.log(response);
                setMovies(response.data.results); // Store the array of movies directly
            } catch (err) {
                console.error(err);
            }
        };

        fetchMovies();
    }, [VITE_TMDB_API_TOKEN]); // Adding the token as a dependency if it might change

    return (
        <>
            {movies.map((movie) => (
                <MovieCard key={movie.id} newMovie={movie} />
            ))}
        </>
    );
};
