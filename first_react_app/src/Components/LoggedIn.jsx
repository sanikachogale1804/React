import { useState } from "react";

function LoggedIn()
{
    let[loggedIn,setLoggedIn]=useState(false)
    return(
       <div>
 
        {/* react me alag tarah se and operator work karta hai    */}
        {/* agar true hai to hi kuch dhikhega false hai to nahi dhikhega */}
        {true && <h1>Condition is true</h1>}

        <hr />

        {loggedIn?
         <div>
            <h1>Welcom User</h1>
            <button onClick={()=>{
               setLoggedIn(false)
            }} >LogOut</button>
         </div>:

        <button onClick={()=>{
            setLoggedIn(true);
        }}>Log IN</button>}
       </div>
    );
}

export default LoggedIn;