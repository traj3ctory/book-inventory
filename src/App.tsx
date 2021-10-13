import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeUi from "./views/Home";
import "./style/index.scss";
import LayoutUi from "./components/layout/Layout";

function App() {
  return (
    <LayoutUi>
      <Router>
        <Switch>
          <Route path="/" exact>
            <HomeUi />
          </Route>
        </Switch>
      </Router>
    </LayoutUi>
  );
}

export default App;
