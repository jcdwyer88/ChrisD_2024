import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import { useLocation, Navigate } from "react-router-dom";

const Results = () => {
  const token = process.env.VITE_TMDB_API_KEY;
  const location = useLocation();
  const searchTerm = location.state?.searchTerm || "";
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        if (!token) {
          setError("API token is missing. Please check your configuration.");
          return;
        }
        const response =
          searchTerm === ""
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
            : await axios.get(`https://api.themoviedb.org/3/search/movie`, {
                params: {
                  query: searchTerm,
                  api_key: token,
                  include_adult: "false",
                  language: "en-US",
                  page: 1,
                },
              });

        setMovies(response.data.results);
      } catch (err) {
        console.log(err);
        setError("Authentication failed, failed to fetch movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchTerm, token]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      {movies.length > 0 ? (
        movies.map((movie) => <Card key={movie.id} movie={movie} />)
      ) : (
        <Navigate to="/error" />
      )}
    </div>
  );
};

export default Results;
