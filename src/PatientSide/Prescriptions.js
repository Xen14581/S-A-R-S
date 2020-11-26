import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Tabs from './Tabs'
import './Prescriptions.css'
import { getUser } from '../Utilities/UserServices'
function Prescriptions() {
    const [appointments,setAppointments] = useState([])
    const [meds,setMeds] = useState([])
    const [render,setRender] = useState([])
    const auth = `Bearer ${sessionStorage.getItem('token')}`
    const user = getUser()
    useEffect(async()=>{
        let data = await axios.get('http://localhost:8080/getAppointments',{headers:{
            "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Authorization",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "PUT, DELETE, POST, GET, OPTIONS",
            "Authorization": auth
 }}).then((res)=>{
     let response = res.data
   setAppointments(
       response.filter((r)=>{
          return r.p_id === user.id
       })
       )
})
    },[setAppointments,auth])
    useEffect(async()=>{
        let data = await axios.get('http://localhost:8080/getMedications',{headers:{
            "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Authorization",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "PUT, DELETE, POST, GET, OPTIONS",
            "Authorization": auth
 }}).then((res)=>{
     let response = res.data
    setMeds(response)
})
    },[setMeds,auth])

useEffect(()=>{
    setRender(
        meds.filter((med)=>{
            return appointments.some((app)=>{
                return app.a_id === med.a_id
            })
        })
    )
   
},[appointments,setRender,meds])
    return (
        <div className="prescriptions">
            <Tabs/>
        </div>
    )
}

export default Prescriptions
