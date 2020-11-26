import React from 'react'
import Tabs from './Tabs'
import './Home.css'
function Home() {
  console.log(sessionStorage.getItem('token'))
  return (
       
    <div className="home">
      <Tabs/>
  <div className="home__body">
  </div>
</div>
    )
}

export default Home
