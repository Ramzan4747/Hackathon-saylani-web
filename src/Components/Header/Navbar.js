import { signOut } from 'firebase/auth';
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../config/firebase';
import { AuthContext } from '../../context/AuthContext';
import LoginTwoToneIcon from '@mui/icons-material/LoginTwoTone';


export default function Navbar() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth).then(() => {
      setIsAuthenticated(false)
      navigate("/")
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.

    });
  }
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#023047" }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Productify</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/createEvents" className="nav-link active" aria-current="page">Create Event</Link>
              </li>
              <li className="nav-item">
                <Link to="/allEvents" className="nav-link active" >All Events</Link>
              </li>
              <li className="nav-item">
                <Link to="/userEvents" className="nav-link active" >User Events</Link>
              </li>

            </ul>
            <div className="d-flex" role="search">
              {isAuthenticated ?
                <>
                  <button type='submit' className="btn btn-outline-light text-white" onClick={handleLogout}>Logout</button>
                </>

                :
                <>
                <Link to="/auth/login" className=" btn btn-outline-light">Login<LoginTwoToneIcon/></Link>
                <Link to="/auth/register" className=" btn btn-outline-light ms-1">Signup<LoginTwoToneIcon/></Link>
                </>

              }
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
