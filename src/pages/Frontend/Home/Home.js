import React from 'react'
import {Link} from 'react-router-dom'
import Carasoul from '../../../Components/Carasoul/Carasoul'
import Plans from '../../../Components/Plans/Plans'
import About from '../../../Components/About/About'
import Location from '../../../Components/Location/Location'
import Contact from '../../../Components/Contact/Contact'
export default function Home() {
  return (
    <>
    <Carasoul/>
    <Plans/>
    <About/>
    <Location/>
    <Contact/>
    <div className="container mb-5 ">
      <div className="row text-center">
        <div className="col">
          <Link to="/createEvents" className='btn btn-primary text-white' >Create Event</Link>
        </div>
      </div>
    </div>
    </>
  )
}
