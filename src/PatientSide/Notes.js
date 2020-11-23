import {Avatar} from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import './Notes.css'
import Tabs from './Tabs'
import {getUser} from '../Utilities/UserServices'
import axios from 'axios'

function Notes({match}) {
const user = getUser()
const auth = `Bearer ${sessionStorage.getItem('token')}`
const[getNote,setGetNote] = useState([])
const [getAppointments,setGetAppointments] = useState([])
const [note,setNote]=useState('')
const [filterUser,setFilterUser]=useState([])
useEffect(async()=>{
     let data = await axios.get('http://localhost:8080/getNotes',{headers:{
            "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Authorization",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "PUT, DELETE, POST, GET, OPTIONS",
            "Authorization": auth
 }});
    let response = await data.data
    setGetNote(response)
},[setGetNote,auth])

useEffect(async()=>{
     let data = await axios.get('http://localhost:8080/getAppointments',{headers:{
            "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Authorization",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "PUT, DELETE, POST, GET, OPTIONS",
            "Authorization": auth
 }});
    let response = await data.data;
    setGetAppointments(response);
       setFilterUser(
           getAppointments.filter((app) =>
        app.p_id.includes(user.id)
      ));
    
    },[setGetAppointments,setFilterUser,auth])
    useEffect(()=>{
        setFilterUser(
            getNote.filter((notes)=>{
                return getAppointments.some((app=>{
                    return app.d_id===match.params.d_id && app.p_id === user.id
                }))
            })
        )
    })
function notes(val)
    {
        return(
            <div className="note">
                    <div className="note__doctor">
                            <Avatar/>
                            <p>{val.name}</p>
        <p>,{val.day}/{val.month}/{val.year}</p>    
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
                {filterUser.map(notes)}
            </div>
            {user.role==="d"?(
               <div className = "post_notes">
                    <input placeholder="Enter notes.." onChange={e=>setNote(e.target.value)}/>
                    <button>Post</button>
                </div>
            
            ):(<div></div>)}
        </div>
    )
}

export default Notes
