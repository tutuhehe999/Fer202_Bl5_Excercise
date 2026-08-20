import React, { Suspense, useState, useEffect } from 'react';
import { fetchAllUsers, fetchAllPosts } from './api';

const UserList = React.lazy(() => import('./UserList'));
const PostList = React.lazy(() => import('./PostList'));

const App = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [showUsers, setShowUsers] = useState(false);
  const [showPosts, setShowPosts] = useState(false);

  useEffect(() => {
    if (showUsers) {
      fetchAllUsers().then(data => setUsers(data));
    }
  }, [showUsers]);

  useEffect(() => {
    if (showPosts) {
      fetchAllPosts().then(data => setPosts(data));
    }
  }, [showPosts]);

  return (
    <div>
      <h1>Lazy Loading Demo</h1>
      <button onClick={() => setShowUsers(!showUsers)}>
        {showUsers ? 'Hide Users' : 'Show Users'}
      </button>
      <button onClick={() => setShowPosts(!showPosts)}>
        {showPosts ? 'Hide Posts' : 'Show Posts'}
      </button>

      <Suspense fallback={<div>Loading...</div>}>
        {showUsers && users.length > 0 && <UserList users={users} />}
        {showPosts && posts.length > 0 && <PostList posts={posts} />}
      </Suspense>
    </div>
  );
};

export default App;
