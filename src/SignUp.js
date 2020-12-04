import React,{useState} from 'react'
import axios from "axios";
import "./SignUp.css";
import {useHistory} from 'react-router-dom'
function SignUp(){
  const history = useHistory()
  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [phoneNumber,setPhoneNumber] = useState("")
  const [password,setPassword]=useState("");
  const[dob,setDob]=useState("")
  const[gender,setGender]=useState("")
  const[email,setEmail]= useState("")
  const signup=()=>{
    if(firstName!=='' || lastName!==0 || gender!=='' || dob!=="" || password!=='' || email!=='' || phoneNumber !==''){
      const data = {
      'first_name':firstName,  
      'last_name':lastName,
      'gender':gender,
      'dob':dob,
      'email':email,
      'password':password,
      'ph_no':phoneNumber,
      'role':'p'
    }
   const login={
      'username':email,
      'password':password
    }
    
    axios.post('http://localhost:8080/addUser',data).then(()=>{
    axios.post('http://localhost:8080/authenticate',login).then(res=>{
      const patient ={
        'id':res.data.user.id,
        'first_name':firstName,  
      'last_name':lastName,
      'dob' : dob,
      'ph_no':phoneNumber 
    } 
     axios.post('http://localhost:8080/addPatient',patient).then(()=>{
       history.push('/login')
     })
    })
  })}else{
    alert("please fill all the credentials")
  }
  }
  return (
    <>
      <div className="signup__background"></div>
      <div className="signup">
        <h1>Create Account</h1>

        <div className="signup__creds">
          <input type="text" placeholder="First Name" onChange={e=>setFirstName(e.target.value)}  />
          <input type="text" placeholder="Last Name" onChange={e=>setLastName(e.target.value)} />
        </div>
        <div className="signup__creds">
          <input type="email" placeholder="E-Mail" onChange={e=>setEmail(e.target.value)}/>
          <input  
            type="tel"
            placeholder="Mobile No."
            onChange={e=>setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="signup__creds">
          <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
        </div>
        <div className="signup__creds">
          <p>Date of Birth:</p>
          <input type="date" onChange={e=>setDob(e.target.value)} />
        </div>
        <div className="signup__creds">
          <p>Gender:</p>
          
            <input name="gender" id="1" type="radio" value="m"  onClick={e=>setGender(e.target.value)} /> Male
            <br />
            <input name="gender" id="2" type="radio" value="f"  onClick={e=>setGender(e.target.value)} /> Female
            <br />
            <input name="gender" id="3" type="radio" value="o"  onClick={e=>setGender(e.target.value)} /> Other
        </div>
            <div className="signup__button">
          <button onClick={signup}>Sign Up</button>
        </div>
        
      </div>
    </>
  );
}
export default SignUp;