import s from "./GachiSoundPage.module.css";
import { resources } from "../../resources";

const click = (url) => {
  const newAudio = new Audio();
  newAudio.src = url;
  newAudio.play();
};

export function GachiSoundPage() {
  const { title, buttons } = resources.GachiSoundPage;

  return (
    <div className={s.root}>
      <h1 className={s.title}>{title}</h1>
      <div className={s.container}>
        {buttons.map(({ title, src }) => (
          <button key={title} className={s.button} onClick={() => click(src)}>
            {title}
          </button>
        ))}
      </div>
    </div>
  );
}
