import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Posts() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  console.log(posts);
  return (
    <>
      <h1>Post Component</h1>
      {/* <button onClick={() => dispatch({ type: 'posts' })}>Get Posts</button> */}
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.desc}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
