
import React, { useState } from 'react';
import { users } from './users';  
import SingleUserComponent from './SingleUserComponent';

const AllUsersComponent = () => {
  const [userList, setUserList] = useState([]);  
  const [isUsersAdded, setIsUsersAdded] = useState(false);  
  

  const addUsers = () => {
    setUserList(users);
    setIsUsersAdded(true);
  };

  const deleteAllUsers = () => {
    setUserList([]);
    setIsUsersAdded(false);  
  };

  const deleteUser = (id) => {
    const updatedUserList = userList.filter(user => user.id !== id);
    setUserList(updatedUserList);
    if (updatedUserList.length === 0) {
      setIsUsersAdded(false);
    }
  };

  return (
    <div>
      <button onClick={isUsersAdded ? deleteAllUsers : addUsers}>
        {isUsersAdded ? "Delete All Users" : "Add All Users"}
      </button>

      {isUsersAdded && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userList.map(user => (
              <SingleUserComponent key={user.id} user={user} onDelete={deleteUser} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AllUsersComponent;
