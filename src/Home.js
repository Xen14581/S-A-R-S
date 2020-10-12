import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom';
function Home() {
    return (
    
    <div className="home">
      <div className="home__header">
         <div className="home__headerLogo" ><a href="#">SARS</a></div>
 <div className="home__headerOptions">

   <Link> <a className="options__anchors" href="#">Profile</a></Link>
   <Link to="/appointments"> <a className="options__anchors" href="">Appointments</a></Link>
    <Link><a className="options__anchors" href="#">Notes by Doctor</a></Link>
    <Link><a className="options__anchors" href="#">History</a></Link>

  </div>
  </div>
  <div className="home__body">
  </div>
</div>
    )
}

export default Home
