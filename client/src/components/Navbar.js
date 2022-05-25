import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
       <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <h2 className='justfordemo'>AMS</h2>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-sm-5">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Attendance">Attendance</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Signup">Signup</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar