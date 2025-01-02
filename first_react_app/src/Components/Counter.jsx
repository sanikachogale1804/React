//counter liya jata hai to understand how react is behaviour

import { useState } from "react";

function Counter()
{
    //use state array retunr karta hai and hum usko destruct hum karte hai
    //0 count me store ho gaya hai and hum setCount ki madat se increment and decrement karenge
    let[count,setCount]=useState(0);
    const increment=()=>{};
    const decrement=()=>{};
    return(
        <div>
            <button onClick={decrement}>Decrement</button>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default Counter;