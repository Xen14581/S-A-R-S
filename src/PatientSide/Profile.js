import React,{useState,useEffect} from 'react'
import Tabs from './Tabs'
import axios from 'axios'
import './Profile.css'
import {getUser} from '../Utilities/UserServices'
import DocTabs from '../DoctorSide/DocTabs'
import AdminTabs from '../AdminSide/AdminTabs'
import Default from '../default.jpg'
function Profile() {
    const [oldPassword,setOldPassword] = useState("")
    const [newPassword,setNewPassword] = useState("")
    const user = getUser()
    const name = `${user.first_name} ${user.last_name}`
    const [spec,setSpec] = useState('')
    console.log(user)
    useEffect(async()=>{
            if(user.role==='d'){let data = await axios.get(`http://localhost:8080/getDoctor/${user.id}`,{headers:{
            "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Authorization",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "PUT, DELETE, POST, GET, OPTIONS",
            "Authorization":`Bearer ${sessionStorage.getItem('token')}`
 }}).then((res)=>{
     let response = res.data
     setSpec(response.specialty)
 })}
        },[setSpec])
    const changePassword=()=>{
         const data = {
        'username':user.email,
        'password':oldPassword
     }
    axios.post("http://localhost:8080/authenticate",data)
    .then(res=>{
       const data = {
      'id':user.id,
      'first_name':user.first_name,  
      'last_name':user.last_name,
      'gender':user.gender,
      'dob':user.dob,
      'email':user.email,
      'password':newPassword,
      'ph_no':user.ph_no,
      'role':user.role,  
    }
     axios.post('http://localhost:8080/addUser',data).then((res)=>{
         alert("Password Changed successfully")
     })   
    })
    .catch(er=>{
      alert("The given Password is incorrect")
    })
}   


    
return (
        
        <div className = "profile">
            {user.role==="p"?(
                <Tabs/>
            ):(user.role==="a"?(
            <AdminTabs/>):(<DocTabs/>))}
            <div className="profile__creds">
            <div className="profile__dp">
            <img src ={Default} alt = "profile picture" />
            
            </div>
            <div className="profile__name">
            <p><strong>Name:</strong>{user.role==='d'?(<p>Dr.{name}</p>):(name)}</p>
            </div>
            {user.role==='d'?(<div className="profile__name"> <p><strong> Specialization:</strong> {spec}</p> </div>):(<div></div>)}
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