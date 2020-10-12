import React from "react";
import Appointments from "./Appointments"
import LoginPage from "./LoginPage";
import "./App.css";
import Homepage from "./Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./SignUp";
import Home from './Home';
function App() {
  return (

    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Homepage} />

          <Route path="/signup" exact component={SignUp} />

          <Route path="/login" exact component={LoginPage} />
        <Route path="/home" exact component={Home}/>
        </Switch>
        <Switch>
          <Route path='/appointments' exact component={Appointments}/>
        </Switch>
      </div>
    </Router>
   );
}

export default App;
