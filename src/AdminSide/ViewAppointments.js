import React,{useState,useEffect} from 'react'
import AdminTabs from './AdminTabs'
import axios from 'axios'
import {getUser} from '../Utilities/UserServices'
function ViewAppointments({match}) {
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
         status: r.status,
        slot:r.a_datetime,
        patient:`${a.data.first_name} ${a.data.last_name}` 
     }
     if(r.d_id ===parseInt(match.params.d_id)){setAppointments((oldArray)=>{
         return [...oldArray,data]
     })}
     
 })
                
    })
 })
    },[auth,setAppointments])

const table=(val)=>{
    return(
        <tr>
            <td>{val.slot} ({val.status})</td>
            <td>{val.patient}</td>
        </tr>
    )
}

return (
        <div className = 'ahistory'>
            <AdminTabs/>
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

export default ViewAppointments
