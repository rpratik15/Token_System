import React,{useContext} from 'react'
import { BrowserRouter,Route,Routes,Navigate, Outlet,useLocation,NavLink as Link  } from 'react-router-dom'
import LandingPage from '../Components/LandingPage'
import Login from '../Components/Login'
import User from '../Components/User'
import Admin from '../Components/Admin'
import About from '../Components/About'
import ContactUs from '../Components/ContactUs'
import { UserContext } from '../Context/userContext'
import NavbarStrip from './NavbarStrip'
import Register from '../Components/Register'



function Navs() {

  const [state] = useContext(UserContext)
  const isAuth = state.isAuth
  const logintype = state.logintype
  // Redirect based on login type 

  const AdminRoute = () => {
    console.log("in admin");
    return  isAuth? <Admin/> : <Navigate to="/" />;
  };
  const UserRoute = () => {
     console.log("in user");
    return logintype === 'user' ? <User/> : <Navigate to="/" />;
  };

  return (
    <>
   
    <BrowserRouter>
     <NavbarStrip/>
        <Routes>
            <Route exact strict path="/" element={<LandingPage/>} />
            <Route exact path="/login" element={<Login/>} />
            <Route exact path="/register" element={<Register/>} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<ContactUs />} />
            <Route exact path="/user" element={<UserRoute/>}/>
            <Route exact path="/admin" element={ <AdminRoute/>}/>
        </Routes>


</BrowserRouter> 
</>   
)
}

export default Navs