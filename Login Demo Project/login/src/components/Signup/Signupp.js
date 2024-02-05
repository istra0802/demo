import React from "react";
// import { useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
// import LogoSm from "../images/logo-sm.png";
import { Link } from "react-router-dom";

export default function Signupp() {
  return (
    <div>
      <Container>
        <Row className="justify-content-center py-5">
          <Col sm={10} md={7} lg={6} xxl={5}>
            <div className="card text-center">
              <div className="card-header">
                <h4> Sign Up</h4>
              </div>
              <div className="card-body">
                <Form>
                  <Form.Group
                    className="custom-fr-group"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter Email..."
                      required
                    />
                  </Form.Group>
                  <Form.Group
                    className="custom-fr-group"
                    controlId="formBasicPassword"
                  >
                    <Form.Label className="mt-3">Password</Form.Label>
                    <div>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        required
                      />
                    </div>
                  </Form.Group>
                  <Link to="/home" className="btn btn-primary mt-4 mb-2">
                    Sign Up
                  </Link>
                </Form>
              </div>
              <div className="card-footer">
                Already have an account? <Link to="/loginn"> Login</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
