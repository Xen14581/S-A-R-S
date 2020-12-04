import React,{useState} from "react";
import "./LoginPage.css";
import {useHistory,Link} from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import {setUserSession} from '../src/Utilities/UserServices';
import axios from 'axios'

function LoginPage() {
  const [email,setEmail]=useState('')
   const [password,setPassword]=useState('')
   const history = useHistory()
   function login(event) {
     event.preventDefault()
     const data = {
        'username':email,
        'password':password
     }
    axios.post("http://localhost:8080/authenticate",data)
    .then(res=>{
        setUserSession(res.data.jwt,res.data.user)  
        if(res.data.user.role === "p"){
            history.push("/home")
        }
        else if(res.data.user.role === "d"){
          history.push('/dochome')
        }
        else if (res.data.user.role === "a"){
          history.push('/adminhome')
        }
        
    })
    .catch(er=>{
      alert("The given Email or Password is incorrect")
    })

    
  }
   return (
   
    <>
      
        <div className="login__background"></div>
        <div className="login__box">
          <h1>Login</h1>
          <div className="login__textbox">
            <PersonIcon />
            <input type="email" placeholder="E-mail" onChange={e=>setEmail(e.target.value)} />
          </div>
          <div className="login__textbox">
            <LockIcon />
            <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
          </div>
                  <div className="login__button">
            <button onClick={login}>Login</button>
        </div>
        
          <p>Or</p>
          <Link to="/signup">
          <div className="login__button">
            <button>Signup</button>
          </div>
        </Link>
        </div>
    </>
  );
}

export default LoginPage;