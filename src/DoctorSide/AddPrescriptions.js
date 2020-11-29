import React,{useState,useEffect} from 'react'
import axios from 'axios'
import DocTabs from './DocTabs'
import { getUser } from '../Utilities/UserServices'

function AddPrescriptions({match}) {
 
    const [appointments,setAppointments] = useState([])
    const [meds,setMeds] = useState([])
    const [dosage,setDosage] = useState('')
    const [name,setName] = useState('')
    const [strength,setStrength] = useState('')
    const [unique,setUnique] = useState([])
    const auth = `Bearer ${sessionStorage.getItem('token')}`
    const user = getUser()
    const [render,setRender] = useState([])
    useEffect(async()=>{
         await axios.get('http://localhost:8080/getAppointments',{headers:{
            "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Authorization",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "PUT, DELETE, POST, GET, OPTIONS",
            "Authorization": auth
 }}).then((res)=>{
     let response = res.data
   setAppointments(
       response.filter((r)=>{
          return r.p_id === parseInt(match.params.p_id) && r.d_id === user.id
       })
       )
})
    },[setAppointments,auth])

    useEffect(()=>{
        appointments.map(async (app)=>{
        let data =     await axios.get('http://localhost:8080/getMedications/'+app.a_id,{headers:{
            "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Authorization",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "PUT, DELETE, POST, GET, OPTIONS",
            "Authorization": auth
     }})
     let response = await data.data
     setMeds(oldArray=>{
        return[...oldArray,response]
         })
        })
    },[setMeds,appointments,auth])
        useEffect(()=>{
        appointments.map(async (app)=>{
        let data =     await axios.get('http://localhost:8080/getMedications/'+app.a_id,{headers:{
            "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Authorization",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "PUT, DELETE, POST, GET, OPTIONS",
            "Authorization": auth
     }})
     let response = await data.data
     setMeds(oldArray=>{
        return[...oldArray,response]
         })
        })
    },[setMeds,appointments,auth])

useEffect(()=>{
    appointments.map((app)=>{
       return meds.filter((med)=>{
          return med.filter((m)=>{
               if(app.a_id === m.a_id)
           {
               const data = {
                   slot: app.a_datetime,
                   med:med
               }
               setRender((oldArray)=>{
                   return [...oldArray,data]
               })
           }
          })
          
          
       })
    })
},[appointments,meds,setRender]) 

    const table = (val)=>{      
        
        return(
                   <tr>
                    <td>
                        {val.slot}
                    </td>
                    <td>    
                        <table id ="meds">
                            <th>MedName</th>
                            <th>Dosage</th>
                            <th>Strength</th>
                            {val.med.map((v)=>{
                                return(
                                    <tr>
                                        <td>{v.med_name}</td>
                                        <td>{v.med_dosage}</td>
                                        <td>{v.med_str}</td>
                                    </tr>
                                )
                            })}
                        </table>
                    </td>
                   </tr>
               )
   
    }
    
    const post =()=>{
        let data ={
            a_id:parseInt(match.params.a_id),
            med_name:name,
            med_dosage:dosage,
            med_str:strength,
        }
        axios.post('http://localhost:8080/addMedications',data,{headers:{
            "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Authorization",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "PUT, DELETE, POST, GET, OPTIONS",
            "Authorization": auth
     }}).then(()=>{
         window.location.reload(true)
     })
    }
    useEffect(()=>{
       setUnique(
           render.filter ( (ele, ind) => ind ===render.findIndex( elem => elem.slot === ele.slot))
       )
   },[setUnique,render])


    return (
        <>
        <div className="prescriptions">
            <DocTabs/>
            <div className="prescriptions__meds">
                 <table id="patients">
                            <th >Appointment</th>
                        <th>Meds</th>
                         {unique.map(table)}                                                                                
                         </table> 
            </div>
        <div className ="addmeds">
          <input type="text" placeholder="Medname" onChange={e=>setName(e.target.value)} />  
            <input type ="text" placeholder="Dosage" onChange={e=>setDosage(e.target.value)}/>
            <input type ="text" placeholder="Strength" onChange={e=>setStrength(e.target.value)}/>
            <button type="reset" onClick={post}> Post</button>
        </div>
        </div>
    </>
    )
}

export default AddPrescriptions
