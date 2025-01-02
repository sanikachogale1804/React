import { useEffect, useState } from "react";

function DisplayName()
{
    let[name,setName]= useState("Nisha")
    let[length,setLength]=useState("length")
    let[breadth,setBreadth]=useState("breadeth")
    let[ans,area]=useState("Area")

    useEffect(()=>{
        let l=parseInt(length);
        let w=parseInt(breadth);

    },[])
    return(
      <div>
        <input type="text" value={name} 
        onChange={(e)=>{setName(e.target.value)}}/>
        <h1 className="name">{name}</h1>
        <hr />

        <input type="number" placeholder="length"/>
        <input type="number" placeholder="breadth"/>
        <h1>Area is</h1>
      </div> 
      
    );
}

export default DisplayName;