import React ,{useEffect,useState} from 'react'
import axios from 'axios'
import Tabs from './Tabs'
import {getUser} from '../Utilities/UserServices'
import { Link } from 'react-router-dom'
function NotesDoctors() {
    
    const [search,setSearch] = useState('')
    const [appointments,setAppointments] =useState([])
    const [doclist,setDoclist] = useState([])
    const [doctorsList,setDoctorsList] = useState([])
    const [filteredList,setFilteredList] = useState([])
    const auth = `Bearer ${sessionStorage.getItem('token')}`
    const user = getUser()  
    useEffect(async()=>{
       let data = await axios.get('http://localhost:8080/getAppointments',{headers:{
            "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Authorization",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "PUT, DELETE, POST, GET, OPTIONS",
            "Authorization": auth
 }});
 let response = await data.data;
 setAppointments(response)
 return response
   },[auth,setAppointments])
  console.log(appointments)
   useEffect(async()=>{
     let data = await axios.get('http://localhost:8080/getDoctors',{headers:{
            "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Authorization",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "PUT, DELETE, POST, GET, OPTIONS",
            "Authorization": auth
 }}); 
 let response = await data.data;
 setDoclist(response)
 return response
   },[setDoclist,auth])


  useEffect(()=>{
      setDoctorsList(
            doclist.filter((doc)=>{
                return appointments.some((app)=>{
                    return app.d_id === doc.id && app.p_id === user.id ;
                })
            })
      )
  },[setDoctorsList,doclist,appointments])

  useEffect(()=>{
    setFilteredList(
      doctorsList.filter((doctor=>{
        doctor.first_name.toLowercase().includes(search.toLowerCase) || doctor.last_name.toLowerCase.includes(search.toLowerCase())
      }))
    )
  },[setFilteredList,search])


   function card(val){   
    return(

           <div className="cards">
              <div className="doctors__card">
		              <img className="doctors__cardImage" src="https://www.journalnetwork.org/assets/default-profile-54364fb08cf8b2a24e80ed8969012690.jpg"/>
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
                    {doclist.map(card)}                                
                  </div>                       
        </div>
    )
}

export default NotesDoctors
