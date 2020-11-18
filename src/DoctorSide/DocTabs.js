import React from 'react'
import './DocTabs.css'
import {Link,useHistory} from 'react-router-dom'
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
         <Link to="/dochome">
         <div className="home__headerLogo" ><a href="#">SA&RS</a></div>
 </Link>
 <div className="home__headerOptions">

   <Link> <a className="options__anchors" href="#">Profile</a></Link>
   <Link > <a className="options__anchors" href="">Appointments Details</a></Link>
    <Link><a className="options__anchors" href="#">Appointments History</a></Link>
       <button onClick={logout} className="options__anchors">Logout</button>
  </div>
  </div>
        </div>
    )
}

export default DocTabs
