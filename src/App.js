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
import AdminHome from '../src/AdminSide/AdminHome'
import AddDoctors from '../src/AdminSide/AddDoctors'
import Specialization from '../src/AdminSide/Specialization'
import DoctorsList from '../src/AdminSide/DoctorsList'
import PrivateDoctor from '../src/Utilities/PrivateDoctor'
import PrivateAdmin from '../src/Utilities/PrivateAdmin'
import PrivatePatient from '../src/Utilities/PrivatePatient'
import NotesDoctors from "./PatientSide/NotesDoctors";
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
        <PrivatePatient path="/home" exact component={Home}/>
        <PrivatePatient path='/appointments' exact component={Appointments}/>
        <PrivatePatient path='/notes/:doc_id' exact component={Notes}/>
          <PrivatePatient path='/doctors/:specialization' exact component={Doctors}/>
          <PrivateRoute path="/profile" exact component ={Profile}/>
          <PrivateRoute path = "/doctorsnotes" exact component = {NotesDoctors}/>
        </Switch>
        <Switch>
          <PrivateDoctor path='/dochome' exact component={DocHome}/>
        </Switch>
        <Switch>
          <PrivateAdmin path = '/adminhome' exact component={AdminHome}/>
          <PrivateAdmin path="/adddoctors" exact component={AddDoctors}/>
          <PrivateAdmin path="/specialization" exact component={Specialization}/>
          <PrivateAdmin path="/doctorslist/:specialization" exact component ={DoctorsList}/>
        </Switch>
      </div>
    </Router> 
   );
}

export default App;
