import { resources } from "../../resources";
import { Header } from "../../components/Header/Header";
import { useTicTacToe } from "./useTicTacToe";
import s from "./TicTacToe.module.css";

export function TicTacToe() {
  const { title } = resources.TicTacToe;
  const { state, click, cleanPlayground } = useTicTacToe();

  return (
    <div>
      <Header />
      <h1 className={s.title}>{title}</h1>
      <div className={s.players}>
        <div className={s.player}>
          <h2 className={s.player1}>Игрок 1</h2>
          <span className={s.score}>{state.scorePlayer1}</span>
        </div>
        <div className={s.player}>
          <h2 className={s.player2}>Игрок 2</h2>
          <span className={s.score}>{state.scorePlayer2}</span>
        </div>
      </div>
      <ul className={s.playground}>
        {state.cells.map((cell, index) => {
          const className = state.cellsToPaint.includes(index)
            ? s.cell_colored
            : s.cell;

          return (
            <li key={index}>
              <button className={className} onClick={click} data-index={index}>
                {cell}
              </button>
            </li>
          );
        })}
      </ul>
      {state.isGameFinished && (
        <h1 className={s.finishTitle}>Игра завершена</h1>
      )}
      <button className={s.buttonClean} onClick={() => cleanPlayground()}>
        Очистить поле
      </button>
    </div>
  );
}
