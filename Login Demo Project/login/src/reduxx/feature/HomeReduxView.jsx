// homereduxview.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUsers } from './HomeRedux';

const HomeReduxView = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.home.users);

  useEffect(() => {
    // Retrieve users from local storage
    const storedUsers = JSON.parse(localStorage.getItem('email')) || [];
    // Dispatch action to store users in Redux state
    dispatch(setUsers(storedUsers));
  }, [dispatch]);

  return (
    <div>
      <h3>User List</h3>
      <ul>
        {users.map((user) => (
          <li key={user.email}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomeReduxView;


// <ul>
//             {storedEmail.map((listItem) => (
//               <li key={listItem.email}>{listItem.email}</li>
//             ))}
//           </ul>