import React,{useContext} from 'react'
import { BrowserRouter,Route,Routes,Navigate, Outlet } from 'react-router-dom'
import Login from '../Components/Login'
import User from '../Components/User'
import Admin from '../Components/Admin'
import About from '../Components/About'
import ContactUs from '../Components/ContactUs'
import { UserContext } from '../Context/userContext'


function Navs() {

  const [state] = useContext(UserContext)
  const isAuth = state.isAuth
  const logintype = state.logintype
  // Redirect based on login type 

  const AdminRoute = () => {
    return  isAuth? <Admin/> : <Navigate to="/" />;
  };
  const UserRoute = () => {
    return logintype === 'user' ? <User/> : <Navigate to="/" />;
  };

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/user" element={<UserRoute/>}/>
            <Route path="/admin" element={ <AdminRoute/>}/>
        </Routes>


</BrowserRouter>    
)
}

export default Navs