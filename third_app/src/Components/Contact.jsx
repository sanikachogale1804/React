import React from 'react'
import {useNavigate,useParams} from 'react-router-dom';


function Contact() {
  const {id}=useParams()
  const navigate=useNavigate();
  return (
    <div>
      <h1>Contact</h1>
      <p>Id: fetch from route {id}</p>
      <button onClick={()=>{navigate("/")}}>Click here</button>
    </div>
  )
}

export default Contact
