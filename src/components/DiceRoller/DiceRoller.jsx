import { useState } from "react";
import s from "./DiceRoller.module.css";

function getRandomIntValueFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function DiceRoller({ images, buttonText }) {
  const [state, setState] = useState([0, 0]);
  const clickButton = () => {
    setState(() => [
      getRandomIntValueFromInterval(0, 5),
      getRandomIntValueFromInterval(0, 5),
    ]);
  };

  return (
    <div className={s.root}>
      <div className={s.diceContainer}>
        <img className={s.image} src={images[state[0]]} />
        <img className={s.image} src={images[state[1]]} />
      </div>
      <button className={s.button} onClick={clickButton}>
        {buttonText}
      </button>
    </div>
  );
}
