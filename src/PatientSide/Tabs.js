import {useHistory,NavLink} from 'react-router-dom'
import React from 'react'
import './Tabs.css'
import {removeUserSession} from "../Utilities/UserServices"


function Tabs() {

  const history = useHistory()
  const logout=()=>{
    removeUserSession()
    history.push('/login')
  }  
  
  
  return (
        <div className="tabs">
              <div className="home__header">
         <NavLink to="/home">
         <div className="home__headerLogo" ><a href="#">SA&RS</a></div>
 </NavLink>
 <div className="home__headerOptions">

   <NavLink to="/profile" activeClassName="selected"> <a className="options__anchors"  >Profile</a></NavLink>
   <NavLink to="/appointments" activeClassName="selected" > <a className="options__anchors"  >Appointments</a></NavLink>
    <NavLink to='/doctorsnotes' activeClassName="selected" ><a className="options__anchors"  >Notes by Doctor</a></NavLink>
    <NavLink to='/prescriptions'activeClassName="selected" ><a className="options__anchors">Prescriptions</a></NavLink>
    <button onClick={logout} className="options__anchors">Logout</button>

  </div>
  </div>
        </div>
    )
}

export default Tabs