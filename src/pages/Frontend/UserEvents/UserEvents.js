import { collection, getDocs, query, where, doc } from 'firebase/firestore/lite'
import React, {useContext, useState, useEffect} from 'react'
import { firestore } from '../../../config/firebase'
import { AuthContext } from '../../../context/AuthContext'
import {Link} from 'react-router-dom'


export default function UserEvents() {
    const { user } = useContext(AuthContext)


    const [events, setEvents]= useState([])

    
    const readDoc=async()=>{
        let array =[]
        const q= query(collection(firestore, "Events"), where("createdBy.email", "==", user.email));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc)=>{
            let data = { ...doc.data()}
            array.push(data)
            setEvents(array)
        })
        
    }

    useEffect(()=>{
        readDoc()
    },[readDoc])
    
  return (
    <>

    <div className="container mt-5 " >
      <div className="row">
        <h1 className='text-center' >User Events</h1>

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
    </tr>
  </thead>
  <tbody>
    {events.map((doc, i)=>{
      return <tr key={i}>
      <td>{doc.title}</td>
      <td>{doc.location}</td>
      <td>{doc.description}</td>
      <td>{doc.date}</td>
      <td>{doc.time}</td>
      
      
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
