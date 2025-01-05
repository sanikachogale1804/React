import { useState } from "react";

function AreaOfCircle()
{
    let[radius,setRadius]=useState(2);
    let[ans,setArea]=useState(3.14*radius);
    return(
        <div>
            <input type="number" value={radius} onChange={()=>{setRadius(e.target.value)}}/>
        </div>
    );
}
export default AreaOfCircle;