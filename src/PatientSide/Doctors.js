import React,{useState,UseEffect} from 'react'
import "./Doctors.css"
import Tabs from './Tabs'
import  Doc from './Doc.json' ;
import { useEffect } from 'react';

function Doctors() {
    const [search,setSearch]=useState("")
    const [doclist]=useState(Doc)
    const [filteredList,setFilteredList]=useState([])

    useEffect(() => {
    setFilteredList(
      doclist.filter((doc) =>
        doc.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, doclist]);



    function card(val)
    {
         
        return(
           <div className="cards">
              <div className="doctors__card">
		              <img className="doctors__cardImage" src={val.image}/>
		                <div class="doctors__cardInfo">
                      <h4> <strong></strong>Dr.{val.name}</h4>
                      <p><strong>Specialization:</strong> {val.spec}</p>
                      <p> <strong> Experience(in years):</strong>{val.exp}</p>
                      <p><strong>Fees:</strong> ₹{val.fees}</p>
                    	<button class="doctors__cardButton" type="button">Book Appointment</button>
                  	</div>
              </div>
            </div>
        );
    }   

    return(
       
        <div className="doctors">
                <Tabs/> 
            
            
                <div className="appointments__headerSearch">
                    <input 
                    type="search"  
                    placeholder="search specialization"  
                    onChange={e=>setSearch(e.target.value)}
                 />
                </div>

              <div className="doctor__list">
                  {filteredList.map(card)}
                  
                  </div>                       
        </div>
    )

}
export default Doctors