import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
          <Header/>
            <h1>hello guys</h1>
          </Route>

          <Route path="/login">
            <h1>login page</h1>
          </Route>

          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
