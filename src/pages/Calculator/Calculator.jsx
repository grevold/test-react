import { Header } from "../../components/Header/Header";
import { useRef } from "react";

import s from "./Calculator.module.css";

const MATH_OPERATIONS = {
  ["+"]: (x, y) => x + y,
  ["-"]: (x, y) => x - y,
  ["*"]: (x, y) => x * y,
  ["/"]: (x, y) => x / y,
};

export function Calculator() {
  const firstNumber = useRef();
  const secondNumber = useRef();
  const operator = useRef();
  const result = useRef();

  const getResult = () => {
    const number1 = firstNumber.current;
    const number2 = secondNumber.current;
    const operation = operator.current;
    const resultOfOperation = result.current;

    resultOfOperation.innerHTML = MATH_OPERATIONS[operation.value](
      parseInt(number1.value),
      parseInt(number2.value)
    );
  };

  return (
    <div>
      <Header />
      <h1>Калькулятор</h1>
      <div className={s.root}>
        <input className={s.input} ref={firstNumber} />
        <select className={s.select} ref={operator}>
          {Object.keys(MATH_OPERATIONS).map((operation) => (
            <option key={operation}>{operation}</option>
          ))}
        </select>
        <input className={s.input} ref={secondNumber} />
        <button className={s.button} onClick={getResult}>
          =
        </button>
        <div className={s.result} ref={result} />
      </div>
    </div>
  );
}
