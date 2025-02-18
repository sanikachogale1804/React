import React, { useReducer } from 'react'

function UseReducerExample() {

    const reduce = (prevData, newData) => {
        // console.log("previous data",prevData)
        // console.log("new data",newData)
        // prevData matlab data ke andar pehle kya valur thi
        return { ...prevData, ...newData }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("data submitted succesfully")
    }

    const initialData = { username: "XYZ", age: 18, address: "mumbai" };
    // data me initialData store hai setData uski value change kara hai
    const [data, setData] = useReducer(reduce, { ...initialData })

    const handleName = (e) => {
        setData({ username: e.target.value })
        console.log(data)
    }
    const handleAge = (e) => {
        setData({ age: e.target.value })
        console.log(data)
    }
    const handleAddress = (e) => {
        setData({ address: e.target.value })
        console.log(data)
    }
    return (
        <div>
            <form onChange={submitHandler}>
                <label htmlFor="">Enter Name</label>
                <input type="text" name="username" id="" value={data.username}
                    onChange={handleName}
                />

                <br />
                <label htmlFor="">Enter age</label>
                <input type="number" name="age" id="" value={data.age}
                    onChange={handleAge}
                />

                <label htmlFor="">Address</label>
                <input type="text" name="address" value={data.address}
                 onChange={handleAddress} />
                <input type="submit"
               
                     />
            </form>
        </div>
    )
}

export default UseReducerExample
