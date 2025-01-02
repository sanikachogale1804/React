import { useEffect, useState } from "react";

function EvenOdd()
{
    let[inputValue,setInputValue]=useState(1)
    let[ans,setAnswer]=useState("odd");

    useEffect(()=>{
        //anne vala number string format me bhi ho sakta hai is liye usko convert kiya
       let v=parseInt(inputValue);
        if(v%2==0)
           setAnswer("Even")
        else
           setAnswer("Odd")
      
        // console.log("EvenOdd")
    },[inputValue])//jab jab input value change hogi tab tab useEffect call hora hhai
    return(
        <div>
             {/* js ka event hai onchange matlab input ki value change kardi */}
             {/* onchange karenge to ye arrow function call hoga and e me uska objcet store hoga */}
             {/* side effect matlab ek element ke change hone ke baad dusra element change ho */}
            <input type="number" value={inputValue} onChange={(e)=>{
                setInputValue(e.target.value);
                // console.log(inputValue);
                }}/>

                <h1>{ans}</h1>
        </div>
    );
}

export default EvenOdd;