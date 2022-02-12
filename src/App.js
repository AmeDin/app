import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import { AuthContext } from "./context/auth";
import { Provider } from 'react-redux';

import store from './store';
import Home  from './components/Core/Home';
import About  from './components/Core/About';
import Resale  from './components/Resale/Resale';
import Rental  from './components/Rental/Rental';
import Mortage  from './components/Mortage/Mortage';
import TopNavBar  from './components/Navbar/TopNavBar.js';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App"> 
      <Router>
          <div className="body">
            <TopNavBar/>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/resale' component={Resale} />
              <Route exact path='/rental' component={Rental} />
              <Route exact path='/mortage' component={Mortage} />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
      </Router>
      </div>
    </Provider>
  );
}

export default App;
