import React from "react";

const Home = () => {
  return (
    <div
      sx={{
        backgroundImage: 'url("../assets/theater.jpeg")',
        height: "100vh",
        backgroundSize: "cover",
      }}
    >
      <h1>Welcome to TMDB</h1>
      <button onClick={() => navigate("/results")}>
        Show Now Playing Movies
      </button>
    </div>
  );
};

export default Home;
