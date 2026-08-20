import React from 'react';

const PostList = ({ posts }) => {
  return (
    <div>
      <h1>All Posts</h1>
      {posts.map(post => (
        <div key={post.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
