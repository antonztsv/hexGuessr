import React from "react";
import Score from "./Score";

const Scorelist = ({ highscore, score }) => {
  return (
    <div>
      <Score text="Highscore" value={highscore} />
      <Score text="Score" value={score} />
    </div>
  );
};

export default Scorelist;
