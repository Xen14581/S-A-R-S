import {useHistory,Link} from 'react-router-dom'
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
         <Link to="/home">
         <div className="home__headerLogo" ><a href="#">SA&RS</a></div>
 </Link>
 <div className="home__headerOptions">

   <Link to="/profile"> <a className="options__anchors" >Profile</a></Link>
   <Link to="/appointments"> <a className="options__anchors">Appointments</a></Link>
    <Link to='/notes'><a className="options__anchors" >Notes by Doctor</a></Link>
    <Link><a className="options__anchors">History</a></Link>
    <button onClick={logout} className="options__anchors">Logout</button>

  </div>
  </div>
        </div>
    )
}

export default Tabs
