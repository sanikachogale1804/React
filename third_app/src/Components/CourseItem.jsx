import React from 'react'

function CourseItem({id,name,fees}) {
  return (
    <div>
       <p>Course id is: {id}</p>
       <p>Course Name id: {name}</p>
       <p>Course Fees is: {fees}</p>
    </div>
  )
}

export default CourseItem
