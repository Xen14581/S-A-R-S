import {Avatar} from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import './AddNotes.css'
import DocTabs from './DocTabs'
import {getUser} from '../Utilities/UserServices'
import axios from 'axios'

function AddNotes({match}) { 
const user = getUser()
const auth = `Bearer ${sessionStorage.getItem('token')}`
const[note,setNote] = useState([])
const [appointments,setAppointments] = useState([])
const [filteraddnotes,setFilterAddNotes] = useState([])
const [render,setRender] = useState([])
const [comment,setComment] = useState('')
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
   setAppointments(res.data.filter(r=>{
        return r.d_id === user.id && r.p_id === parseInt(match.params.p_id)
   }))
})
},[setAppointments,auth])

console.log(appointments)
useEffect(()=>{
    setFilterAddNotes(
        note.filter((fa)=>{
            return appointments.some((n)=>{
                return n.a_id === fa.a_id
            })
        })
    )
},[setFilterAddNotes,appointments,note])
useEffect(()=>{ 
    appointments.some((app)=>{
                return filteraddnotes.some((n)=>{
                if(n.a_id=== app.a_id){ 
                    let data = {
                        note: n.note,
                        slot:app.a_datetime
                        
                    } 
                    setRender(oldArray=>{return [...oldArray,data]})
                }   
        })
    })

},[setRender,appointments,filteraddnotes])

const postNote= ()=>{
    const  a={
        a_id: parseInt(match.params.a_id),
        note: comment
    }
    axios.post('http://localhost:8080/addNotes',a,{headers:{
            "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Authorization",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "PUT, DELETE, POST, GET, OPTIONS",
            "Authorization": auth
 }}).then((res)=>{
     window.location.reload(false);
 })
}


function addnotes(val)
    {
        return(
            <div className="note">
                    <div className="note__doctor">
                            <Avatar src = {user.img} alt=""/>
                            <p>Dr.{user.first_name} {user.last_name}</p>
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
        <div className="addnotes">
            <div className="addnotes__header">
            <DocTabs/>
                </div>
            <div className="addnotes__list">
                {render.map(addnotes)}                
            </div>
            <div className = "addNotes">
            <input type="text" placeholder="Notes" onChange={(e)=>{setComment(e.target.value)}}/>
            <button onClick={postNote}>Post</button>
            </div>
                </div>
            
    )
}

export default AddNotes
