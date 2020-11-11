import React from "react";
import DocHome from "../src/DoctorSide/DocHome"
import Appointments from "../src/PatientSide/Appointments"
import LoginPage from "./LoginPage";
import "./App.css";
import Homepage from "./Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Doctors from '../src/PatientSide/Doctors';
import SignUp from "./SignUp";
import Home from '../src/PatientSide/Home';
import Notes from '../src/PatientSide/Notes'
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
        <Switch>
          <Route path='/dochome' exact component={DocHome}/>
        </Switch>
      </div>
    </Router> 
   );
}

export default App;
