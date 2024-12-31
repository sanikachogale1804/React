function Header()
{
    let counter="riya";
    let student={
        id:101,
        name:"nisha"
    }
    return(
        <div>
        <h1>Header Componenet {counter}</h1>
        <p>Student Id: {student.id}</p>
        <p>Student Name: {student.name}</p>
        </div>
    );
}

export default Header;