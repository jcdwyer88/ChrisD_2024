import React, { useState } from "react";
import {
  Card as MuiCard,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const Card = ({ movie }) => {
  const [imgError, setImgError] = useState(false);
  const [showOverview, setShowOverview] = useState(false);
  const theme = useTheme();

  const handleError = () => {
    setImgError(true);
  };

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  }));

  const posterUrl =
    imgError || !movie.poster_path
      ? "./src/assets/defaultPoster.jpg"
      : `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const formattedRating = movie.vote_average
    ? movie.vote_average.toFixed(1)
    : "N/A";

  return (
    <MuiCard
      variant="outlined"
      sx={{
        backgroundColor: "darkgrey",
        margin: "5px",
        width: "20vw",
        height: "60vh",
        borderRadius: "16px",
        opacity: "90%",
        display: "inline-block",
        overflow: showOverview ? "scroll" : "hidden",
        alignItems: "center",
        transition: "transform 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: "80%",
          height: "65%",
          margin: "auto",
          objectFit: "contain",
          mt: "10px",
        }}
        image={posterUrl}
        alt={movie.title}
        title={movie.title}
        onError={handleError}
      />
      <CardContent>
        <Typography
          variant="h6"
          component="div"
          aria-label="Movie Title"
          sx={{ color: theme.palette.text.primary }}
        >
          {movie.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{ display: "inline-flex", alignItems: "center", margin: "5px" }}
        >
          Rating:
          <StarIcon
            style={{ color: "gold", opacity: 0.85, marginLeft: "4px" }}
            fontSize="inherit"
          />
          {formattedRating}
        </Typography>
        <ColorButton
          variant="contained"
          size="small"
          onClick={() => setShowOverview((prev) => !prev)}
          sx={{ margin: "10px", color: theme.palette.secondary.main }}
        >
          {showOverview ? "Hide Overview" : "Show Overview"}
        </ColorButton>
        {showOverview && (
          <>
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.text.primary,
                fontWeight: "bold",
                fontStyle: "italic",
                marginTop: "10px",
              }}
            >
              Overview
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: theme.palette.text.secondary }}
            >
              {movie.overview}
            </Typography>
          </>
        )}
      </CardContent>
    </MuiCard>
  );
};

export default Card;
