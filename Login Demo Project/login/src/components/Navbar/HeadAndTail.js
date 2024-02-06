import React from "react";
import NavbarHeader from "./NavbarHeader";
import { Container, Row, Col } from "react-bootstrap";

export default function HeadAndTail() {
  return (
    <div>
      <Container>
        <NavbarHeader />
        <Row className="justify-content-center py-5">
          <Col sm={10} md={7} lg={6} xxl={5}>
            <div className="card text-center ">
              <div className="card-body">
                <h2>Head & Tail isha</h2>
              </div>
            </div>

            <select className="form-select my-4" aria-label="Default select example">
              <option selected>Open this select menu</option>
              <option value="1">H</option>
              <option value="2">T</option>
            
            </select>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
