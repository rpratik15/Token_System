import React,{useContext} from 'react'
import '../Style/login.css'
// import { useNavigate } from "react-router-dom"
import { UserContext } from '../Context/userContext'

function Login() {
  // const navigate = useNavigate()
  const [state,dispatch] = useContext(UserContext)

  // const [success, setSuccess] = React.useState(null)
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
      dispatch({type:"SET_LOGIN_TYPE",payload:"admin"})
      // setSuccess("admin")
      // navigate("/admin")
    }else if(user === "user" && pass === "user"){
      // setSuccess("user")
      dispatch({type:"SET_LOGIN_TYPE",payload:"user"})
      // navigate("/user")
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
                <button id="login-btn" type="submit">Login</button>
            </form>
        
    </div>
  )
}

export default Login