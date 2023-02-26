import React from 'react'

export default function About() {
  return (
   <div className="container mb-5">
    <div className="row">
        <div className="col">
        <h4 className='text-center'>Our Plans</h4>
        <hr />
        <div className="col ">
        <div className="card-group ">
  <div className="card">
    <img src="https://images.pexels.com/photos/7648045/pexels-photo-7648045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="i4"/>
    <div className="card-body">
      <h5 className="card-title text-center">Meeting Planning</h5>
      <p className="card-text text-center">We provide full planning of meetings.</p>
    </div>
  </div>
  <div className="card mx-2">
    <img src="https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="i4"/>
    <div className="card-body">
      <h5 className="card-title text-center">Wedding Planning</h5>
      <p className="card-text text-center">We provide full planning of weddings.</p>
    </div>
  </div>
  <div className="card">
    <img src="https://thumbs.dreamstime.com/z/seminar-conference-planning-event-concept-77459133.jpg" height="240" className="card-img-top" alt="i4"/>
    <div className="card-body">
      <h5 className="card-title text-center">Seminar Planning</h5>
      <p className="card-text text-center">We provide full planning of Seminars.</p>
    </div>
  </div>
  
</div>
        </div>
        </div>
    </div>
   </div>
  )
}
