import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";
import { PageDice } from "./pages/PageDice/PageDice";
import {GachiSoundPage} from "./pages/GachiSoundPage/GachiSoundPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/test-react" component={MainPage} />
        <Route exact path="/test-react/dice" component={PageDice} />
        <Route exact path="/test-react/gachi" component={GachiSoundPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
