import React from 'react'
import {
  Link
} from "react-router-dom";
function Navbar() {
  return (
    
      <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">Brand-Logo</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav d-flex justify-content-center w-100 " >
              <li className="nav-item me-4">
                <Link id='vi' className="Nav nav-link active" aria-current="page" href="/" to="/">Home</Link>
              </li>
              <li className="nav-item me-4 ">
                <Link id='vi' className="nav-link active" aria-current="page" href="#" to="About">About-us</Link>
              </li>
              <li  className="nav-item me-4 ">
                <Link id='vi' className="nav-link active" aria-current="page" href="#" to="contact">Contact-us</Link>
              </li>
              <li  className="nav-item me-4 ">
                <Link id='vi'className="nav-link active" aria-current="page" href="#">Offers</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </>
    
 
   
  )
}

export default Navbar
