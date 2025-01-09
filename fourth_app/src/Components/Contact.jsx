import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'


function Contact() {
    const {id}=useParams();
    const navigate=useNavigate();
  return (
    <div>
        <p>Contact</p>
        <p>Id: fetch from route {id}</p>
        <button onClick={()=>{navigate("/")}}>click here</button>
    </div>
  )
}

export default Contact
