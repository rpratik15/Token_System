import React from 'react'
import { BrowserRouter,Route,Routes,Navigate } from 'react-router-dom'
import Login from '../Components/Login'
import User from '../Components/User'
import Admin from '../Components/Admin'
import About from '../Components/About'
import ContactUs from '../Components/ContactUs'

function Navs() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/user" element={<User/> }/>
            <Route path="/admin" element={<Admin/> }/>
        </Routes>


</BrowserRouter>    
)
}

export default Navs