import { resources } from "../../resources";
import { Slider } from "../../components/Slider/Slider";

import s from "./MainPage.module.css";

export function MainPage() {
  const {title, slides} = resources.MainPage;

  return (
    <div className={s.root}>
      <h1 className={s.title}>{title}</h1>
      <Slider slides={slides}  />
    </div>
  );
}