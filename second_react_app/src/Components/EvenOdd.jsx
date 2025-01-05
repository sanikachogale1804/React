import { useEffect, useState } from "react";

function EvenOdd()
{
    let[inputValue,setInputValue]=useState(1)
    let[ans,setAnswer]=useState("odd")
    useEffect(()=>{
        let v=parseInt(inputValue)
        if(v%2==0)
        {
           setAnswer("Even")
        }
        else
        {
            setAnswer("odd")
        }
    },[inputValue])
    return(
        <div>
           <h1></h1>
        </div>
    );
}

export default EvenOdd;