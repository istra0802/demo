import React from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { useFirebase } from "../../utils/Firebase/FirebaseForm";
import { useFirebase } from "../../utils/Firebase/FirebaseForm";




export default function Login() {

  const firebase = useFirebase();
  console.log(firebase)
  const handleLogin = async (e) => {
    e.preventDefault();
  
  }


  return (
    <div>
      <Container>
        <Row className="justify-content-center py-5">
          <Col sm={10} md={7} lg={6} xxl={5}>
            <div className="card text-center">
              <div className="card-header">
                <h2>Login</h2>
              </div>
              <div className="card-body">
                <Form onSubmit={handleLogin}>
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
                  <button type="submit" className="btn btn-primary mt-4 mb-2">
                    Login
                  </button>
                </Form>
              </div>
              <div className="card-footer">
                Don't have an account? <Link to="/signupp">Signup</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      </div>
      );
    }
    
  
  
