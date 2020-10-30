import {Avatar} from '@material-ui/core'
import React from 'react'
import './Notes.css'
import Tabs from './Tabs'
function Notes() {
    return (
        <div className="notes">
            <div className="notes__header">
            <Tabs/>
            <input type="search" placeholder="search notes by doctors"/>
            </div>
            <div className="notes__list">
                <div className="note">
                    <div className="note__doctor">
                            <Avatar/>
                            <p>ABC XYZ</p>
                            <p>,23 Oct,2020</p>    
                    </div>
                    <div className="note__content">
                        <p>
                           Velit magna incididunt sint exercitation et dolore exercitation dolor adipisicing. Et aliquip officia irure ipsum et aliqua mollit Lorem elit ullamco ea tempor pariatur. Nostrud proident est exercitation cupidatat est reprehenderit incididunt ea minim amet.
                        </p>
                    </div>
                </div>
                <div className="note">
                    <div className="note__doctor">
                            <Avatar/>
                            <p>ABC XYZ</p>
                            <p>,23 Oct,2020</p>    
                    </div>
                    <div className="note__content">
                        <p>
                           Velit magna incididunt sint exercitation et dolore exercitation dolor adipisicing. Et aliquip officia irure ipsum et aliqua mollit Lorem elit ullamco ea tempor pariatur. Nostrud proident est exercitation cupidatat est reprehenderit incididunt ea minim amet.
                        </p>
                    </div>
                </div>
                <div className="note">
                    <div className="note__doctor">
                            <Avatar/>
                            <p>ABC XYZ</p>
                            <p>,23 Oct,2020</p>    
                    </div>
                    <div className="note__content">
                        <p>
                           Velit magna incididunt sint exercitation et dolore exercitation dolor adipisicing. Et aliquip officia irure ipsum et aliqua mollit Lorem elit ullamco ea tempor pariatur. Nostrud proident est exercitation cupidatat est reprehenderit incididunt ea minim amet.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notes
