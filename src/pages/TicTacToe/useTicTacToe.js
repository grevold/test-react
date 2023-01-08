import { useState } from "react";

export function useTicTacToe() {
  const [state, setState] = useState({
    isFirstPlayer: true,
    cells: ["", "", "", "", "", "", "", "", ""],
    isGameFinished: false,
    cellsToPaint: [],
    scorePlayer1: 0,
    scorePlayer2: 0,
  });

  function click(event) {
    const button = event.target;
    const value = button.innerHTML;
    const index = button.getAttribute("data-index");
    if (value !== "") return;
    setState((prevState) => {
      const newCellsArray = [...prevState.cells];
      newCellsArray[index] = prevState.isFirstPlayer ? "X" : "0";
      return {
        ...prevState,
        isFirstPlayer: !prevState.isFirstPlayer,
        cells: newCellsArray,
        isGameFinished: checkIsGameFinished(newCellsArray),
      };
    });
  }

  function cleanPlayground() {
    setState((prevState) => {
      return {
        ...prevState,
        isFirstPlayer: true,
        cells: ["", "", "", "", "", "", "", "", ""],
        isGameFinished: false,
        cellsToPaint: [],
      };
    });
  }

  function checkIsGameFinished(cells) {
    for (let i = 0; i < cells.length; i++) {
      if (cells[i] !== "") {
        const currentCell = cells[i];
        //По горизонтали
        if (
          currentCell === cells[i + 1] &&
          currentCell === cells[i + 2] &&
          i + 2 !== 3 &&
          i + 2 !== 6
        ) {
          setState((prevState) => {
            if (currentCell === "X") {
              return {
                ...prevState,
                scorePlayer1: prevState.scorePlayer1 + 1,
                cellsToPaint: [i, i + 1, i + 2],
              };
            }
            return {
              ...prevState,
              scorePlayer2: prevState.scorePlayer2 + 1,
              cellsToPaint: [i, i + 1, i + 2],
            };
          });
          return true;
        }
        //По диагонали вправо
        if (currentCell === cells[i + 4] && currentCell === cells[i + 8]) {
          setState((prevState) => {
            if (currentCell === "X") {
              return {
                ...prevState,
                scorePlayer1: prevState.scorePlayer1 + 1,
                cellsToPaint: [i, i + 4, i + 8],
              };
            }
            return {
              ...prevState,
              scorePlayer2: prevState.scorePlayer2 + 1,
              cellsToPaint: [i, i + 4, i + 8],
            };
          });
          return true;
        }
        //По диагонали влево
        if (currentCell === cells[i + 2] && currentCell === cells[i + 4]) {
          setState((prevState) => {
            if (currentCell === "X") {
              return {
                ...prevState,
                scorePlayer1: prevState.scorePlayer1 + 1,
                cellsToPaint: [i, i + 2, i + 4],
              };
            }
            return {
              ...prevState,
              scorePlayer2: prevState.scorePlayer2 + 1,
              cellsToPaint: [i, i + 2, i + 4],
            };
          });
          return true;
        }
        //В столбик
        if (currentCell === cells[i + 3] && currentCell === cells[i + 6]) {
          setState((prevState) => {
            if (currentCell === "X") {
              return {
                ...prevState,
                scorePlayer1: prevState.scorePlayer1 + 1,
                cellsToPaint: [i, i + 3, i + 6],
              };
            }
            return {
              ...prevState,
              scorePlayer2: prevState.scorePlayer2 + 1,
              cellsToPaint: [i, i + 3, i + 6],
            };
          });
          return true;
        }
      }
    }
    console.log(state);

    return false;
  }

  return {
    state,
    click,
    cleanPlayground,
  };
}
