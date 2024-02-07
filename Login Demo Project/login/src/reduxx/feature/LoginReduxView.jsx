// homereduxview.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUsers } from './HomeRedux';

const HomeReduxView = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.home.users || []); // Ensure users array is initialized

  useEffect(() => {
    // Retrieve users from local storage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    // Dispatch action to store users in Redux state
    dispatch(setUsers(storedUsers));
  }, [dispatch]);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user, index) => (
          <li key={user.email}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomeReduxView;
