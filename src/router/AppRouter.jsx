import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";
import Header from '../components/ui/Header';

const AppRouter = () => {

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/product-details/:id">
          <ProductDetails />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default AppRouter;