import React, { useContext } from 'react'
import { userContext } from './A'

function D() {
    // useContext: we want to use the data 
    const {username,age,address}=useContext(userContext);
  return (
    <div>D { username} {age} {address}
    </div>
  )
}

export default D
