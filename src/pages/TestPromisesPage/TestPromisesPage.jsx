import s from "./TestPromisesPage.module.css";
import { Header } from "../../components/Header/Header";
import { resources } from "../../resources";
import { useState, useRef } from "react";

// Данная компонента может находиться в следующиъ состояниях:
// 1. {status: 'init'} - когда мы еще не начали скачивать картинки
// 2. {status: 'loading} - когда мы скачиваем картинки
// 3. {status: 'error', errorText} - когда не удалось скачать какую-то картинку
// 4. {status: 'success', srcs, urls} - успех

export function TestPromisesPage() {
  const { title, fetchImagesText, defaultImagesSrcs } = resources.PromisesPage;
  const [state, setState] = useState({ status: "init" });
  const ref = useRef();

  //Функция, которая принимает адрес картинки и возвращает соответствующий html-элемент img
  function fetchImage(url) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.crossOrigin = "anonymous";
      image.src = url;
      image.onload = () => resolve(url);
      image.onerror = (err) =>
        reject(`Не удалось скачать картинку по ссылке: "${url}"`);
    });
  }

  function handleClick() {
    const textarea = ref.current;
    if (!textarea) return;
    const text = textarea.value;
    const urls = text.split("\n").filter((url) => url !== "");
    const promise = Promise.all(urls.map(fetchImage));
    setState({ status: "loading" });
    promise.then(
      (srcs) =>
        setState({
          status: "success",
          srcs,
          urls,
        }),
      (error) =>
        setState({
          status: "error",
          errorText: error,
        })
    );
  }

  // Если картинки в процессе скачивания
  if (state.status === "loading") {
    return (
      <div className={s.root}>
        <Header />
        <h1 className={s.title}>{title}</h1>
        <h1>Загрузка...</h1>
      </div>
    );
  }

  // Если произошла ошибка
  if (state.status === "error") {
    return (
      <div className={s.root}>
        <Header />
        <h1 className={s.title}>{title}</h1>
        <h1>Ошибка: {state.errorText}</h1>
      </div>
    );
  }

  // Если картинки успешно скачались
  if (state.status === "success") {
    return (
      <div className={s.root}>
        <Header />
        <h1 className={s.title}>{title}</h1>
        <textarea defaultValue={state.urls.join("\n")} ref={ref} className={s.textArea} />
        <button className={s.button} onClick={handleClick}>
          {fetchImagesText}
        </button>
        <ul className={s.container}>
          {state.srcs.map((src) => (
            <li key={src} className={s.imageContainer}>
              <img src={src} className={s.image}/>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // По умолчанию отрисовываем init-состояние
  return (
    <div className={s.root}>
      <Header />
      <h1 className={s.title}>{title}</h1>
      <textarea
        defaultValue={defaultImagesSrcs.join("\n")}
        ref={ref}
        className={s.textArea}
      />
      <button className={s.button} onClick={handleClick}>
        {fetchImagesText}
      </button>
      <div className={s.container}></div>
    </div>
  );
}
