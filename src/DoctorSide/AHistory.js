import React,{useState,useEffect} from 'react'
import DocTabs from './DocTabs'
import axios from 'axios'
import './AHistory.css'
import {getUser} from '../Utilities/UserServices'
function AHistory() {
    const user = getUser()
    const [appoinments,setAppointments] = useState([])
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
        slot:r.a_datetime,
        status: r.status,
        patient:`${a.data.first_name} ${a.data.last_name}` 
     }
     if(r.d_id ===user.id){setAppointments((oldArray)=>{
         return [...oldArray,data]
     })}
     
 })
                
    })
 })
    },[auth,setAppointments])

const table=(val)=>{
    return(
        <tr>
            <td>{val.slot}  ({val.status})</td>
            <td>{val.patient}</td>
        </tr>
    )
}

return (
        <div className = 'ahistory'>
            <DocTabs/>
            <div className="ahistory__patients">
                <table id="patients">
                            <th >Appointment</th>
                        <th>Patient</th>  
                        {appoinments.map(table)}
                    </table>              
            </div>
        </div>
    )
}

export default AHistory
