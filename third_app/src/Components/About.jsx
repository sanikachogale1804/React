import React from 'react';
import {useNavigate,useSearchParams} from 'react-router-dom';

function About()
{
    //object and function milega and vo function object change karne ki capacity rakhta hai
    let [searchParam,setSearchParam]=useSearchParams();
    const navigate=useNavigate();

    console.log(searchParam.get("products")) ;   //useSearchParams(); it is object of interface 
    return(
        <div>
            <h1>About</h1>
            <button onClick={()=>{navigate("/contact/1")}}>Click here</button>
            <button onClick={()=>{navigate("/")}}>Go to home page</button>
        </div>
    );
}

export default About;