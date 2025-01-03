import { useEffect, useState } from "react";

function DisplayName()
{
    let[name,setName]= useState("Nisha")
    let[length,setLength]=useState(0)
    let[breadth,setBreadth]=useState(0)
    let[area,setArea]=useState(length*breadth)

    useEffect(()=>{
        setArea(length*breadth);
        setTimeout(()=>{
          console.log("hello")
        },5000)
    },[length,breadth])
    return(
      <div>
        <input type="text" value={name} 
        onChange={(e)=>{setName(e.target.value)}}/>
        <h1 className="name">{name}</h1>
        <hr />

        <input type="number" placeholder="length" value={length} onChange={(e)=>{setLength(e.target.value)}}/>

        <input type="number" placeholder="breadth" value={breadth} onChange={(e)=>{setBreadth(e.target.value)}}/>
        <h1>Area is {area}</h1>
      </div> 
      
    );
}

export default DisplayName;