import React, { useState } from 'react'

function ChangeName() {
    let [name,setName]=useState("Riya")
  return (
    <div>
       <h1>{name}</h1>
       <p>{name}</p>
       <button onClick={()=>{setName("Sanika")}}>Change Name</button>
    </div>
  )
}

export default ChangeName
