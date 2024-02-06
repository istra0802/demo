import React from "react";
import NavbarHeader from "./NavbarHeader";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <div>
    <NavbarHeader />
    <Container>
        <p>Home</p>
    </Container>
    </div>
  );
}
