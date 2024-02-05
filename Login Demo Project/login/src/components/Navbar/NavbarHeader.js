import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarHeader() {
  return (
    <div>
      <Container>
        <nav className="navbar navbar-expand-lg navbar-light bg-light my-5">
          <div className="container-fluid">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item active">
                  <Link className="nav-link" to="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item mx-4">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
              </ul>
              <form className="d-flex">
                <button className="btn btn-danger my-2 my-sm-0" type="submit">
                  Logout
                </button>
              </form>
            </div>
          </div>
        </nav>
      </Container>
    </div>
  );
}
