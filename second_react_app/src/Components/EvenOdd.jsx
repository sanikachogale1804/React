import { useState } from "react";

function EvenOdd()
{
    let[inputValue,setInputValue]=useState(1)
    let[ans,setAnswer]=useState("odd")
    return(
        <div>
           <h1>{inputValue}</h1>
           <h1>{ans}</h1>
        </div>
    );
}

export default EvenOdd;