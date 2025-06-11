import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import '../Style/register.css'
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

function Register() {

    const [userData, setUserData] = useState({
        name: '',
        mobile: '',
        userName: '',
        password: '',
        repassword: '',
    type: 'user'});

      const handleChange = (e) => {
    
    const { name, value } = e.target;
  
    setUserData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }
    const sendDataToDb = (e) => {
        e.preventDefault();
        
        toast.promise(async ()=>{
          console.log(userData.password);
            if (userData.password !== userData.repassword) {
              toast.error("Passwords do not match!!!");
                //throw new Error("Passwords do not match!!!");
            }
            console.log(userData.mobile.length)
            if (userData.mobile.length !== 10) {
              toast.error("Mobile number must be 10 digits long!!!");
                //throw new Error("Mobile number must be 10 digits long!!!");
            }
            const response = await axios.post("http://localhost:3000/users/add", userData);
            console.log(response);
            if (response.status === 200) {
                toast.success("User registered successfully");
            } else {
              toast.error("Registration failed");
                throw new Error("Registration failed");
            }

        },{

        loading:"Saving data...",
         //success: <b>Settings saved!!!</b>,
          //error: <b>Error in Saving data!!!</b>,
          duration: 8000,
      });
        // Here you would typically send the data to your backend
      
        // Reset form or handle success
    };
  return (
    <div>
         <Toaster />
         <br/>
         <h1>Registration Form</h1>
      
        <form action="" className="newuser-form" onSubmit={sendDataToDb}>
                {/* <div id="group"> */}
                  {/* <div id="grp1"> */}
                    <label htmlFor="name">Engg.Name:</label>
                    <input type="text" id="name" name="name" value={userData.name} onChange={handleChange} required />
                    <br />
                     <label htmlFor="mobileno">Mobile No:</label>
                    <input type="text" id="mobileno" name="mobile" value={userData.mobile} onChange={handleChange} required />
                    <br />
                    <label htmlFor="user_name">User Name:</label>
                    <input type="text" id="user_name" name="userName" value={userData.userName} onChange={handleChange} required />
                    <br />
                    <label htmlFor="password">Password:</label>
                   <input type="password" id="password" name="password" required value={userData.password} onChange={handleChange}/>
                    <br />
                    <label htmlFor="repassword">Confirm Password:</label>
                   <input type="text" id="repassword" name="repassword" required value={userData.repassword} onChange={handleChange} />
            
                  {/* </div> */}
                 
                {/* </div> */}
        
                <div className="user-btn">
                  <Button variant="success" type='submit'>Register</Button>

                </div>
              </form>
    </div>
  )
}

export default Register