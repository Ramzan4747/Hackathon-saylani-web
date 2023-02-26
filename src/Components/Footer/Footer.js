import React from 'react'

export default function Footer() {


    let year = new Date().getFullYear();

  return (
      <div className="container-fluid" style={{backgroundColor: "#023047"}}>
        <div className="py-1">
        <div className="row">
            <div className="col">
                <p className='mb-0 text-center  text-white'>&copy; {year}. All Rights Reserved </p>
            </div>
        </div>
    </div>
   </div>
  )
}
