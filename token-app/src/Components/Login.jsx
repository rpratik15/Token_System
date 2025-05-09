import React from 'react'
import '../Style/login.css'
import { useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate()

  const [success, setSuccess] = React.useState(false)
/* <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>*/
  const checkLogin=(e)=>{
    e.preventDefault()
    const user = e.target.user.value
    const pass = e.target.password.value
    if(user === "admin" && pass === "admin"){
      setSuccess(true)
      navigate("/admin")
    }else if(user === "user" && pass === "user"){
      setSuccess(true)
      navigate("/user")
    }else{
      alert("Invalid username or password")
    }
  }

  


  return (
    <div>
       <h2>Login</h2> 
        
            <form  className="log" onSubmit={checkLogin}>
                <label htmlFor="username">Username</label>
                <select id="username" name="user" required>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>  
                </select>
                {/* <input type="" id="username" name="username" required/> */}
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required/>
                <br></br>
                <button type="submit">Login</button>
            </form>
        
    </div>
  )
}

export default Login