function Employee({id,name})
{
    return(
        <div className="Employee">
       <ul>
        <li>{id}</li>
        <li>{name}</li>
       </ul>
       </div>
    );
}

export default Employee;