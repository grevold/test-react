import cn from "classnames";
import {useState} from 'react';

import s from "./CheckBoxGroup.module.css";

// options - это массив объектов вида {title, id}
export function CheckBoxGroup({ options, className }) {
  const [activeOptionId, setActiveOptionId] = useState(options[0].id); // state в данном случае - это айдишник опции: которая выбрана на данный момент времени

  return (
    <ul data-active-option={activeOptionId} className={cn(s.root, className)}>
      {options.map(({ title, id }) => (
        <li key={id} className={s.row}>
          <input
            onClick={() => setActiveOptionId(id)}
            id={id}
            type="checkbox"
            checked={id === activeOptionId}
          />
          <p className={s.title}>{title}</p>
        </li>
      ))}
    </ul>
  );
}
