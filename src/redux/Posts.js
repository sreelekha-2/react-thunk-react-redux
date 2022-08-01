import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import apiData from './apidata';

export default function Posts() {
  const posts = useSelector((state) => state.posts);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  console.log(posts);
  return (
    <>
      <h1>Post Component</h1>
      <button onClick={() => dispatch(apiData())}>Get Users</button>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.desc}</p>
          </li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
