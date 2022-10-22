import React from "react";

const Score = ({ text, value }) => {
  return (
    <h3>
      {text}: {value}
    </h3>
  );
};

export default Score;
