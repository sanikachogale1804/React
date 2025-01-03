import { useEffect, useState } from "react";

function DisplayName()
{
    let[name,setName]= useState("Nisha")
    let[length,setLength]=useState(0)
    let[breadth,setBreadth]=useState(0)
    let[area,setArea]=useState(length*breadth)

    useEffect(()=>{
      // setTimeout kuch na kuch value return karta hai usko variable me store kiya
      //hamesha kuch na kuch value deta rehta hai hume usko band karna padta hai
        let value=setTimeout(()=>{
          setArea(length*breadth);
        },5000)
        // console.log(value)

        //cleanup function: return()=>{} 
        return()=>{
          console.log("cleanup function")
          // clearTimeout(value); pichle vale timer ko clear kar diya 
          clearTimeout(value);
        }
    },[length,breadth])
    return(
      <div>
        <input type="text" value={name} 
        onChange={(e)=>{setName(e.target.value)}}/>
        <h1 className="name">{name}</h1>
        <hr />

        <input type="number" placeholder="length" value={length} onChange={(e)=>{setLength(e.target.value)}}/>

        <input type="number" placeholder="breadth" value={breadth} onChange={(e)=>{setBreadth(e.target.value)}}/>
        <h1>Area is {area}</h1>
      </div> 
      
    );
}

export default DisplayName;