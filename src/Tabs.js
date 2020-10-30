import {Link} from 'react-router-dom'
import React from 'react'
import './Tabs.css'
function Tabs() {
    return (
        <div className="tabs">
              <div className="home__header">
         <Link to="/home">
         <div className="home__headerLogo" ><a href="#">SA&RS</a></div>
 </Link>
 <div className="home__headerOptions">

   <Link> <a className="options__anchors" href="#">Profile</a></Link>
   <Link to="/appointments"> <a className="options__anchors" href="">Appointments</a></Link>
    <Link to='/notes'><a className="options__anchors" href="#">Notes by Doctor</a></Link>
    <Link><a className="options__anchors" href="#">History</a></Link>

  </div>
  </div>
        </div>
    )
}

export default Tabs
