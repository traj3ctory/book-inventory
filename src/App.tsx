import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomeUi from "./views/Home";
import LayoutUi from "./components/layout/Layout";
import Store from "./context/GlobalStore";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/index.scss";

function App() {

  return (
    <Store>
      <LayoutUi>
        <Router>
          <Switch>
            <Route path="/" exact>
              <HomeUi />
            </Route>
          </Switch>
        </Router>
      </LayoutUi>
      <div className="d-none">Book-Inventory application making use of ice and fire api</div>
    </Store>
  )
}

export default App;
