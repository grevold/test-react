import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { PageDice } from "./pages/PageDice/PageDice";
import { GachiSoundPage } from "./pages/GachiSoundPage/GachiSoundPage";
import { navigation } from "./resources";
import {TestFormPage} from "./pages/TestFormPage/TestFormPage";
import {TestPromisesPage} from "./pages/TestPromisesPage/TestPromisesPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path={navigation.MainPage} element={<MainPage />} />
        <Route path={navigation.PageDice} element={<PageDice />} />
        <Route path={navigation.GachiSoundPage} element={<GachiSoundPage />} />
        <Route path={navigation.TestFormPage} element={<TestFormPage />} />
        <Route path={navigation.TestPromisesPage} element={<TestPromisesPage />} />
        <Route path={"*"} element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
