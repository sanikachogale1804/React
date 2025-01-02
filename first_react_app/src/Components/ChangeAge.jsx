import { useState } from "react";


function ChangeAge()
{
    let[age,setAge]=useState("30")
    return(
        <p>{age}</p>
    );
}

export default ChangeAge;