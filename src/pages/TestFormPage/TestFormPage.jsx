import s from "./TestFormPage.module.css";
import { Header } from "../../components/Header/Header";

import { useRef } from "react";

export function TestFormPage() {
  const refInput = useRef();

  const alertMessage = () => {
    const input = refInput.current;
    if (!input) return;
    alert(input.value);
  };

  const clearInput = () => {
    const input = refInput.current;
    if (!input) return;
    input.value = "";
  };

  return (
    <div>
      <Header />
      <div className={s.container}>
        <input ref={refInput} className={s.input} />
        <button onClick={alertMessage} className={s.button}>
          Вывести сообщение
        </button>
        <button onClick={clearInput} className={s.button}>
          Очистить
        </button>
      </div>
    </div>
  );
}
