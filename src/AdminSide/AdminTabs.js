import React from 'react'
import {removeUserSession} from '../Utilities/UserServices'
import {NavLink,useHistory} from 'react-router-dom'
function AdminTabs() {
    const history = useHistory()
  const logout=()=>{
    removeUserSession();
    history.push('/login')
  }
    return (
            <div className="doctabs">
              <div className="home__header">
         <NavLink to="/adminhome">
         <div className="home__headerLogo" ><a href="#">SA&RS</a></div>
 </NavLink>
 <div className="home__headerOptions">

   <NavLink to="/profile" activeClassName='selected'> <a className="options__anchors" href="#">Profile</a></NavLink>
   <NavLink to="/adddoctors" activeClassName='selected'> <a className ="options__anchors" href="">Add Doctors</a></NavLink>
   <NavLink to="/specialization" activeClassName='selected' > <a className="options__anchors" href="">Doctor's List</a></NavLink>
       <button onClick={logout} className="options__anchors">Logout</button>
  </div>
  </div>
        </div>
    )
}

export default AdminTabs
