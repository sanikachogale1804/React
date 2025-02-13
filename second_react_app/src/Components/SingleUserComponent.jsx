// SingleUserComponent.js
import React from 'react';

const SingleUserComponent = ({ user, onDelete }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      <td>{user.address}</td>
      <td>
        <button onClick={() => onDelete(user.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default SingleUserComponent;
