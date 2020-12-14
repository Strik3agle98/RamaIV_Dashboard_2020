import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <div style={{ minHeight: "100vh", width: "100vw" }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
