import React from 'react'
import Tabs from './Tabs'
import './Home.css'
import axios from 'axios'
function Home() {
  const auth = `Bearer ${sessionStorage.getItem('token')}`
 axios.get('http://localhost:8080/getUsers',{headers:{
   'Authorization' : auth
 }}).then(res=>{
      console.log(res.data)
    }).catch(er=>{
      console.log(er)
    })
  return (
       
    <div className="home">
      <Tabs/>
  <div className="home__body">
  </div>
</div>
    )
}

export default Home
