import React from "react";

const ErrorPage = () => {
  return (
    <div>
      <div
        style={{
          position: "relative",
          textAlign: "center",
          height: "80vh",
          overflow: "hidden",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            zIndex: 1,
            fontFamily: "cursive",
            fontStyle: "italic",
          }}
        >
          <h1>Oops! Something went wrong</h1>
          <h2>Please try another movie name</h2>
        </div>
        <img
          src="./src/assets/pumpkin-happy.gif"
          alt="evil pumpkin"
          style={{
            width: "70vw",
            height: "100%",
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 0.2,
          }}
        />
      </div>
    </div>

    
  );
};

export default ErrorPage;

