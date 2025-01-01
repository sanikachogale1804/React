import { useState } from "react";

function ChangeName()
{
    // let name="Nisha"
    //teena is getting stored in name varaible
    let [name,setName]=useState("Seema")
    const change=()=>{
        // name="janki";
        // console.log(name)
        //ye bus console me print karega web page pe nahi react ne ye control hume nahi diya hai  
        setName("Ankita");
    }
    let [year,setYear]=useState("2025")
    const changeYear=()=>{
        setName("2026")

    }

    return(
        <div>
            <h1 onClick={change}>{name}</h1>
            <p>{name}</p>
            <hr />

            <h1 onClick={changeYear}>{year}</h1>
            
        </div>
    );
}

export default ChangeName;