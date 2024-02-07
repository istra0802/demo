import React from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
export default function Login() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      const storedEmail = JSON.parse(localStorage.getItem("email")) || [];
      let isLoggedIn = false;
      for (let i = 0; i < storedEmail.length; i++) {
        if (values.email === storedEmail[i].email ) {
          isLoggedIn = true;
          break;
        }
      }
      if (isLoggedIn) {
        navigate("/home");
        // Update isLogged status for the logged-in user
        storedEmail.forEach(user => {
          if (user.email === values.email) {
            user.isLogged = true;
          }
          
        });
        // Store updated user data in local storage
        localStorage.setItem("email", JSON.stringify(storedEmail));
      } else {
        console.log("Invalid credentials");
        navigate("/signupp");
      }
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Email is Required";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Password is Required";
      } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters long";
      }
      return errors;
    },
  });
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
                <Form onSubmit={formik.handleSubmit}>
                  <Form.Group
                    className="custom-fr-group"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="text-danger">{formik.errors.email}</div>
                    ) : null}
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
                        name="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                      />
                      {formik.touched.password && formik.errors.password ? (
                        <div className="text-danger">
                          {formik.errors.password}
                        </div>
                      ) : null}
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