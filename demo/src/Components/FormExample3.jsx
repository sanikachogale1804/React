import React, { useReducer } from 'react'

function FormExample3() {

    const reduce=(prevData,newData)=>{
        return {...prevData,...newData}
    }
    const handleUserId=(e)=>{
        setData({userId:e.target.value})
        console.log(data)
    }
    const handleUserPassword=(e)=>{
        setData({userPassword:e.target.value}) 
        console.log(data)
    }

    const initialData={userId:"",userPassword:""}
    const [data,setData]=useReducer(reduce,{...initialData})

    const submitHandler=(e)=>{
       e.preventDefault();
       console.log("submitted",data)
    }
  return (
    <div>
       <form action="" onSubmit={submitHandler}>
        <label htmlFor="">Enter user Id</label>
        <input type="text" name="userId" value={data.userId}
        onChange={handleUserId}/>
        <label htmlFor="">Enter Password</label>
        <input type="text" name='userPassword'value={data.userPassword}
        onChange={handleUserPassword}/>
        <input type="submit" />
       </form>
    </div>
  )
}

export default FormExample3
