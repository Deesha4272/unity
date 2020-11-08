import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Login from "./Login";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";


function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/home" exact component={Home}/>
            <Route path="/contact" exact component={Contact}/>
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
