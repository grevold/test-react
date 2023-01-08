import { useState, useEffect } from "react";

import { Header } from "../../components/Header/Header";

import s from "./ExampleUseEffect.module.css";

export function ExampleUseEffect() {
  const [state, setState] = useState({
    firstValue: "",
    secondValue: "",
  });

  useEffect(
    function () {
      console.log(state.firstValue.length);
    },
    [state.firstValue]
  );

  function firstInputChange(event) {
    const input = event.target;
    setState((prevState) => ({
      ...prevState,
      firstValue: input.value,
    }));
  }

  function secondInputChange(event) {
    const input = event.target;
    setState((prevState) => ({
      ...prevState,
      secondValue: input.value,
    }));
  }

  return (
    <div>
      <Header />
      <div className={s.container}>
        <input onChange={firstInputChange} className={s.input} />
        <input onChange={secondInputChange} className={s.input} />
      </div>
    </div>
  );
}
