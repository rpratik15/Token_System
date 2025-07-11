import React,{useContext,useEffect} from 'react'
import '../Style/login.css'
 import { useNavigate,Outlet } from "react-router-dom"
import { UserContext } from '../Context/userContext'


function Login() {
  const navigate = useNavigate()

  const [state,dispatch] = useContext(UserContext)
  const isAuth = state.isAuth
  const logintype= state.logintype

  const checkLogin=(e)=>{
    e.preventDefault()
    const user = e.target.user.value
    const pass = e.target.password.value
    
    if(user === "admin" && pass === "admin"){
      dispatch({type:"SET_LOGIN_TYPE",payload:"admin"})

    }else if(checkUser(e)){

      dispatch({type:"SET_LOGIN_TYPE",payload:"user"})

    }else{
      alert("Invalid username or password")
    }
  }
const checkUser=(e)=>{
  const user = e.target.user.value
 const pass = e.target.password.value
  if(user === "user" && pass === "user"){
    return true
   }}
  useEffect(()=>{
    if(isAuth)
    {
      if(logintype==="admin")
      {
        navigate("/admin")
      }
      else
      {
        navigate("/user")
      }
    }
    else
    {
      navigate("/login")
    }
  },[isAuth])

  


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