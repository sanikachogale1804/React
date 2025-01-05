import { useState } from "react";

function ChangeYear(){

    let[year,changeYear]=useState(2025)
    return(
        <div>
            <h1>{changeYear}</h1>
        </div>
    );
}

export default ChangeYear;