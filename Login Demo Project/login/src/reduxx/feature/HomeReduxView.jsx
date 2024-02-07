// homereduxview.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from './HomeRedux';

const HomeReduxView = () => {
  const users = useSelector(state => state.login.users);


  return (
    <div>
      <h3>User List</h3>
      <ul>
       {
        users.map((ele) =>{
          return <li>{ele.email}</li>
        })
       }
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