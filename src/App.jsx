import { useEffect, useState } from "react";

import Color from "./components/Color";
import Guesses from "./components/Guesses";
import Header from "./components/Header";
import Scorelist from "./components/Scorelist";
import Score from "./components/Scorelist";
import Status from "./components/Status";

function App() {
  const [color, setColor] = useState(null);
  const [allColors, setAllColors] = useState(Array(3));
  const [guesses, setGuesses] = useState(0);
  const [status, setStatus] = useState(null);
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);

  useEffect(() => {
    const localHighscore = localStorage.getItem("highscore");
    if (localHighscore) {
      setHighscore(localHighscore);
    }

    newColors();
  }, []);

  useEffect(() => {
    setColor(allColors[getRandomInt(3)]);
  }, [allColors]);

  useEffect(() => {
    if (guesses === 2) {
      setStatus("Wrong again, keep trying!");
      setTimeout(() => {
        setStatus(null);
      }, 2500);
      setScore(0);
      setGuesses(0);

      newColors();
    }
  }, [guesses]);

  const generateColor = () => {
    const color = Math.floor((Math.random() * 0xffffff) << 0)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase();
    return `#${color}`;
  };

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  const newColors = () => {
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.disabled = false;
    });

    const color1 = generateColor();
    const color2 = generateColor();
    const color3 = generateColor();

    setAllColors([color1, color2, color3]);
  };

  const checkGuess = (e) => {
    const guess = e.target.innerText;

    if (guess === color) {
      setGuesses(0);
      setStatus("Correct!");
      setTimeout(() => {
        setStatus(null);
      }, 2500);

      setScore((prevScore) => {
        const newScore = prevScore + 1;

        if (newScore > highscore) {
          setHighscore(newScore);
          localStorage.setItem("highscore", newScore);
        }

        return newScore;
      });

      newColors();
    } else {
      setGuesses(guesses + 1);
      setStatus("Wrong!");
      setTimeout(() => {
        setStatus(null);
      }, 2500);

      e.target.disabled = true;
    }
  };

  return (
    <div>
      <Header text={"hexGuessr"} />
      <Scorelist score={score} highscore={highscore} />
      <Guesses onClick={checkGuess} colors={allColors} />
      <Color color={color} />
      <Status text={status} />
    </div>
  );
}

export default App;
