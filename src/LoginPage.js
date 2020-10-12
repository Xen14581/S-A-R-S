import React from "react";
import "./LoginPage.css";
import { Link} from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
function LoginPage() {
  return (
    <>
      
        <div className="login__background"></div>
        <div className="login__box">
          <h1>Login</h1>
          <div className="login__textbox">
            <PersonIcon />
            <input type="email" placeholder="E-mail" />
          </div>
          <div className="login__textbox">
            <LockIcon />
            <input type="password" placeholder="Password" />
          </div>
          <Link to="/home">
          <div className="login__button">
            <button>Login</button>
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
