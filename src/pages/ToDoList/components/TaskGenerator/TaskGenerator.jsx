import { useRef } from "react";
import cn from "classnames";
import { typeToday, typeTomorrow } from "../../constants";

import s from "./TaskGenerator.module.css";

// onTaskGenerated - эта функция, которая будет вызываться, когда новый такс был создан
export function TaskGenerator({ onTaskGenerated, className }) {
  const ref = useRef(null);

  function clickAddNewTask() {
    const root = ref.current;

    // На тот случай, если мы в верстку забыли добавить соответствующий элемент
    if (!root) {
      console.log("Вы забыли добавить root в компоненту TaskGenerator");
      return;
    }

    const taskName = root.querySelector("#taskName");
    const taskComment = root.querySelector("#taskComment");
    const taskTime = root.querySelector("#taskTime");

    if (!taskName || !taskComment || !taskTime) {
      console.log(
        "Вы забыли добавить taskName || taskComment || taskTime в компоненту TaskGenerator"
      );
      return;
    }

    const header = taskName.value;
    const comment = taskComment.value;
    const time = taskTime.value;

    onTaskGenerated({
      header,
      comment,
      time,
    });
  }

  return (
    <div ref={ref} className={cn(s.root, className)}>
      <h2>Создайте задачу:</h2>
      <h3>Название:</h3>
      <input id={"taskName"} />
      <h3>Комментарий:</h3>
      <textarea className={s.comment} id={"taskComment"} />
      <h3>Когда?</h3>
      <select id={"taskTime"}>
        <option value={typeToday}>Сегодня</option>
        <option value={typeTomorrow}>Завтра</option>
      </select>
      <button className={s.buttonGenerate} onClick={clickAddNewTask}>
        Создать задачу
      </button>
    </div>
  );
}
