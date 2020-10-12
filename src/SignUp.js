import React from "react";
import "./SignUp.css";
import {Link} from 'react-router-dom'
function SignUp() {
  return (
    <>
      <div class="signup__background"></div>
      <div class="signup">
        <h1>Create Account</h1>

        <div class="signup__creds">
          <input type="text" placeholder="First Name" name="" value="" />
          <input type="text" placeholder="Last Name" name="" value="" />
        </div>
        <div class="signup__creds">
          <input type="email" placeholder="E-Mail" name="" value="" />
          <input
            type="tel"
            placeholder="Mobile No."
            id="phone"
            name="phone"
            pattern="[0-9]{5}-[0-9]{5}"
          />
        </div>
        <div class="signup__creds">
          <input type="password" placeholder="Password" name="" value="" />
        </div>
        <div class="signup__creds">
          <input
            type="password"
            placeholder="Confirm Password"
            name=""
            value=""
          />
        </div>
        <div class="signup__creds">
          <p>Date of Birth:</p>
          <input type="date" name="" value="" />
        </div>
        <div class="signup__creds">
          <p>Gender:</p>
          <form action="">
            <input type="radio" name="gender" value="male" /> Male
            <br />
            <input type="radio" name="gender" value="female" /> Female
            <br />
            <input type="radio" name="gender" value="other" /> Other
          </form>
        </div>
       <Link to="/login">
        <div class="signup__button">
          <button>Sign Up</button>
        </div>
        </Link>
      </div>
    </>
  );
}

export default SignUp;
