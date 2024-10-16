import React from "react";

const Home = () => {
  return (
    <div>
      <h1 style={{
          position: "relative",
          textAlign: "center", 
          top: "50%",
          left: "50%",
          transform: "translate(-50%, 150%)",
          zIndex: 1, 
          fontFamily: "cursive",
          fontStyle: "italic",
          fontSize: "100px"
        }}>Welcome to TMDB</h1>
    </div>
  );
};


export default Home;