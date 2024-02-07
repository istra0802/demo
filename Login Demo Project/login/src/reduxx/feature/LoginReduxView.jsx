import React from 'react';
import { useSelector } from 'react-redux';
import NavbarHeader from '../../components/Navbar/NavbarHeader';
import { Container } from 'react-bootstrap';

const LoggedInUsers = () => {
  // Get the list of users from the Redux store
  const users = useSelector(state => state.login.users);
  // Filter out only the users who are logged in
  const loggedInUsers = users.find(user => user.isLogged);



  return (
    <div>
      <NavbarHeader />
      <Container>
        <h2>Logged In Users</h2>
        <ul>
          {loggedInUsers.email}
        </ul>
      </Container>
    </div>
  );
};

export default LoggedInUsers;
