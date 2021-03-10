import './app.css';
import Home from './Components/Home/Home';
import Card from './Components/Card/Card';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {

  return (
    <Router>
      <Switch>
        <Route path="/card">
          <Card/>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
