import React,{useState} from 'react'
import axios from "axios";
import AdminTabs from './AdminTabs'
import './AddDoctors.css'

function AddDoctors(){
  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [phoneNumber,setPhoneNumber] = useState("")
  const [password,setPassword]=useState("");
  const[dob,setDob]=useState("")
  const[gender,setGender]=useState("")
  const[email,setEmail]= useState("")
  const[specialization,setSpecialization]=useState('') 
  const[exp,setExp] = useState(0)
  const [fees,setFees] = useState(0)
  const adddoctor=()=>{
   if(firstName!=='' || lastName!==0 || fees===0 || gender!=='' || dob!=="" && password!=='' || email!=='' || phoneNumber !==''||specialization!==''){const data = {
      'first_name':firstName,  
      'last_name':lastName,
      'gender':gender,
      'dob':dob,
      'email':email,
      'password':password,
      'ph_no':phoneNumber,
      'role':'d'         
    }
   const login={
      'username':email,
      'password':password
    }
    
    axios.post('http://localhost:8080/addUser',data).then(()=>{
    axios.post('http://localhost:8080/authenticate',login).then(res=>{

      const doctor ={
        'id':res.data.user.id,
        'first_name':firstName,  
      'last_name':lastName,
      'ph_no':phoneNumber ,
      'specialty':specialization,
      'experience':exp,
      'fees': fees
    } 
     axios.post('http://localhost:8080/addDoctor',doctor).then(()=>{
       alert("Doctor has been added")
     })
    })
  })}
}
  return (
    <>
      <div className="adddoctors__background">
      <AdminTabs/>
      
      <div className="adddoctors">
        <h1>Add Doctor</h1>

        <div className="adddoctors__creds">
          <input type="text" placeholder="First Name" onChange={e=>setFirstName(e.target.value)}  />
          <input type="text" placeholder="Last Name" onChange={e=>setLastName(e.target.value)} />
        </div>
        <div className ="adddoctors__creds">
            <input list = "specs" placeholder="Specialization" onChange={e=>setSpecialization(e.target.value)}/>
            <datalist id ="specs">
                 <option value="Dentist"/>
                 <option value="Dietician"/>
                 <option value="Physician"/>
                 <option value="Gynecologist"/>
                 <option value="Orthopedist"/>
                 <option value="Pediatrician"/>
                 <option value="Physiotherepist"/>
                 <option value="Surgeon"/>
            </datalist>
            <input type = 'text' placeholder="Experience" onChange={(e)=>{setExp(e.target.value)}}/>
        </div>
        <div className="adddoctors__creds">
            <input placeholder="Fees" onChange={(e)=>{setFees(e.target.value)}}/>
        </div>
        <div className="adddoctors__creds">
          <input type="email" placeholder="E-Mail" onChange={e=>setEmail(e.target.value)}/>
          <input  
            type="tel"
            placeholder="Mobile No."
            onChange={e=>setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="adddoctors__creds">
          <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
        </div>
        <div className="adddoctors__creds">
          <p>Date of Birth:</p>
          <input type="date" onChange={e=>setDob(e.target.value)} />
        </div>
        <div className="adddoctors__creds">
          <p>Gender:</p>

            <input name="gender" id="1" type="radio" value="m"  onClick={e=>setGender(e.target.value)} /> Male
            <br />
            <input name="gender" id="2" type="radio" value="f"  onClick={e=>setGender(e.target.value)} /> Female
            <br />
            <input name="gender" id="3" type="radio" value="o"  onClick={e=>setGender(e.target.value)} /> Other
        </div>
            <div className="adddoctors__button">
          <button type ="reset" onClick={adddoctor}>Add Doctor</button>
        </div>
      </div>
    </div>
    </>
  );
}
export default AddDoctors;
