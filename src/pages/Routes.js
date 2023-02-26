import React, { useContext } from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Frontend from './Frontend'
import Auth from './Auth'
import { AuthContext } from '../context/AuthContext'
import PrivateRoute from '../Components/PrivateRoute'
import AllEvents from './Frontend/AllEvents/AllEvents'
export default function Index() {

const {isAuthenticated}=useContext(AuthContext)

  return (
 <>
 <Routes>
  <Route path='/*' element={<Frontend/>}/>
  <Route path='/auth/*' element={isAuthenticated ? <Navigate to="/"/>:<Auth/>}/>
    <Route path='/allEvents' element={<PrivateRoute Component={AllEvents}/>}/>
 </Routes>

 
 </>
  )
}
