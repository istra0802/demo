import React from "react";
import { Container } from "react-bootstrap";
import { Link , useNavigate } from "react-router-dom";

export default function NavbarHeader() {
  const navigate = useNavigate();

  const handleLogout = (values) => {

    const storedEmails = JSON.parse(localStorage.getItem("email")) || [];

  // Update isLogged status for all users to false
   const updatedEmails = storedEmails.map(user => ({
    ...user,
    isLogged: false
  }));

  // Store updated user data in local storage
  localStorage.setItem("email", JSON.stringify(updatedEmails));

    navigate("/");
    
  }

  return (
    <div>
      <Container>
        <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-light bg-light my-5">
          <div className="container-fluid d-flex justify-content-between">
            <div className="navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item active">
                  <Link className="nav-link" to="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/headAndTail">
                  Head & Tail
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/redux">
                  Redux
                  </Link>
                </li>
              </ul>
            </div>
            <form>
              <button  onClick={handleLogout} className="btn btn-danger my-2 my-sm-0" type="submit">
                Logout
              </button>
            </form>
          </div>
        </nav>
      </Container>
    </div>
  );
}
