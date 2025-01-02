import { use, useState } from "react";

function ChangeName()
{
    let[name,setName]=useState("Sneha");
    return(
        <div>
            <p>{name}</p>
        </div>
    );
}

export default ChangeName;