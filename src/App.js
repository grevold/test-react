import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { PageDice } from "./pages/PageDice/PageDice";
import { GachiSoundPage } from "./pages/GachiSoundPage/GachiSoundPage";
import { navigation } from "./resources";
import { TestFormPage } from "./pages/TestFormPage/TestFormPage";
import { TestPromisesPage } from "./pages/TestPromisesPage/TestPromisesPage";
import { CatalogPage } from "./pages/CatalogPage/CatalogPage";
import { InputText } from "./pages/InputText/InputText";
import { ToDoList } from "./pages/ToDoList/ToDoList";
import { TicTacToe } from "./pages/TicTacToe/TicTacToe";
import { Calculator } from "./pages/Calculator/Calculator";
import { ExampleUseEffect } from "./pages/ExampleUseEffect/ExampleUseEffect";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={navigation.MainPage.href} element={<MainPage />} />
        <Route path={navigation.PageDice.href} element={<PageDice />} />
        <Route
          path={navigation.GachiSoundPage.href}
          element={<GachiSoundPage />}
        />
        <Route path={navigation.TestFormPage.href} element={<TestFormPage />} />
        <Route
          path={navigation.TestPromisesPage.href}
          element={<TestPromisesPage />}
        />
        <Route path={navigation.CatalogPage.href} element={<CatalogPage />} />
        <Route path={navigation.InputText.href} element={<InputText />} />
        <Route path={navigation.ToDoList.href} element={<ToDoList />} />
        <Route path={navigation.TicTacToe.href} element={<TicTacToe />} />
        <Route path={navigation.Calculator.href} element={<Calculator />} />
        <Route
          path={navigation.ExampleUseEffect.href}
          element={<ExampleUseEffect />}
        />
        <Route path={"*"} element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
