import React, { useContext } from 'react'
import { userContext } from './A';

function E() {
    const {username,age,address}=useContext(userContext);
  return (
    <div>
       E {username} {age} {address}
    </div>
  )
}

export default E
