import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { AuthContext } from "./context/auth";
import { Provider } from "react-redux";

import store from "./store";
import Home from "./components/Core/Home";
import About from "./components/Core/About";
import Resale from "./components/Resale/Resale";
import Details from "./components/Resale/Details";
import DetailsLiked from "./components/Resale/DetailsLiked";
import DetailsCompare from "./components/Resale/DetailsCompare";
import Compare from "./components/Core/Compare";
import Mortage from "./components/Mortage/Mortage";
import TopNavBar from "./components/Navbar/TopNavBar.js";
import Favourite from "./components/Core/Favourite";
import Profile from "./components/Core/Profile";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <div className="body">
            <TopNavBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/resale" component={Resale} />
              <Route exact path="/mortage" component={Mortage} />
              <Route exact path="/about" component={About} />
              <Route exact path="/details" component={Details} />
              <Route exact path="/detailsLiked" component={DetailsLiked} />
              <Route exact path="/detailsCompare" component={DetailsCompare} />
              <Route exact path="/compare" component={Compare} />
              <Route exact path="/fav" component={Favourite} />
              <Route exact path="/profile" component={Profile} />
            </Switch>
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
