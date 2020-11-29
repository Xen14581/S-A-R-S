import React,{useState,useEffect} from 'react'
import DocTabs from './DocTabs'
import axios from 'axios'
import './AHistory.css'
import {getUser} from '../Utilities/UserServices'
import {Link} from 'react-router-dom'
function ADetails() {
    const time = new Date()
    const firstday = new Date(time.setDate(time.getDate())).toUTCString();
    const date= firstday.split(' ').slice(1,4).join(' ')
    const user = getUser()
    const [appoinments,setAppointments] = useState([])
    const [filter,setFilter] =useState([])
    const auth = `Bearer ${sessionStorage.getItem('token')}`
    useEffect(async()=>{
     let data = await axios.get('http://localhost:8080/getAppointments',{headers:{
            "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Authorization",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "PUT, DELETE, POST, GET, OPTIONS",
            "Authorization": auth
 }}).then((res)=>{
    let response = res.data
    response.filter((r)=>{
        
         axios.get(`http://localhost:8080/getPatient/${r.p_id}`,{headers:{
            "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Authorization",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "PUT, DELETE, POST, GET, OPTIONS",
            "Authorization": auth
 }}).then((a)=>{
     let data = {
        a_id:r.a_id,
        p_id:a.data.id,
        slot:r.a_datetime,
        status:r.status,
        patient:`${a.data.first_name} ${a.data.last_name}` 
     }
     if(r.d_id ===user.id){setAppointments((oldArray)=>{
         return [...oldArray,data]
     })}
     
 })
                
    })
 })
    },[auth,setAppointments])
    useEffect(()=>{
        setFilter(
            appoinments.filter((app)=>{
                return app.slot.includes(date)
            })
        )
    },[setFilter,appoinments,date])
const table=(val)=>{
    return(
        <tr>
            <td>{val.slot}</td>
           <td > <p style={{color:"white",textDecoration:"none"}}>{val.patient}</p></td>
           <td>{val.status}</td>
           <td>
               {val.status==='Cancelled by Patient'?("You Cant Change the Status"):(
                   <>
            <input name="status" id="1" type="radio" value="Confirmed"  onClick={e=>{changeStatus(val,e.target.value)}} /> Confirm
            <br />
            <input name="status" id="2" type="radio" value="Cancelled By Doctor"  onClick={e=>changeStatus(val,e.target.value)} /> Cancel
            <br />
                </>
               )}

           </td>
            <td>
                {val.status ==='Confirmed'?(
                <>
               <Link to={{
               pathname:`/addnotes/${val.a_id}/${val.p_id}`
           }}> <button>Add Notes</button> </Link>
                </>
                ):(<div></div>)}
                 
            </td>
            <td>
                {val.status ==='Confirmed'?(
                    <Link to={{
                        pathname:`/addprescriptions/${val.a_id}/${val.p_id}`
                    }}>
                    <button>Add Prescriptions</button>
                    </Link>
                    
               ):(<div></div>)}
            </td>
        </tr>
    )
}
const changeStatus=(app,value)=>{
    const data ={
        'a_id':app.a_id,
        'a_datetime':app.slot,
        'd_id':user.id,
        'p_id':app.p_id,
        'status':value
    }
    axios.post('http://localhost:8080/addAppointments',data,{headers:{"Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Authorization",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "PUT, DELETE, POST, GET, OPTIONS",
            "Authorization": auth
 }}).then(()=>{
     window.location.reload(true)
 })
}

return (
        <div className = 'ahistory'>    
            <DocTabs/>
            <div className="ahistory__patients">
                <table id="patients">
                        <th >Appointment</th>
                        <th>Patient</th>
                        <th>Current Status</th>
                        <th>Status Change</th>
                        <th>Add Notes</th>
                        <th>Add Prescriptions</th>  
                        {filter.map(table)}
                    </table>              
            </div>
        </div>
    )}

export default ADetails
