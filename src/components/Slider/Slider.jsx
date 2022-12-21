import { useState } from "react";

import s from "./Slider.module.css";

import cn from "classnames";

export function Slider({ slides }) {
  const [state, setState] = useState(0); //state - текущее состояние компонента (в данном случае, index текущего слайда), setState - функция для обновления состояния, useState - реактовский хук, т.е. функция, которая возвращает State и setState, а принимает в качестве аргумента начальное значение состояния

  const clickPrev = () => {
    if (state === 0) return;
    setState(state - 1);
  };

  const clickNext = () => {
    if (state === slides.length - 1) return;
    setState(state + 1);
  };

  const rowStyles = {
    width: `${slides.length * 100}%`,
    left: `${-100 * state}%`,
  };

  return (
    <div className={s.root}>
      <button className={cn(s.button, s.buttonPrev)} onClick={clickPrev}>
        ←
      </button>
      <ul className={s.row} style={rowStyles}>
        {slides.map((slide) => (
          <li
            key={slide.text}
            style={{
              width: `${100 / slides.length}%`,
              backgroundImage: `url("${slide.image}")`,
            }}
            className={s.slide}
          >
            <span>{slide.text}</span>
          </li>
        ))}
      </ul>
      <ul className={s.navigation}>
        {slides.map((bullet, index) => (
          <li
            key={index}
            className={
              index === state ? cn(s.bullet, s.bulletActive) : s.bullet
            }
            onClick={() => setState(index)}
          />
        ))}
      </ul>
      <button className={cn(s.button, s.buttonNext)} onClick={clickNext}>
        →
      </button>
    </div>
  );
}
