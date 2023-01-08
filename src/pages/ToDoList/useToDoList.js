import { useState } from "react";
import { typeToday } from "./constants";

export function useToDoList(initialState) {
  const [state, setState] = useState(initialState);

  function onTaskGenerated({ header, comment, time }) {
    const task = {
      header,
      comment,
    };

    setState((prevState) => {
      if (time === typeToday) {
        return {
          todayList: [...prevState.todayList, task],
          tomorrowList: [...prevState.tomorrowList],
        };
      } else {
        return {
          todayList: [...prevState.todayList],
          tomorrowList: [...prevState.tomorrowList, task],
        };
      }
    });
  }

  const deleteTaskToday = (index) => {
    setState((prevState) => {
      return {
        todayList: prevState.todayList.filter((_, i) => i !== index),
        tomorrowList: [...prevState.tomorrowList],
      };
    });
  };

  const deleteTaskTomorrow = (index) => {
    setState((prevState) => {
      return {
        todayList: [...prevState.todayList],
        tomorrowList: prevState.tomorrowList.filter((_, i) => i !== index),
      };
    });
  };

  const moveTaskToTomorrow = (index) => {
    setState((prevState) => {
      const task = prevState.todayList[index];
      return {
        todayList: prevState.todayList.filter((_, i) => i !== index),
        tomorrowList: [...prevState.tomorrowList, task],
      };
    });
  };

  const moveTaskToToday = (index) => {
    setState((prevState) => {
      const task = prevState.tomorrowList[index];
      return {
        todayList: [...prevState.todayList, task],
        tomorrowList: prevState.tomorrowList.filter((_, i) => i !== index),
      };
    });
  };

  return {
    state,
    onTaskGenerated,
    deleteTaskToday,
    deleteTaskTomorrow,
    moveTaskToTomorrow,
    moveTaskToToday,
  };
}
