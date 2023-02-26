import React, { useContext, useState } from 'react'
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardImage, MDBInput, MDBIcon, MDBCheckbox } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';



const initialState = {
  email: "",
  password: ""
}


export default function Login() {



  const [state, setState] = useState(initialState);
  const { setIsAuthenticated } = useContext(AuthContext)
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value })

    console.log(state)
  }

  const handleSubmit = (e) => {

    e.preventDefault();

    const { email, password } = state

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setIsAuthenticated(true)
        navigate("/")
        window.toastify("user logged in ","success")
        // ...
      })
      .catch((error) => {
        setIsAuthenticated(false)
        const errorCode = error.code;
        const errorMessage = error.message;
        window.toastify("user not logged in ","error")
        // ..
      })


    // setIsProcessing(false)

  }





  return (
    <>
      <MDBContainer fluid>

        <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
          <MDBCardBody>
            <MDBRow>
              <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

                <h4 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</h4>



                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="envelope me-3" size='lg' />
                  <MDBInput label='Your Email' id='form2' type='email' name='email' onChange={handleChange} />
                </div>

                <div className="d-flex flex-row align-items-center mb-4">
                  <MDBIcon fas icon="lock me-3" size='lg' />
                  <MDBInput label='Password' id='form3' type='password' name='password' onChange={handleChange} />
                </div>



                <div className='mb-4'>
                  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
                </div>

                <MDBBtn className='mb-4' size='lg' onClick={handleSubmit} >Login</MDBBtn>
                <span>
                  Dont have account click here  <Link className='mb-4' size='lg' to='/auth/register' >Sign up</Link>
                </span>
              

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
