import React, {useState} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthContext } from "./context/auth";

import Home  from './components/Core/Home';
import TopNavBar  from './components/Navbar/TopNavBar.js';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [authTokens, setAuthTokens] = useState();
  
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }
  return (
    <div className="App"> 
    <TopNavBar/>
    {/* <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
          <Route exact path="/" component={Home} />
      </Router>
    </AuthContext.Provider> */}
    </div>
  );
}

export default App;
