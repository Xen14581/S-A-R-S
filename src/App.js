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
import Notes from '../src/PatientSide/Notes';
import PrivateRoute from '../src/Utilities/PrivateRoute';
import Profile from '../src/PatientSide/Profile'
function App() {
  return (
     <Router>
      <div className="App">
        
         <Switch>
          <Route path="/" exact component={Homepage} />
            
          <Route path="/signup" exact component={SignUp} />

          <Route path="/login" exact component={LoginPage} />
          </Switch>
        <Switch>
        <PrivateRoute path="/home" exact component={Home}/>
        <PrivateRoute path='/appointments' exact component={Appointments}/>
        <PrivateRoute path='/notes' exact component={Notes}/>
          <PrivateRoute path='/doctors' exact component={Doctors}/>
          <PrivateRoute path="/profile" exact component ={Profile}/>
        </Switch>
        <Switch>
          <PrivateRoute path='/dochome' exact component={DocHome}/>
        </Switch>
      </div>
    </Router> 
   );
}

export default App;
