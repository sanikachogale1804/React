import { useEffect, useState } from "react";

function AreaOfRectangle()
{
    let[length,setLength]=useState(20);
    let[width,setWidth]=useState(10);
    let[area,setArea]=useState(length*width);

    useEffect(()=>{
      setArea(length*width);
    },[length,width])
    return(
      <div>
        <input type="number" placeholder="length" value={length} onChange={(e)=>{setLength(e.target.value)}}/>
        <input type="number" placeholder="width" value={width} onChange={(e)=>{setWidth(e.target.value)}}/>
        <h1>{area}</h1>
      </div>
    );
}
export default AreaOfRectangle;