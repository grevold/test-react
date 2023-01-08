import { Header } from "../../components/Header/Header";
import { useState } from "react";
import { useRef } from "react";

import s from "./InputText.module.css";

export function InputText() {
  const refInput = useRef();

  const [state, setState] = useState([]);

  const clickButton = () => {
    const input = refInput.current;
    if (!input) return;
    setState((prevState) => [...prevState, input.value]);
  };

  const deleteClick = (index) => {
    setState((prevState) => prevState.filter((_, i) => i !== index)); // в setState в качестве аргумента передаем функцию, которая показывает, как из старого состояния получить новое (то есть эта функция принимает старое состояние в качестве аргумента и возвращает новое)
  };

  return (
    <div>
      <Header />
      <h1>Input Text</h1>
      <input ref={refInput} />
      <button onClick={clickButton}>Добавить текст</button>
      <div className={s.root}>
        <ul>
          {state.map((text, index) => (
            <li key={index} className={s.list}>
              {text}
              <button onClick={() => deleteClick(index)} className={s.delete}>
                Очистить
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
