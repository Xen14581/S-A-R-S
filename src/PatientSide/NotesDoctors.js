import React ,{useEffect,useState} from 'react'
import axios from 'axios'
import Tabs from './Tabs'
import {getUser} from '../Utilities/UserServices'
import { Link } from 'react-router-dom'
function NotesDoctors() {
    
    const [search,setSearch] = useState('')    
    const [doclist,setDoclist] = useState([]) 
    const auth = `Bearer ${sessionStorage.getItem('token')}`
    const user = getUser()  
    const [notes,setNotes] = useState([])
    const [render,setRender] = useState([])
    const [d_id,setD_id] = useState([])  
    
    useEffect(async()=>{
let data = await axios.get('http://localhost:8080/getNotes',{headers:{
            "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Authorization",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "PUT, DELETE, POST, GET, OPTIONS",
            "Authorization": auth
 }}).then((res)=>{
   setNotes(res.data)
})
},[setNotes,auth])

    
    useEffect(async()=>{ 
      let data = await axios.get('http://localhost:8080/getAppointments',{headers:{
            "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Authorization",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "PUT, DELETE, POST, GET, OPTIONS",
            "Authorization": auth
 }}).then((res)=>{
    res.data.filter((r)=>{

        if(r.p_id === user.id) {setD_id(oldArray=>{
      return [...oldArray, r.d_id]
    })}
    })      

  
 })
},[auth,setD_id])
 
useEffect(async()=>{
let data = await axios.get('http://localhost:8080/getDoctors',{headers:{
            "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Authorization",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "PUT, DELETE, POST, GET, OPTIONS",
            "Authorization": auth
 }}).then((res)=>{
   setDoclist(res.data)
})
},[setDoclist,auth])

useEffect(()=>{
setRender(
  doclist.filter((doc)=>{
    return d_id.indexOf(doc.id) !== -1
  })
)
},[setRender,doclist,d_id])


function card(val){   
    return(

           <div className="cards">
              <div className="doctors__card">
		              <img className="doctors__cardImage" src={val.img} alt= ""/>
		                <div class="doctors__cardInfo">
                      <h4> <strong></strong>Dr.{val.first_name} {val.last_name}</h4>
                      <p><strong>Specialization:</strong> {val.specialty}</p>
                    	    <Link to={{
                                pathname:'/notes/'+val.id,
                                d_id: val.id
                            }}>
                            <button class="doctors__cardButton" type="button">Read Notes</button>
                  	        </Link>
                      </div>
              </div>
            </div>
        );
    }
   
    return (

        
        <div className="doctors">
                <Tabs/> 
            
            
                <div className="appointments__headerSearch">
                    <input 
                    type="search"  
                    placeholder="search Doctors"  
                    onChange={e=>setSearch(e.target.value)}
                 />
                </div>

              <div className="doctor__list">
                    {render.map(card)}                                
                  </div>                       
        </div>
    )
}
export default NotesDoctors