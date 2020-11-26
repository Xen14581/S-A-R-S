import React,{useState,useEffect} from 'react'
import DocTabs from './DocTabs'
import axios from 'axios'
import './AHistory.css'
import {getUser} from '../Utilities/UserServices'
import {Link} from 'react-router-dom'
function ADetails() {
    const time = new Date()
    // const fulldate= `${time.getFullYear()}-${time.getMonth()}-${time.getDate()}`
    const fulldate = '2020-10-26'
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
        patient:`${a.data.first_name} ${a.data.last_name}` 
     }
     if(r.d_id ===1){setAppointments((oldArray)=>{
         return [...oldArray,data]
     })}
     
 })
                
    })
 })
    },[auth,setAppointments])
    useEffect(()=>{
        setFilter(
            appoinments.filter((app)=>{
                return app.slot.includes(fulldate)
            })
        )
    },[setFilter,appoinments,fulldate])
const table=(val)=>{
    return(
        <tr>
            <td>{val.slot}</td>
           <td > <Link to={{
               pathname:`/addnotes/${val.a_id}/${val.p_id}`
           }}><p style={{color:"white",textDecoration:"none"}}>{val.patient}</p></Link></td>
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
                        {filter.map(table)}
                    </table>              
            </div>
        </div>
    )}

export default ADetails
