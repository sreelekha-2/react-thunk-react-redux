import React from 'react';
import './style.css';
import Users from './redux/Users';
import Posts from './redux/Posts';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Posts />
      <Users />
    </div>
  );
}
