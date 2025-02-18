import React, { useReducer } from 'react'

function FormExample2() {

    const reduce=(prevData,initialData)=>{
       return {...prevData,...initialData}
    }

    const handleId=(e)=>{
       setData({studentId:e.target.value})
       console.log(data)
    }
    const handleName=(e)=>{
       setData({studentName:e.target.value})
       console.log(data)
    }
    const initialData={studentId:" ",studentName:" "};
    const [data,setData]=useReducer(reduce,{...initialData})

    const submitHandler=(e)=>{
        e.preventDefault();
        console.log("data submitted succesfully")
    }
  return (
    <div>
       <form action="" onSubmit={submitHandler}>
        <label htmlFor="">Student Id</label>
        <input type="number" name='studentId' 
        onChange={handleId}/> 

        <label htmlFor="">Student Name</label>
        <input type="text" name="studentName" id="" 
        onChange={handleName}/>

        <input type="submit" />
       </form>
    </div>
  )
}

export default FormExample2
