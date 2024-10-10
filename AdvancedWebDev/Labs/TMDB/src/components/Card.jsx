import React from 'react';
import { Card as MuiCard, CardContent, Typography } from '@mui/material';

const Card = ({ movie }) => {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : './assets/default-poster.jpg'; // Replace with your default image path

  return (
    <MuiCard>
      <img src={posterUrl} alt={movie.title} />
      <CardContent>
        <Typography variant="h5">{movie.title}</Typography>
        <Typography variant="body2">{movie.overview}</Typography>
        <Typography variant="body1">Rating: {movie.vote_average}</Typography>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
