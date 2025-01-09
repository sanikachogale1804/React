import React from 'react'
import { useSearchParams } from 'react-router-dom'

function About() {
    let [searchParam,setSearchParam]=useSearchParams();
    console.log(searchParam.get("products"));
  return (
    <div>
        <h1>About</h1>
    </div>
  )
}

export default About
