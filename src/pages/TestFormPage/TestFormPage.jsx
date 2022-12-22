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
    input.style = 'color: black';
  };

  function handleInputChange(event) {
    const input = refInput.current;
    if (!input) return;
    const text = event.target.value;
    // Если текст короткий
    if(text.length < 4) {
      input.style = 'color: red';
    }
    // Если текст средней длины
    if(text.length >= 5 && text.length < 8) {
      input.style = 'color: yellow';
    }
    // Если текст длинный
    if(text.length >= 8) {
      input.style = 'color: green';
    }
  }

  return (
    <div>
      <Header />
      <div className={s.container}>
        <input onChange={handleInputChange} ref={refInput} className={s.input} />
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
