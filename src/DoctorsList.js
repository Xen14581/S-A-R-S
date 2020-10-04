import React from "react";
import "./DoctorsList.css";
import SearchIcon from "@material-ui/icons/Search";

function DoctorsList() {
  return (
    <div className="doctorslist">
      <div className="doctorslist__header">
        <div className="doctorslist__headerLogo">
          <h1>
            <a href="#">SARS</a>
          </h1>
        </div>
        <input
          type="text"
          name="search"
          placeholder="Search for Doctors By name"
        />
        <SearchIcon className="doctorlist__headerSearch" />
      </div>
      <hr/>
     
    </div>
  );
}

export default DoctorsList;