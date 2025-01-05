import { useState } from "react";

function ChangeYear(){

    let[year,setYear]=useState(2025)
    const changeyear=()=>{
        setYear(2026)
    }
    return(
        <div>
            <h1 onClick={changeyear}>{year}</h1>
        </div>
    );
}

export default ChangeYear;