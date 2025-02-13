import React, { createContext, useState } from 'react'
import B from './B'

//the data which you want to pass the component 
//context banake dega(createContext)
export const userContext=createContext()


function A() {
    const[name,setName]=useState("Nisha");
  return (
    <div>A
        {/* if you want to send some data  */}
        {/* kya deta child tak pohchana hai that you can say with the help of value and value me object aayega */}
        <userContext.Provider value={{"username":name,"age":19,"address":"Vidyavihar"}}>
        <B/>
        </userContext.Provider>
    
    </div>
  )
}

export default A
