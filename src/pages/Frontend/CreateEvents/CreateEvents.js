import { doc, serverTimestamp, setDoc } from 'firebase/firestore/lite'
import React, { useState, useContext } from 'react'
import { firestore } from '../../../config/firebase'
import { AuthContext } from '../../../context/AuthContext'

const initialState = {
  title: "",
  date: "",
  time: "",
  location: "",
  description: ""
}

export default function CreateEvents() {

  const { user } = useContext(AuthContext)

  const [state, setState] = useState(initialState)

  const handleChange = e => {
    setState(s => ({ ...s, [e.target.name]: e.target.value }))
    console.log(state)
  }



  const handleSubmit = e => {



    let { title, location, description, date, time } = state;
    e.preventDefault();

    title = title.trim();
    location = location.trim();
    description = description.trim();

    if (title.length < 3) {
      window.toastify("Title should be of atleast 3 characters!","error")
      return;
    }
    if (location.length < 3) {
      window.toastify("Please Enter Location", "error")
      return;
    }
    if (description.length < 10) {
      window.toastify("Description should be more then 10 characters!", "error")
      return;
    }

    let formData = { title, location, description,date, time }
    formData.dateCreated = serverTimestamp();
    formData.id = Math.random().toString(36).slice(2);
    formData.createdBy = {
      email: user.email,
      uid: user.uid,
      displayName: user.displayName
    }
    createDocument(formData)


  }

  const createDocument = async (formData) => {

    

    try {
      await setDoc(doc(firestore, "Events", formData.id), formData);
      window.toastify("Event is added", "success")
      setState(initialState)
    } 
    catch (err) {
      console.log(err)
      window.toastify("Something went wrong! Todo is not added","error")
    }

  }


  return (
    <div className="py-5 home d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card p-3 p-md-4 p-lg-5">
              <form>
                <div className="row">
                  <div className="col">
                    <h2 className='text-center mb-4'>Add Event</h2>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 col-md-6 mb-3">
                    <input type="text" className='form-control' name='title'  placeholder='Enter Title' onChange={handleChange} />
                  </div>
                  <div className="col-12 col-md-6 mb-3">
                    <input type="text" className='form-control' name='location'  placeholder='Enter your Location' onChange={handleChange} />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-6 mb-3">
                    <input type="date" className='form-control' name='date'  placeholder='Enter Date' onChange={handleChange} />
                  </div>
                  <div className="col-12 col-md-6 mb-3">
                    <input type="time" className='form-control' name='time'  placeholder='Enter Time' onChange={handleChange} />
                  </div>
                </div>


                <div className="row mb-4">
                  <div className="col">
                    <textarea name="description" className='form-control' rows="5" placeholder='Enter your description'  onChange={handleChange}></textarea>
                  </div>
                </div>


                <div className="row">
                  <div className="col">

                    <button className='btn btn-primary w-100' onClick={handleSubmit}>Add Event</button>

                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
