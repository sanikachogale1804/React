import { use, useState } from "react";

function ChangeName()
{
    let[name,setName]=useState("Sneha");
    const change=()=>{setName("Sanika")}
    return(
        <div>
            <button onClick={change}>Change Name</button>
            <p>{name}</p>
        </div>
    );
}

export default ChangeName;