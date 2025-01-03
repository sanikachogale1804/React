import { useState } from "react";

function LoggedIn()
{
    let[loggedIn,setLoggedIn]=useState(false)
    return(
       <div>
        {loggedIn?
         <div>
            <h1>Welcom User</h1>
            <button>LogOut</button>
         </div>:
        <button onClick={()=>{
            setLoggedIn(true);
        }}>Log IN</button>}
       </div>
    );
}

export default LoggedIn;