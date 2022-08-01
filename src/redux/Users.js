import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import apiData from './apidata';

export default function Users() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Users Component</h1>
      <button onClick={() => dispatch(apiData())}>Get Users</button>

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
