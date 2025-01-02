import { useState } from "react";

function EvenOdd()
{
    let[inputValue,setInputValue]=useState(1)
   
    return(
        <div>
             {/* js ka event hai onchange matlab input ki value change kardi */}
             {/* onchange karenge to ye arrow function call hoga and e me uska objcet store hoga */}
            <input type="number" value={inputValue} onChange={(e)=>{
                setInputValue(e.target.value)
                
                }}/>
        </div>
    );
}

export default EvenOdd;