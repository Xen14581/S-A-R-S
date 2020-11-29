import React,{useState,useEffect} from 'react'
import Tabs from './Tabs'
import axios from 'axios'
import {getUser} from '../Utilities/UserServices'
import {Link} from 'react-router-dom'
function BookedApp() {
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
        
         axios.get(`http://localhost:8080/getDoctor/${r.d_id}`,{headers:{
            "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Authorization",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "PUT, DELETE, POST, GET, OPTIONS",
            "Authorization": auth
 }}).then((a)=>{
     let data = {
        a_id:r.a_id,
        d_id:a.data.id,
        slot:r.a_datetime,
        status:r.status,
        doctor:`${a.data.first_name} ${a.data.last_name}` 
     }
     if(r.p_id ===user.id){setAppointments((oldArray)=>{
         return [...oldArray,data]
     })}
     
 })
                
    })
 })
    },[auth,setAppointments])
const table=(val)=>{
    return(
        <tr>
            <td>{val.slot}</td>
           <td > {val.doctor}</td>
           <td>{val.status}</td>
           <td>
               {val.status ==="Cancelled by Doctor"|| val.status==='Cancelled By Patient'?('You cant change the status'):(<>
                 <input name="status" id="2" type="radio" value="Cancelled By Patient"  onClick={e=>changeStatus(val,e.target.value)} />Cancel
           
               </>)}
               
           </td>
        </tr>
    )
}
const changeStatus=(app,value)=>{
    const data ={
        'a_id':app.a_id,
        'a_datetime':app.slot,
        'p_id':user.id,
        'd_id':app.d_id,
        'status':value
    }
    if(window.confirm("Are you sure you want to cancel the appointment")){axios.post('http://localhost:8080/addAppointments',data,{headers:{"Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Authorization",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "PUT, DELETE, POST, GET, OPTIONS",
            "Authorization": auth
 }}).then(()=>{
     window.location.reload(true)
 })}
}

return (
        <div className = 'ahistory'>    
            <Tabs/>
            <div className="ahistory__patients">
                <table id="patients">
                            <th >Appointment</th>
                        <th>Doctor</th>
                        <th>Current Status</th>
                        <th>Status Change</th>
                        {appoinments.map(table)}
                    </table>              
            </div>
        </div>
    )
}

export default BookedApp
