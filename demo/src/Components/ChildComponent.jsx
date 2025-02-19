import React, { useEffect } from 'react'

function ChildComponent() {
    useEffect(()=>{
        console.log("child rendered")
    },[])
  return (
    <div>
       <h1>Child Component</h1>
    </div>
  )
}

export default React.memo(ChildComponent)
