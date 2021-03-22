import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import styles from "./index.module.scss";
import Home from "./Home";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import "./App.less";
import "./main.scss";

function App() {
  return (
    <div
      className={styles.container}
      style={{ minHeight: "100vh", width: "100vw" }}
    >
      <link
        href="https://fonts.googleapis.com/css?family=Bai+Jamjuree:300,400&display=fallback"
        rel="stylesheet"
      />
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <Home />
          </Route>
          <Route path="/dashboard/:id" children={<Dashboard />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
