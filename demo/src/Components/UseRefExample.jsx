import React, { useRef } from 'react'

function UseRefExample() {
    const inputOne=useRef();
    const inputTwo=useRef();
    const fetchData=()=>{
       console.log(inputOne.current)
       inputOne.current.style.color="red" ;
    }

    const changeBox=()=>{
       console.log(inputTwo.current)
       inputTwo.current.style.borderRadius="100%";
    }
  return (
    <div>
       <hr />
       {/* ref ke passcurrent ye ek hi property hoti hai */}
       <input type="text" ref={inputOne}/>
       <button onClick={fetchData}>Click</button>

       <div className='box' ref={inputTwo}> 
       </div>
       <button  onClick={changeBox}>Click</button>
    </div>
  )
}

export default UseRefExample
