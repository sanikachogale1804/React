import React, { useReducer } from 'react'

function FormExample2() {

    const reduce=(prevData,initialData)=>{
       
    }

    const initialData={studentId:" ",studentName:" "};
    const [data,setData]=useReducer(reduce,{...initialData})
  return (
    <div>
       <form action="">
        <label htmlFor="">Student Id</label>
        <input type="number" name='studentId' /> 

        <label htmlFor="">Student Name</label>
        <input type="text" name="studentName" id="" />

        <input type="submit" />
       </form>
    </div>
  )
}

export default FormExample2
