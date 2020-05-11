import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Day from "./Day";
import Stats from "./Stats";
import "../styles/app.scss";

export default function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Switch>
          <Route path="/stats">
            <Stats />
          </Route>
          <Route path="/">
            <Day />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
