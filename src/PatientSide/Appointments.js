 import {Link} from 'react-router-dom'
import Tabs from './Tabs'
import React,{useEffect,useState} from 'react'
import './Appointments.css';
import Specialization from './Specialization'
function Appointments() {
    
    const [sectors]=useState(Specialization)
    const [search ,setSearch]=useState("");
    const [filteredSectors,SetFilteredSectors]=useState([])     
    useEffect(() => {
    SetFilteredSectors(
      sectors.filter((sector) =>
        sector.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, sectors]);
    function scard(array){
        return(
             <div className="appointments__doctorsListCards">
                    <div className="cards__info">
                    <img className="cards__image" src={array.image} alt=""/>
                    <div className="cards__name">
                         <p>{array.name}</p>
                    </div>
                   <Link to={{pathname:'/doctors/'+array.name,
                              appointments:array.name}}>
                    <div className="cards__button">
                        <button >Search Doctors</button>
                    </div>
                    </Link>
                    </div>
                </div>

        );
    }
    
    
    return (  
            <div className="appointments">
            
                <Tabs/> 
            
            
                <div className="appointments__headerSearch">
                    <input 
                    type="search"  
                    placeholder="search appointments"  
                    onChange={e=>setSearch(e.target.value)}
                 />
                    
               <Link to ="/bookedappointments"> <a>Booked Appointments</a> </Link>
                </div>
            
            <div className="appointments__doctorsList">
                {filteredSectors.map(scard)}
            </div>
        </div>
    )
}


export default Appointments;