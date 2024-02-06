import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarHeader() {
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
              </ul>
            </div>
            <form>
              <Link to= '/' className="btn btn-danger my-2 my-sm-0" type="submit">
                Logout
              </Link>
            </form>
          </div>
        </nav>
      </Container>
    </div>
  );
}
