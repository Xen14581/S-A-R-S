import {Avatar} from '@material-ui/core'
import React,{useState} from 'react'
import './Notes.css'
import Tabs from './Tabs'
import Note from "./Note"
import {getUser} from '../Utilities/UserServices'
function Notes() {
const user = getUser()
console.log(user.role)    
const [note,setNote]=useState('')
const postNote=()=>{
    const data = {

    }
    // axios.post('http://localhost8080/addNotes',{headers:{
    //     Authorization: "Bearer" +sessionStorage.getItem('token') 
    // }})
}
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
            <input type="search" placeholder="search notes by doctors"/>
            </div>
            <div className="notes__list">
                {Note.map(notes)}
            </div>
            {user.role==="d"?(
               <div className = "post_notes">
                    <input placeholder="Enter notes.." onChange={e=>setNote(e.target.value)}/>
                    <button onClick={postNote}>Post</button>
                </div>
            
            ):(<div></div>)}
        </div>
    )
}

export default Notes
