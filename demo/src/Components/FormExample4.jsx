import React, { useReducer } from 'react'

function FormExample4() {
    const reduce=(prevData,newData)=>{
        return {...prevData,...newData}
    }
    const handleId=(e)=>{
        setData({Id:e.target.value})
        console.log(data)
    }
    const handleName=(e)=>{
        setData({name:e.target.value}) 
        console.log(data)
    }
    const submitHandler=(e)=>{
       e.preventDafult();
       console.log("data submitted")
       console.log(...initialData)
    }
    const initialData={Id:"1",name:"sanu"}
    const [data,setData]=useReducer(reduce,{...initialData})
    return (
        <div>
            <form action="" onSubmit={submitHandler}>
                <label htmlFor="">Enter Id</label>
                <input type="number" name="Id" value={data.Id}
                onChange={handleId}/>
                <label htmlFor="">Enter name</label>
                <input type="text" name="name" value={data.name}
                onChange={handleName}/>
                <input type="submit" />
            </form>

        </div>
    )
}

export default FormExample4
