import React from 'react';
import { useSelector } from 'react-redux';

export default function Posts() {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <div>
      <h1>Post Component</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <p>{post.title}</p>
            <p>{post.desc}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
