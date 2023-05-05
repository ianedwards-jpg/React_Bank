import React from 'react'

import { Link, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Profile from "../pages/Profile"
import Signup from '../pages/Signup'
import About from '../pages/About'

import './Navbar.css'


const Navbar = () => {
  return (
    <>
    <nav>
        <ul id="navBar" className='navBar'>
        <h3>First National Bank of React</h3>
        <li>
          <Link to="/">Home</Link>
        </li>
        <br />
        <li>
          <Link to="/login">Log In</Link>
        </li>
        <li>
          <Link to="/about">About/App Design</Link>
        </li>
        <br />
          <Link to="/signup"> <button className='navBarCTA'>Open A Virtual Account!</button></Link>
      </ul>      
    </nav>
    <Routes>
      <Route path ="/" element={<Home />}/>
      <Route path ="/login" element={<Login />}/>
      <Route path ="/signup" element={<Signup />}/>
      <Route path ="/about" element={<About />}/>


    </Routes>
    </>
  )
}

export default Navbar


{/* <li>
          <Link to="/profile">User Profile</Link>
        </li> */}

              {/* <Route path ="/profile" element={<Profile />}/> */}
