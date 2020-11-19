
import React,{useState} from 'react'
import Tabs from './Tabs'
import axios from 'axios'
import './Profile.css'
import {getUser} from '../Utilities/UserServices'
function Profile() {
    const [oldPassword,setOldPassword] = useState("")
    const [newPassword,setNewPassword] = useState("")
    const user = getUser()
    const name = `${user.first_name} ${user.last_name}`
    const changePassword=()=>{
         const data = {
        'username':user.email,
        'password':oldPassword
     }
    axios.post("http://localhost:8080/authenticate",data)
    .then(res=>{
        alert("Password Changed") 
        
    })
    .catch(er=>{
      alert("The given Password is incorrect")
    })

        }   
    return (
        
        <div className = "profile">
            <Tabs/>
            <div className="profile__creds">
            <div className="profile__dp">
            <img src ="https://www.journalnetwork.org/assets/default-profile-54364fb08cf8b2a24e80ed8969012690.jpg" alt = "profile picture" />
            </div>
            <div className="profile__name">
            <p><strong>Name:</strong> {name}</p>
            </div>
            <div className="profile__dateOfBirthandPh_no" >
                <p><strong>Date of Birth:</strong> {user.dob}</p>
    <p><strong>Phone Number:</strong>+91 {user.ph_no}</p>
            </div>
            <div className="profile__email">
    <p><strong>E-mail:</strong>{user.email}</p>
            </div>
            <div className = 'profile__changePassword'>
                <h3>Change Password :</h3>
                <input type="password" placeholder="Enter Older Password" onChange={e=>setOldPassword(e.target.value)} />
                <input type="password" placeHolder="Enter New Password" onChange={e=>setNewPassword(e.target.value)}/>
                <button onClick={changePassword}>Change</button>
            </div>
            </div>
            </div>
    )
}

export default Profile