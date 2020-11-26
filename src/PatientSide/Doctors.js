import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import "./Doctors.css"
import Tabs from './Tabs'
import axios from 'axios' 
function Doctors({match}) {
    const specialization =match.params.specialization 
    const [search,setSearch]=useState("")
    const [doclist,setDoclist] = useState([])
    const [filteredList,setFilteredList]=useState([])
    const [specs,setSpecs] = useState([])
    const auth = `Bearer ${sessionStorage.getItem('token')}` 


useEffect(async ()=>{
  const data = await axios.get('http://localhost:8080/getDoctors',{headers:{
            "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Authorization",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "PUT, DELETE, POST, GET, OPTIONS",
            "Authorization": auth
 }});
 const response = await data.data
 setDoclist(response)
},[setDoclist])
useEffect(() => {
    setSpecs(
      doclist.filter((doc) =>
        doc.specialty.toLowerCase().includes(specialization.toLowerCase())
      )
    );
  }, [doclist]);
    useEffect(() => {
    setFilteredList(
      specs.filter((docs) =>
        docs.first_name.toLowerCase().includes(search.toLowerCase()) || docs.last_name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search,specs]);

    function card(val){
        return(
           
           <div className="cards">
              <div className="doctors__card">
		              <img className="doctors__cardImage" src="https://www.journalnetwork.org/assets/default-profile-54364fb08cf8b2a24e80ed8969012690.jpg"/>
		                <div class="doctors__cardInfo">
                      <h4> <strong></strong>Dr.{val.first_name} {val.last_name}</h4>
                      <p><strong>Specialization:</strong> {val.specialty}</p>
                      <p> <strong> Experience(in years):</strong>{val.experience}</p>
                      <p><strong>Fees:</strong> ₹{val.fees}</p>
                    	<Link to={{
                        pathname:`/bookappointments/${val.id}`,
                        d_id:val.id
                      }}><button class="doctors__cardButton">Book Appointment</button> </Link>
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
                    placeholder="search Doctors"  
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