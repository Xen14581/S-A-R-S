import React from 'react'
import './DocTabs.css'
import {NavLink,useHistory,Link} from 'react-router-dom'
import {removeUserSession} from '../Utilities/UserServices'
function DocTabs() {
  const history = useHistory()
  const logout=()=>{
    removeUserSession();
    history.push('/login')
  }
    return (
            <div className="doctabs">
              <div className="home__header">
         <NavLink to="/dochome">
         <div className="home__headerLogo" ><a href="#">SA&RS</a></div>
 </NavLink>
 <div className="home__headerOptions">

   <NavLink to="/profile" activeClassName="selected"> <a className="options__anchors" href="#">Profile</a></NavLink>
   <Link > <a className="options__anchors" href="">Appointments Details</a></Link>
    <Link><a className="options__anchors" href="#">Appointments History</a></Link>
       <button onClick={logout} className="options__anchors">Logout</button>
  </div>
  </div>
        </div>
    )
}

export default DocTabs
