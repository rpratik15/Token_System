// Login form for admin and user
// Admin and User can login with username and password
// User form contains inputs for date,machine name,Customer name,Problem reported and token created by,problem description and image upload (if any)
// Admin form contains all the user requests and can approve or reject them
// as status of the request update it should be visible to the user


import { useState } from 'react'
import Login from './Components/Login'
import './App.css'
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import User from './Components/User'
import UserToken from './Components/UserToken'
import Admin from './Components/Admin';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="App">
        {/* <h1>Welcome to the Token Management System</h1> */}
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/user" element={<User/>} />
          <Route path="/admin" element={<Admin/>} />
        </Routes>
      </div>
    </BrowserRouter>
      
    
    
  )
}

export default App
