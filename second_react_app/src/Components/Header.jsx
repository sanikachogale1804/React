import { useState } from "react";

function Header()
{
    let[name,setName]=useState("riya")
    const ChangeName=()=>{setName("Sanika")}
    return(
       <div>
           <h1 onClick={ChangeName}>{setName}</h1>
       </div>
    );
}

export default Header;