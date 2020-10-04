import React from "react";
import "./LoginPage.css";
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
function LoginPage() {
  return (
    <>
      <div className="login__background"></div>
        <div className="login__box">
          <h1>Login</h1>
          <div className="login__textbox">
            <PersonIcon/>
            <input type="text" placeholder="Username" />
          </div>
          <div className="login__textbox">
            <LockIcon/>
            <input type="password" placeholder="Password"/>
          </div>
          <a href="#" className="login__button">
            Login
          </a>
        </div>
    </>
  );
}

export default LoginPage;
