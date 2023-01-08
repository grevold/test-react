import { TaskCard } from "../TaskCard/TaskCard";

import s from "./TaskCardsList.module.css";

export function TaskCardsList({ title, type, tasks, onDelete, onMove }) {
  return (
    <div className={s.root}>
      <h2>{title}</h2>
      <ul>
        {tasks.map((task, index) => (
          <TaskCard
            task={task}
            onDelete={() => onDelete(index)}
            onMove={() => onMove(index)}
            type={type}
          />
        ))}
      </ul>
    </div>
  );
}
