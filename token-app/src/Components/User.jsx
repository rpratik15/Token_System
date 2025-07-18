import React, { useState,useEffect,useContext } from 'react'
import '../Style/user.css'
import UserToken from './UserToken'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { UserContext } from '../Context/userContext'



function User() {

  const [state,dispatch] = useContext(UserContext)
    
  const initialValue = {
    date: new Date().toISOString().split('T')[0], // Default to today's date
    machineName: '',
    customerName: '',
    problemReportedBy: '',
    tokenCreatedBy: '',
    problemDescription: '',
    imageUrl: '',
    status: 'Pending'
  }
  const [tokenData, setTokenData] = useState(initialValue);
  const [  tokenList, setTokenList] = useState([]);
const [loading, setLoading] = useState(false);
   useEffect(() => {
     
      featchData();
      
    },[loading]);

const featchData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/token/get");
   setTokenList(response.data);
   
  } catch (error) {
    console.error("Error fetching data", error);
  }
}
  const resetData = () => {
    console.log("Resetting data");
    setTokenData(initialValue);
    setLoading(false);
  }

 
//   const sendDataToDb =async (e) => {
//     console.log("Sending data to DB");
//     e.preventDefault();

//     const formData=new FormData();
//     formData.append('date', tokenData.date);
//     formData.append('machineName', e.target.machineName.value);
//     formData.append('customerName', e.target.customerName.value);
//     formData.append('problemReportedBy', e.target.problemReportedBy.value);
//     formData.append('tokenCreatedBy', e.target.tokenCreatedBy.value);
//     formData.append('problemDescription', e.target.problemDescription.value);
//     if (e.target.imageUrl.files[0]) {
//       formData.append('singleImage', e.target.imageUrl.files[0]);
//     }
//     formData.append('status', 'Pending');




//          await axios.post(
//       "http://localhost:3000/token/add",
//       formData
//       ,
//       {
//         headers: { "Content-Type": "multipart/form-data" },
//       })
//     .then((response) => {
//       console.log("Data sent successfully", response.data);
//     }).catch((error) => {
//       console.error("Error sending data", error);
//     })
//     // console.log("Result from server:", result);

  

// }

const sendDataToDb = (e) => {
    console.log("Sending data to DB");
    e.preventDefault();
   
    const formData=new FormData();
    formData.append('date', tokenData.date);
    formData.append('machineName', e.target.machineName.value);
    formData.append('customerName', e.target.customerName.value);
    formData.append('problemReportedBy', e.target.problemReportedBy.value);
    formData.append('tokenCreatedBy', e.target.tokenCreatedBy.value);
    formData.append('problemDescription', e.target.problemDescription.value);
    if (e.target.imageUrl.files[0]) {
      formData.append('singleImage', e.target.imageUrl.files[0]);
    }
    formData.append('status', 'Pending');

toast.promise( async () => {
         await axios.post(
      "http://localhost:3000/token/add",
      formData
      ,
      {
        headers: { "Content-Type": "multipart/form-data" },
      })},{

        loading:"Saving data...",
         success: <b>Settings saved!!!</b>,
          error: <b>Error in Saving data!!!</b>,
          duration: 8000,
      })
    // .then((response) => {
    //   console.log("Data sent successfully", response.data);
    // }).catch((error) => {
    //   console.error("Error sending data", error);
    // })
    // console.log("Result from server:", result);

   setLoading(true);

}
  const handleChange = (e) => {
    
    const { name, value } = e.target;
   
    setTokenData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }



  return (
    <div className='user'>
        <Toaster />
        <br/>
      <h1>User Form</h1>
      <br/>
      <Button variant="primary" id="logout" onClick={()=> dispatch({type:"RESET_LOGIN_TYPE"})}>Logout</Button>
      <form action="" className="user-form" onSubmit={sendDataToDb}>
        <div id="group">
          <div id="grp1">
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date" value={tokenData.date} onChange={handleChange} required />
            <br />
            <label htmlFor="machine_name">Machine Name:</label>
            <input type="text" id="machine_name" name="machineName" value={tokenData.machineName} onChange={handleChange} required />
            <br />
            <label htmlFor="customer_name">Customer Name:</label>
            <input type="text" id="customer_name" name="customerName" value={tokenData.customerName} onChange={handleChange} required />
            <br />
            <label htmlFor="problem">Problem Reported By:</label>
            <input type="text" id="problem" name="problemReportedBy" value={tokenData.problemReportedBy} onChange={handleChange} required />
            <br />
          </div>
          <div id="grp2">
            <label htmlFor="created_by">Token Generated By:</label>
            <input type="text" id="created_by" name="tokenCreatedBy" value={tokenData.tokenCreatedBy} onChange={handleChange} required />
            <br />
            <label htmlFor="desc">Problem Description:</label>
            <textarea id="desc" name="problemDescription" value={tokenData.problemDescription} onChange={handleChange} required />
            <br />
            <label htmlFor="image">Upload Image:</label>
            <input type="file" id="image" name="imageUrl" value={tokenData.imageUrl} onChange={handleChange} />
            <br />
          </div>
        </div>

        <div className="user-btn">
          <Button variant="success" type='submit'>Submit</Button>
          <Button variant="success" type='reset' onClick={resetData}>Reset</Button>
          {/* <button type='submit'>Submit</button>
            <button type='reset'>Reset</button> */}
        </div>
      </form>
      <hr className="divider" />
      <h2>Token Information</h2>
      {console.log(tokenList)}
      <div className="token-info">
            {
              
              tokenList.map((token,index)=>{
               
                return (
                  <UserToken 
                    key={index}
                    date={token.date} 
                    machine_name={token.machineName} 
                    customer_name={token.customerName} 
                    problem={token.problemReportedBy} 
                    created_by={token.tokenCreatedBy} 
                    desc={token.problemDescription} 
                    status={token.status} 
                    image={`http://localhost:3000/uploads/${token.imageUrl}`} // Assuming the image is stored in the uploads folder
                  />
                )
              })
            }


        {/* <UserToken date="2023-02-01" machine_name="Mark II" customer_name="Balaji India Pvt Ltd, Delhi" problem="Rajeev Rana" created_by="Sanjay Ramawat" desc="WP can not exceed above 15, chiller also not working" status="Pending" image="https://images.unsplash.com/photo-1471890701797-59336a877de4?q=80&w=1465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /> */}
        {/* <UserToken date="2024-05-01" machine_name="Mark I" customer_name="Arrya tools, Mumbai" problem="Dhiraaj Rai" created_by="Prince" desc="Insatlled new software but always ask for password" status="Pending" image="https://images.unsplash.com/photo-1471890701797-59336a877de4?q=80&w=1465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

        <UserToken date="2025-11-01" machine_name="Enova" customer_name="India tools Pvt Ltd, Pune" problem="Ajaykant" created_by="Sanjay Ramawat" desc="chiller also not working" status="Pending" image="https://images.unsplash.com/photo-1471890701797-59336a877de4?q=80&w=1465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

        <UserToken date="2025-12-01" machine_name="Emerge S43" customer_name="Jiya tools, Delhi" problem="Rajeev Rana" created_by="Sanjay Ramawat" desc="Need new password" status="Pending" image="https://images.unsplash.com/photo-1471890701797-59336a877de4?q=80&w=1465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /> */}

      </div>
    </div>
  )
}

export default User