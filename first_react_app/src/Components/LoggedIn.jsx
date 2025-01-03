import { useState } from "react";

function LoggedIn()
{
    let[loggedIn,setLoggedIn]=useState(false)
    return(
       <div>
        {loggedIn?<h1>Welcome user</h1>:<button>Log IN</button>}
       </div>
    );
}

export default LoggedIn;