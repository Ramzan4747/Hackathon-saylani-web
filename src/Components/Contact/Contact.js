import React, { useState } from 'react';
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea } from 'mdb-react-ui-kit';
import { firestore } from '../../config/firebase';
import { doc, setDoc } from 'firebase/firestore/lite';


const initialState = {
  email: "",
  msg: "",
  subject: "",
}

export default function Contact() {

  const [state, setState] = useState(initialState)

  const handleChange = e => {
    
    setState(s => ({ ...s, [e.target.name]: e.target.value }))
    console.log(state)
  }



  const handleSubmit = async (e) => {

    e.preventDefault();
    let { email, msg, subject } = state

    let data = { email, msg, subject }
    console.log(data)
    
    
    // Add a new document in collection "cities"
    try {
      
      await setDoc(doc(firestore, "contact", data.email), data);
      window.toastify("Data has been sent!", "success")
      setState(initialState);
      
    }
    catch (err) {
      console.log(err)
      window.toastify("Data has been not sent", "error")
      
    }
   
    
    
  }
  
  
  return (

    <div className="container  mb-5">
      <div className="row">
        <div className="col">
          <h4 className='text-center'>Contact Us</h4>
          <hr />
        </div>
      </div>
      <div className="card p-2 p-md-4 mt-2" style={{ backgroundColor: "#023047" }}>
        <form type="submit"id='form' className='text-white' style={{ width: '100%', maxWidth: "100%" }}>



          <MDBInput type='email' onChange={handleChange} placeholder='Email address' name='email' v-model='email' wrapperClass='mb-4' />


          <MDBTextArea onChange={handleChange} wrapperClass='mb-4'name='msg' placeholder='Message' />
          <MDBInput onChange={handleChange} placeholder="Subject" name='subject' v-model='subject' wrapperClass='mb-4' />


          <MDBBtn onClick={handleSubmit} color='danger' block className='my-4 w-100'>
            Send
          </MDBBtn>
        </form>
      </div>
    </div>


  );
}