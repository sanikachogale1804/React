import React, { useEffect, useState } from 'react'
import ChildComponent from './ChildComponent'

function Parent() {
    const [count,setCount]=useState(0)

    useEffect(()=>{
        console.log("parent rendered")
    })

  return (
    <div>
       <h1>Parent Component</h1>
        <h1>Button Clicked {count} times</h1>
       <button onClick={()=>{setCount(prev=>prev+1)}}>click</button>
       <ChildComponent/>
       <hr />
    </div>
  )
}

export default Parent
