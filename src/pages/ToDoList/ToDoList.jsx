import { Header } from "../../components/Header/Header";
import { resources } from "../../resources";
import { TaskGenerator } from "./components/TaskGenerator/TaskGenerator";
import { TaskCardsList } from "./components/TaskCardsList/TaskCardsList";
import { useToDoList } from "./useToDoList";

import s from "./ToDoList.module.css";

export function ToDoList() {
  const { title, initialState } = resources.ToDoList;
  const {
    state,
    onTaskGenerated,
    deleteTaskToday,
    deleteTaskTomorrow,
    moveTaskToTomorrow,
    moveTaskToToday,
  } = useToDoList(initialState);

  return (
    <div>
      <Header />
      <h1 className={s.title}>{title}</h1>
      <TaskGenerator
        onTaskGenerated={onTaskGenerated}
        className={s.taskGenerator}
      />
      <div className={s.tasks}>
        <TaskCardsList
          title="Сегодня"
          type="today"
          tasks={state.todayList}
          onDelete={deleteTaskToday}
          onMove={moveTaskToTomorrow}
        />
        <TaskCardsList
          title="Завтра"
          type="tomorrow"
          tasks={state.tomorrowList}
          onDelete={deleteTaskTomorrow}
          onMove={moveTaskToToday}
        />
      </div>
    </div>
  );
}
