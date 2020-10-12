import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
function Homepage() {
  return (
    <>
      <div className="home__background">
        <div className="home__header">
          <h1>Specialised Appointment & Recommendation System</h1>
        </div>
        <div className="home__textbox">
          <div className="home__content">
            <p>
              Specialised Appointment & Recommendation System (S-A-R-S), is a
              hospital management system that helps patients book appointments
              with doctors and reminds them about existing appointments. It uses
              a database to store all the data of the users, doctors and
              patients alike, which also includes the medical history of
              patients.
            </p>
          </div>
          <Link to="/login">
            <div className="home__button">
              <button>Login/Register</button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Homepage;
