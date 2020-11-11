import {Avatar} from '@material-ui/core'
import React from 'react'
import './Notes.css'
import Tabs from './Tabs'
import Note from "./Note"

function Notes() {
    
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
        </div>
    )
}

export default Notes
