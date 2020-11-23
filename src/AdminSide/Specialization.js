import {Link} from 'react-router-dom'
import AdminTabs from './AdminTabs'
import React,{useEffect,useState} from 'react'
import './Specialization.css';
import Specs from './Specs'
function Specialization() {
    
    const [sectors]=useState(Specs)
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
             <div className="specialization__doctorsListCards">
                    <div className="cards__info">
                    <img className="cards__image" src={array.image} alt=""/>
                    <div className="cards__name">
                         <p>{array.name}</p>
                    </div>
                   <Link to={{pathname:'/doctorslist/'+array.name,
                              specialization:array.name}}>
                    <div className="cards__button">
                        <button >Search Doctors</button>
                    </div>
                    </Link>
                    </div>
                </div>

        );
    }
    
    
    return (  
            <div className="specialization">
            
                <AdminTabs/> 
            
            
                <div className="specialization__headerSearch">
                    <input 
                    type="search"  
                    placeholder="search specialization"  
                    onChange={e=>setSearch(e.target.value)}
                 />
                    
                
                </div>
            
            <div className="specialization__doctorsList">
                {filteredSectors.map(scard)}
            </div>
        </div>
    )
}


export default Specialization;