import React from "react";
import {
  Card as MuiCard,
  CardMedia,
  CardContent,
  Typography
} from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

const Card = ({ movie }) => {
  const [imgError, setImgError] = React.useState(false);

  const handleError = () => {
    setImgError(true);
  };

  const posterUrl =
    imgError || !movie.poster_path
      ? "./src/assets/defaultPoster.jpg"
      : `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const formattedRating = movie.vote_average ? movie.vote_average.toFixed(1) : "N/A";


  return (
    <MuiCard
      variant="outlined"
      sx={{
        margin: "10px",
        width: "300px",
        height: "500px",
        display: "inline-block",
        overflow: "scroll",
        alignItems: "center",
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardMedia
        sx={{ height: "240px" }}
        image={posterUrl}
        alt={movie.title}
        title={movie.title}
        onError={handleError}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" aria-label="Movie Title">
          {movie.title}
        </Typography>
        <Typography variant="body2" sx={{ display: 'inline-block', alignItems: 'end' }}>
          Rating: 
          <StarIcon style={{ color: 'gold', opacity: 0.85 }} fontSize="inherit" />
          {formattedRating}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>Overview 
          <div>
            {movie.overview}
          </div>
        </Typography>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
