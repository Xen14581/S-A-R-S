import React from "react";
import Appointments from "./Appointments"
import Tabs from './Tabs'
import LoginPage from "./LoginPage";
import "./App.css";
import Homepage from "./Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Doctors from './Doctors';
import SignUp from "./SignUp";
import Home from './Home';
import Notes from './Notes'
function App() {
  return (
  
     <Router>
      <div className="App">
        
         <Switch>
          <Route path="/" exact component={Homepage} />
            
          <Route path="/signup" exact component={SignUp} />

          <Route path="/login" exact component={LoginPage} />
          </Switch>
        <Switch><Route path="/home" exact component={Home}/>
        <Route path='/appointments' exact component={Appointments}/>
        <Route path='/notes' exact component={Notes}/>
          <Route path='/doctors' exact component={Doctors}/>
        </Switch>
      </div>
    </Router> 
   );
}

export default App;
