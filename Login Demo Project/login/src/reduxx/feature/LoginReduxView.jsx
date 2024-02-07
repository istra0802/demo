import React from 'react';
import { useSelector } from 'react-redux';
import NavbarHeader from '../../components/Navbar/NavbarHeader';
import { Container } from 'react-bootstrap';

const LoggedInUsers = () => {
  // Get the list of users from the Redux store
  const user = useSelector(state => state.home.user);
  // Filter out only the users who are logged in

  return (
    <div>
      <NavbarHeader />
      <Container>
        <h2>Logged In Users</h2>
        <ul>
        {user.email}
        </ul>
      </Container>
    </div>
  );
};

export default LoggedInUsers;
