import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { users } from '../data';

const UserDetail = () => {
  const { userId } = useParams();
  const user = users[parseInt(userId)];

  if (!user) {
    return <h2>User not found</h2>;
  }

  return (
    <div>
      <h1>User Detail</h1>
      <p><strong>First Name:</strong> {user.firstName}</p>
      <p><strong>Last Name:</strong> {user.lastName}</p>
      <p><strong>Age:</strong> {user.age}</p>
      <Link to="/users">Back to User List</Link>
    </div>
  );
};

export default UserDetail;
