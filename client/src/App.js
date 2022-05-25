import React from 'react';
import { Route } from 'react-router-dom';
import { Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Attendance from './components/Mark_attendance';
import Signup from './components/Signup';
import './App.css';
import './index.css';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
   <>

 <Navbar/>

     <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Routes>
        <Route path="/Login" element={<Login />} />
      </Routes>

      <Routes>
        <Route path="/Attendance" element={<Attendance />} />
      </Routes>

      <Routes>
        <Route path="/Signup" element={<Signup />} />
      </Routes>

      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
       
       

   </>
  )
}

export default App
