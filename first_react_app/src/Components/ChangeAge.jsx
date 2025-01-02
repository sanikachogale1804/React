import { useState } from "react";


function ChangeAge()
{
    let[age,setAge]=useState("30")
    return(
       <div>
         <h1 onClick={ChangeAge}>{age}</h1>
         <p>{age}</p>
       </div>
    );
}

export default ChangeAge;