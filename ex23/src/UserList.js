import React from 'react';

const UserList = ({ users }) => {
  return (
    <div>
      <h1>All Users</h1>
      {users.map(user => (
        <div key={user.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
