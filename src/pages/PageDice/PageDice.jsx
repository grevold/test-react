import { resources } from "../../resources";
import { DiceRoller } from "../../components/DiceRoller/DiceRoller";
import { Header } from "../../components/Header/Header";

import s from "./PageDice.module.css";

export function PageDice() {
  const { title, images, buttonText } = resources.PageDice;
  return (
    <div className={s.root}>
      <Header />
      <h1 className={s.title}>{title}</h1>
      <DiceRoller buttonText={buttonText} images={images} />
    </div>
  );
}
