import React from 'react';
import { Link } from 'react-router-dom';
import { users } from '../data';

const UserList = () => {
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <Link to={`/users/${index}`}>
              {user.firstName} {user.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
