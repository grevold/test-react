import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage";

function App() {


  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
