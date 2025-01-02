import { useState } from "react";

function EvenOdd()
{
    let[inputValue,setInputValue]=useState(1)
    let[ans,setAnswer]=useState("odd");
    return(
        <div>
             {/* js ka event hai onchange matlab input ki value change kardi */}
             {/* onchange karenge to ye arrow function call hoga and e me uska objcet store hoga */}
             {/* side effect matlab ek element ke change hone ke baad dusra element change ho */}
            <input type="number" value={inputValue} onChange={(e)=>{
                setInputValue(e.target.value);
                console.log(inputValue);
                }}/>

                <h1>{ans}</h1>
        </div>
    );
}

export default EvenOdd;