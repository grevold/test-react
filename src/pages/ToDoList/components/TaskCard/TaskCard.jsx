import { typeToday } from "../../constants";

import s from "./TaskCard.module.css";

export function TaskCard({ task, onDelete, onMove, type }) {
  if (type === typeToday) {
    return (
      <div className={s.root_today}>
        <button className={s.delete} onClick={onDelete}>
          X
        </button>
        <h3>{task.header}</h3>
        <span>{task.comment}</span>
        <button className={s.move} onClick={onMove}>
          →
        </button>
      </div>
    );
  }

  return (
    <div className={s.root_tomorrow}>
      <button className={s.move} onClick={onMove}>
        ←
      </button>
      <h3>{task.header}</h3>
      <span>{task.comment}</span>
      <button className={s.delete} onClick={onDelete}>
        X
      </button>
    </div>
  );
}
