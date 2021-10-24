import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const AppRouter = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <p>Home</p>
          </Route>
        </Switch>
    </Router>
  );
}

export default AppRouter;