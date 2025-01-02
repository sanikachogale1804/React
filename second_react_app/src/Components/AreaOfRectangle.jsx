import { useState } from "react";

function AreaOfRectangle()
{
    let[length,setLength]=useState(20);
    return(
      <div>
        <input type="number" value={length}/>
        <input type="number" name={width}/>
      </div>
    );
}
export default AreaOfRectangle;