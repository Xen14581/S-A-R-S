import React,{useEffect,useState} from 'react'
import './BookApp.css'
import axios from 'axios'
import Tabs from './Tabs'
function BookApp({match}) {
    const [slots,setSlots]=useState([])
    const array = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    var i= 0
var curr = new Date;
const arr =array.splice(curr.getDay()-1)
console.log(typeof(arr))
useEffect( async ()=>{
      
          
        
},[setSlots,arr])
useEffect(async()=>{
    for (i = 0;i<arr.length;i++){
      await axios.get(`localhost:8080/getSlots/${match.params.d_id}/${arr[i]}`,{headers:{
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "PUT, DELETE, POST, GET, OPTIONS",
            "Authorization": `Bearer ${sessionStorage.getItem('token')}`
 }}).then((res)=>{
     setSlots((oldArray)=>{
         return [...oldArray,res.data]
     }).catch((e)=>{
         console.log(e)
     })
 })
    }
},[setSlots,arr])
console.log(slots)
var first = curr.getDate() - curr.getDay(); 
var aday = first +2 
var appday = new Date(curr.setDate(aday)).toUTCString()

console.log(slots)

    return (
        <div className ="bookapp">
            <Tabs/>

            <div className="bookapp__dayHeader">
            </div>
        </div>
    )
}

export default BookApp
