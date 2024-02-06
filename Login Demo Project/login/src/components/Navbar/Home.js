import React from "react";
import NavbarHeader from "./NavbarHeader";
import { Container,Row,Col } from "react-bootstrap";

export default function Home() {

  const storedEmail =JSON.parse( localStorage.getItem("email")) || []  
   console.log(storedEmail,"home call local")

  return (
    <div>
    <NavbarHeader />
    <Container>
    <Row className="justify-content-center py-5">
          <Col>
          <h3>Stored Emails</h3>
          <ul>
            {storedEmail.map((listItem) => (
              <li key={listItem.email}>{listItem.email}</li>
            ))}
          </ul>
          </Col>
        </Row>
    </Container>
    </div>
  );
}
