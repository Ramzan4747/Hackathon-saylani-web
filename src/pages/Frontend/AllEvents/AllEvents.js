import { async } from '@firebase/util';
import { collection, deleteDoc, doc, getDocs, query, setDoc, where } from 'firebase/firestore/lite';
import React, { useEffect, useState, useContext } from 'react'
import { firestore } from '../../../config/firebase';
import { AuthContext } from '../../../context/AuthContext';
import {Link} from 'react-router-dom'




export default function AllEvents() {

  const {user} = useContext(AuthContext)

const [events, setEvents]= useState([])


useEffect(()=>{
  readDoc();
  
},[])

 const readDoc=async()=>{

  let array= [];

  const querySnapshot = await getDocs(collection(firestore, "Events"));
  querySnapshot.forEach((doc) => {
    let data = doc.data();
    // doc.data() is never undefined for query doc snapshots
    console.log(data);
    array.push(data)
  });
  setEvents(array)
 }

 const handleDel=async(events)=>{
try{
  await deleteDoc(doc(firestore, "Events", events.id));
  window.toastify("Event is deleted", "success");
}
catch(e){
  console.error("Error adding document: ", e);
  window.toastify("Event is not deleted!", "error")
}
 }

  return (
    <>

    <div className="container mt-5 " >
      <div className="row">
        <h1 className='text-center' >All Events</h1>

        <div className="col mt-2">
        <div className="card p-3 p-md-4 p-lg-5" style={{backgroundColor: "#023047"}}>
        <div className="responsive-table" >
    <table class="table text-white" >
  <thead>
    <tr>
      <th scope="col">Title</th>
      <th scope="col">Location</th>
      <th scope="col">Description</th>
      <th scope="col">Date</th>
      <th scope="col">Time</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {events.map((event, i)=>{
      return <tr key={i}>
      <td>{event.title}</td>
      <td>{event.location}</td>
      <td>{event.description}</td>
      <td>{event.date}</td>
      <td>{event.time}</td>
      <td>
        <button className='btn btn-sm btn-danger' onClick={()=>{handleDel(event)}}>Del</button>
      </td>
      
    </tr>

    })}
   
  </tbody>
</table>
</div>
        </div>
<Link to='/' className="btn btn-primary mt-3">Go to Home</Link>
        </div>
      </div>
    </div>
     
    </>
  )
}
