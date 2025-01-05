import { useState } from "react";

function EvenOdd()
{
    let[inputValue,setInputValue]=useState(1)

    return(
        <div>
           <h1>{inputValue}</h1>
        </div>
    );
}

export default EvenOdd;