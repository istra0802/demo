import React from 'react';
// import { Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import NavbarHeader from '../../components/Navbar/NavbarHeader';
import { Container } from 'react-bootstrap';
const LoggedInUsers = () => {
  // Get the list of users from the Redux store
  const users = useSelector(state => state.login.users);
  // Filter out only the users who are logged in
  const loggedInUsers = users.filter(user => user.isLogged);
  console.log(loggedInUsers)
  return (
    <div>
      <NavbarHeader />
      <Container>
      <h2>Logged In Users</h2>
      <ul>
        {loggedInUsers.map(user => (
          <li key={user}>
            User ID: {user.email}
          </li>
        ))}
      </ul>
      </Container>
    </div>
  );
};
export default LoggedInUsers;