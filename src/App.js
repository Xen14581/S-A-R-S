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
import NotesDoctors from "./PatientSide/NotesDoctors"
import AHistory from './DoctorSide/AHistory'
import Prescriptions from './PatientSide/Prescriptions'
import ADetails from './DoctorSide/ADetails'
import AddNotes from './DoctorSide/AddNotes'
import ViewAppointments from './AdminSide/ViewAppointments'
import BookApp from "./PatientSide/BookApp";
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
        <PrivatePatient path='/notes/:d_id' exact component={Notes}/>
          <PrivatePatient path='/doctors/:specialization' exact component={Doctors}/>
          <PrivateRoute path="/profile" exact component ={Profile}/>
          <PrivatePatient path = "/doctorsnotes" exact component = {NotesDoctors}/>
          <PrivatePatient path ='/prescriptions' exact component={Prescriptions}/>
          <PrivatePatient path='/bookappointments/:d_id' component={BookApp}/>
        </Switch>
        <Switch>
          <PrivateDoctor path='/dochome' exact component={DocHome}/>
          <PrivateDoctor path='/appointmenthistory' exact component={AHistory}/>
          <PrivateDoctor path='/appointmentdetails' exact component={ADetails}/>
          <PrivateDoctor path='/addnotes/:a_id/:p_id' exact component={AddNotes} />
                    
        </Switch>
        <Switch>
          <PrivateAdmin path = '/adminhome' exact component={AdminHome}/>
          <PrivateAdmin path="/adddoctors" exact component={AddDoctors}/>
          <PrivateAdmin path="/specialization" exact component={Specialization}/>
          <PrivateAdmin path="/doctorslist/:specialization" exact component ={DoctorsList}/>
          <PrivateAdmin path ="/viewappointments/:d_id" exact component = {ViewAppointments}/>
        </Switch>
      </div>
    </Router> 
   );
}

export default App;
