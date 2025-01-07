import { useEffect, useState } from "react";

function AreaOfCircle()
{
    let[radius,setRadius]=useState(2);
    let[ans,setArea]=useState(3.14*radius*radius);
    useEffect(()=>{
        setArea(3.14*radius*radius);
    },[radius])
    return(
        <div>
            <input type="number" value={radius} onChange={(e)=>{setRadius(e.target.value)}}/>
            <h1>{ans}</h1>
        </div>
    );
}
export default AreaOfCircle;