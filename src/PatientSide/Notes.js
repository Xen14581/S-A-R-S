import {Avatar} from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import './Notes.css'
import Tabs from './Tabs'
import {getUser} from '../Utilities/UserServices'
import axios from 'axios'

function Notes({match}) {
const user = getUser()
const auth = `Bearer ${sessionStorage.getItem('token')}`
const[note,setNote] = useState([])
const [appointments,setAppointments] = useState([])
const [filternotes,setFilterNotes] = useState([])
const [filterAppointments,setFilterAppointments] = useState([])
const [doctor,setDoctor] = useState([])
const [render,setRender] = useState([])
useEffect(async()=>{
    let data = await axios.get('http://localhost:8080/getNotes',{headers:{
            "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Authorization",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "PUT, DELETE, POST, GET, OPTIONS",
            "Authorization": auth
 }}).then((res)=>{
   setNote(res.data)
})
},[setNote,auth])

useEffect(async()=>{
    let data = await axios.get('http://localhost:8080/getAppointments',{headers:{
            "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Authorization",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "PUT, DELETE, POST, GET, OPTIONS",
            "Authorization": auth
 }}).then((res)=>{
   setAppointments(res.data)
})
},[setAppointments,auth])
console.log(appointments)
useEffect(()=>{
 setFilterAppointments(
     appointments.filter((app)=>{ 
        return app.d_id === parseInt(match.params.d_id) && app.p_id=== user.id
     })
 )   
},[setFilterAppointments,appointments])
useEffect(async()=>{
  let data = await axios.get(`http://localhost:8080/getDoctor/${match.params.d_id}`,{headers:{
            "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Authorization",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "PUT, DELETE, POST, GET, OPTIONS",
            "Authorization": auth
 }}).then((res)=>{
   setDoctor(res.data)
})  
},[setDoctor,auth])


useEffect(()=>{
    setFilterNotes(
        note.filter((fa)=>{
            return note.some((n)=>{
                return n.a_id === fa.a_id
            })
        })
    )
},[setFilterNotes,filterAppointments,note])
useEffect(()=>{ 
    filterAppointments.some((app)=>{
                return filternotes.some((n)=>{
                if(n.a_id=== app.a_id){ 
                    let data = {
                        note: n.note,
                        slot:app.a_datetime
                        
                    } 
                    setRender([data])
                }   
        })
    })
    

},[setRender,filterAppointments,filternotes])
function notes(val)
    {
        return(
            <div className="note">
                    <div className="note__doctor">
                            <Avatar src = {doctor.img} alt=""/>
                            <p>{doctor.first_name} {doctor.last_name}</p>
        <p>,{val.slot}</p>    
                    </div>
                    <div className="note__content">
                        <p>
                            {val.note}
                        </p>
                    </div> 
                </div>
        )
    } 
    
    
    
    return (
        <div className="notes">
            <div className="notes__header">
            <Tabs/>
                </div>
            <div className="notes__list">
                {render.map(notes)}                
            </div>
            
                </div>
            
    )
}

export default Notes
