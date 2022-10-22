import { useEffect, useState } from "react";

import "./App.css";
import Color from "./components/Color";
import Header from "./components/Header";

function App() {
  const [color, setColor] = useState(null);
  const [allColors, setAllColors] = useState(Array(3));
  const [status, setStatus] = useState(null);

  useEffect(() => {
    newColors();
  }, []);

  useEffect(() => {
    setColor(allColors[getRandomInt(3)]);
  }, [allColors]);

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
      setStatus("Correct!");
      newColors();

      setTimeout(() => {
        setStatus(null);
      }, 2000);
    } else {
      setStatus("Wrong!");
      e.target.disabled = true;

      setTimeout(() => {
        setStatus(null);
      }, 2000);
    }
  };

  return (
    <div>
      <Header text={"hexGuessr"} />
      <div className="guess">
        <button onClick={checkGuess}>{allColors[0]}</button>
        <button onClick={checkGuess}>{allColors[1]}</button>
        <button onClick={checkGuess}>{allColors[2]}</button>
      </div>
      <Color color={color} />
      <p className="status">{status}</p>
    </div>
  );
}

export default App;
