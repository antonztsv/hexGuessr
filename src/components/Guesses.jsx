import React from "react";

import Button from "./Button";

const Guesses = ({ onClick, colors }) => {
  return (
    <div className="guess">
      <Button onClick={onClick} text={colors[0]} />
      <Button onClick={onClick} text={colors[1]} />
      <Button onClick={onClick} text={colors[2]} />
    </div>
  );
};

export default Guesses;
