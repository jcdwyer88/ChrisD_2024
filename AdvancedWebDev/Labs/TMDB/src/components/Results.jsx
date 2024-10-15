import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { useLocation } from "react-router-dom";

const Results = () => {
    const token = process.env.REACT_APP_VITE_TMDB_TOKEN;
    const location = useLocation();
    const searchTerm = location.state?.searchTerm || ""; // Access the search term from location state
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const fetchMovies = async () => {
    setLoading(true); // Start loading
      try {
        const response = searchTerm === ""
          ? await axios.get(
              `https://api.themoviedb.org/3/movie/now_playing`,
              {
                params: {
                  api_key: token,
                  language: "en-US",
                  page: 1,
                },
              }
            )
          : await axios.get(
              `https://api.themoviedb.org/3/search/movie`,
              {
                params: {
                  query: searchTerm,
                  api_key: token,
                  include_adult: "false",
                  language: "en-US",
                  page: 1,
                },
              }
            );

        setMovies(response.data.results);
        // setError(null);
      } catch (err) {
        setError("Failed to fetch movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchTerm, token]); // Dependency array includes searchTerm

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>;

  return (
    <div>
      {movies.length > 0 ? (
        movies.map((movie) => <Card key={movie.id} movie={movie} />)
      ) : (
        <div>No movies found.</div>
      )}
    </div>
  );
};

export default Results;
