import React,{useState,useEffect} from "react";
import "./LoginPage.css";
import { Link} from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
function LoginPage() {
   const [email,setEmail]=useState("")
   const [password,setPassword]=useState('')
    const login=()=>{
        
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
          <Link to="/home">
          <div className="login__button">
            <button onClick={login}>Login</button>
        </div>
        </Link>
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
