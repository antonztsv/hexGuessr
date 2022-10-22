import React from "react";

const Guesses = ({ onClick, colors }) => {
  return (
    <div className="guess">
      <button onClick={onClick}>{colors[0]}</button>
      <button onClick={onClick}>{colors[1]}</button>
      <button onClick={onClick}>{colors[2]}</button>
    </div>
  );
};

export default Guesses;
