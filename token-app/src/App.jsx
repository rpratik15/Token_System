// Login form for admin and user
// Admin and User can login with username and password
// User form contains inputs for date,machine name,Customer name,Problem reported and token created by,problem description and image upload (if any)
// Admin form contains all the user requests and can approve or reject them
// as status of the request update it should be visible to the user


// import { useContext, useState } from 'react'
// import Login from './Components/Login'
import './App.css'
import Navs from './Navs'
// import { BrowserRouter , Route, Routes } from 'react-router-dom';
// import User from './Components/User'
// import UserToken from './Components/UserToken'
// import Admin from './Components/Admin';
import { UserContext, UserContextProvider } from './Context/userContext'
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function App() {
  

  return (

    <UserContextProvider >
        <Navs/>
    </UserContextProvider>
    
    
  )
}

export default App
