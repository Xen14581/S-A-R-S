import React,{useState,UseEffect} from 'react'
import axios from "axios";
import "./SignUp.css";
import {Link} from 'react-router-dom'
function SignUp() {
  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [phoneNumber,setPhoneNumber] = useState("")
  const [password,setPassword]=useState("");
  const[dob,setDob]=useState("")
  const[gender,setGender]=useState("m")
  const[email,setEmail]= useState("")
   
  const signup=()=>{
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
    axios.post('http://localhost:8080/addUser',data)
    .then(console.log(data))
  }
//  { 
//     try{
//         let result = await fetch('http://localhost:8080/getUsers',{
//           method:'post',
//           mode:'no-cors',
//           headers:{
//             'Accept':'application/json',
//             'Content-type':'application/json',

//           },
//           body:JSON.stringify({
//            dob:{dob},
//         email:{email},
//         first_name:{firstName},
//         gender:{gender},
//         last_name:{lastName},
//         phone_no:{phoneNumber},
//         password:{password}
 
//           })
//         });
//         console.log(result)
//     }catch(e){
//       alert(e)
//     }
  // }

  return (
    <>
      <div className="signup__background"></div>
      <div className="signup">
        <form onSubmit={signup}>
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

            <input type="radio" onClick={e=>setGender(e.target.value)} value="m" /> Male
            <br />
            <input type="radio" onClick={e=>setGender(e.target.value)} value="f" /> Female
            <br />
            <input type="radio" onClick={e=>setGender(e.target.value)} value="o" /> Other
        </div>
        <div className="signup__button">
          <button onClick={signup} >Sign Up</button>
        </div>
      </form>
      </div>
    </>
  );
}
export default SignUp;
