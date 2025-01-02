import { useState } from "react";


function ChangeAge()
{
    let[age,setAge]=useState("30")
    const change=()=>{
        setAge("35")
    }
    return(
       <div>
         <h1 onClick={change}>{age}</h1>
         <p>{age}</p>
       </div>
    );
}

export default ChangeAge;