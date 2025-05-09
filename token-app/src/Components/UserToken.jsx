import React from 'react'

function UserToken({date,machine_name,customer_name,problem,created_by,desc,status,image}) {
  return (
    <div>
        
        <p>Date: {date}</p>
        <p>Machine Name: {machine_name}</p>
        <p>Customer Name: {customer_name}</p>
        <p>Problem Reported: {problem}</p>
        <p>Created By: {created_by}</p>
        <p>Problem Description: {desc}</p>
        {/* <img src={image} alt="Uploaded" /> */}
        <p>Status: {status}</p>
    </div>
  )
}

export default UserToken