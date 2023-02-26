import React, { useContext, useState } from 'react'
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBInput, MDBIcon, MDBCheckbox } from 'mdb-react-ui-kit';

import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';



const initialState = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: ""
}

export default function Register() {

  const [state, setState] = useState(initialState);
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext)
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value })

    console.log(state)
  }

  const handleSubmit = (e) => {

    e.preventDefault();

    const { email, password, fullName } = state

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setIsAuthenticated(true)
        updateProfile(auth.currentUser,{
          displayName: fullName,
        })
        navigate("/")
        window.toastify("User has been created!", "success")
        // ...
      })
      .catch((error) => {
        alert("user isn't created")
        setIsAuthenticated(false)
        const errorCode = error.code;
        const errorMessage = error.message;
        window.toastify("Something went wrong while creating user!", "error")
        // ..
      })


    // setIsProcessing(false)

  }




  return (
    <>
      <MDBContainer fluid >

        <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                <h4 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</h4>

                <div className="d-flex flex-row align-items-center mb-4 ">
                  <MDBIcon fas icon="user me-3" size='lg' />
                  <MDBInput label='Your Name' name='fullName' id='form1' type='text' className='w-100' onChange={handleChange}/>
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size='lg' />
                  <MDBInput label='Your Email' id='form2' name='email' type='email' onChange={handleChange} />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size='lg' />
                  <MDBInput label='Password' id='form3' name='password' type='password' onChange={handleChange} />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="key me-3" size='lg' />
                  <MDBInput label='Repeat your password' name='confirmPassword' id='form4' type='password' onChange={handleChange} />
                </div>

                <div className='mb-4'>
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                </div>

                <MDBBtn className='mb-4' size='lg' onClick={handleSubmit}>Register</MDBBtn>

              </MDBCol>

              <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
              </MDBCol>

            </MDBRow>
          </MDBCardBody>
        </MDBCard>

      </MDBContainer>
    </>
  )
}
