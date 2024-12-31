function Student({id,name})  //props matlab properties
{
    return(
       //  <div></div> iska matlab <></>  aaise bhi likh sakte hai
        <div className="student">
           <ul >
               <li>{id}</li>
               <li>{name}</li>
            </ul> 
        </div>
    );
}

export default Student;