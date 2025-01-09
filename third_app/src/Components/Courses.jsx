import React from 'react'
import {Outlet} from 'react-router-dom'


function Courses() {
  return (
    <div>
       courses
       <div className='border border-primary'>

       <Outlet/>
       {/* jaha pe apko render karana hai element ko vaha pe outlet likho  */}
       </div>
    </div>
  )
}

export default Courses
