import React,{useEffect,useState} from 'react'
import './BookApp.css'
import axios from 'axios'
import Tabs from './Tabs'
import { getUser } from '../Utilities/UserServices'
function BookApp({match}) {
const [slots,setSlots] = useState([])
const [date,setDate] =useState(0)
const [day,setDay] = useState('')
const curr = new Date()
const today = curr.getDay()
console.log(today)
const array = [{id:1,day:"Monday"},{id:2,day:"Tuesday"},{id:3,day:"Wednesday"},{id:4,day:"Thursday"},{id:5,day:"Friday"},{id:6,day:"Saturday"}]
let firstday =new Date(curr.setDate(curr.getDate() - curr.getDay()));

if(date>=today){
 firstday = new Date(curr.setDate(curr.getDate() - curr.getDay()+ date)).toUTCString();
}
else{
    firstday=new Date(curr.setDate(curr.getDate() - curr.getDay()+7+ date)).toUTCString();
}
const appdate= firstday.split(' ').slice(1,4).join(' ')
const user = getUser()
const auth = `Bearer ${sessionStorage.getItem('token')}`
   

const getData = async(no,val)=>{
    setDate(no)
    setDay(val)
    
     let data = await axios.get(`http://localhost:8080/getSlots/${match.params.d_id}/${val}`,{headers:{
            "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Authorization",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "PUT, DELETE, POST, GET, OPTIONS",
            "Authorization": auth
 }}).then((res)=>{
     setSlots(res.data)
 })
}


const app = (val)=>{

    return (
       
        <button onClick={()=>{bookAppointment(val.slot_start)}}>{val.slot_start} to {val.slot_end}</button>
       
    )
}

const bookAppointment =async(start)=>{

let appointments = []
var datetime = `${appdate} ${start}`
let data = {
    'a_datetime':datetime,
    'd_id':parseInt(match.params.d_id),
    'p_id':user.id,
    'status':'Booked'
}

 if ( window.confirm(`Book an appointment for ${datetime}? `))
 {await axios.get(`http://localhost:8080/getAppointments`,{headers:{
            "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Authorization",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "PUT, DELETE, POST, GET, OPTIONS",
            "Authorization": auth
 }}).then((res)=>{
    let response = res.data
    response.filter((r)=>{
        if(r.d_id === parseInt(match.params.d_id) && r.a_datetime ===datetime && r.status !=='Cancelled By Patient'){
            appointments.push(r)
        }
    })   
}).then((res)=>{
    if(appointments.length === 0 ){
    axios.post('http://localhost:8080/addAppointments',data,{headers:{
            "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Authorization",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "PUT, DELETE, POST, GET, OPTIONS",
            "Authorization": auth
 }}).then((res)=>{
     alert("The appointment has been booked successfully")
 })
}
else{
    alert("The slot is occupied please pick a different slot")
}

})

}
}


const buttons =(val)=>{
    return (
        <a onClick={()=>{getData(val.id,val.day)}}>{val.day}</a>
    )
}
return (
        <div className ="bookapp">
            <Tabs/>
            
                <div className="dropdown">
  <button className="dropbtn">Select day of the week</button>
  <div className="dropdown-content">
    {array.map(buttons)}
  </div>
   </div>
    {slots.length!==0?(
        <div className = "bookapp__slots">
            <h1>{day}</h1>
            <h3>Date: {appdate}</h3>
            <p>Pick a Slot:</p>
            {slots.map(app)}
            </div>
    ):(<div></div>)}

    
        </div>
    )
}

export default BookApp