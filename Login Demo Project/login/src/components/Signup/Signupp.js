import React from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
// import { useFirebase } from "../../utils/Firebase/FirebaseForm";

export default function Signup() {
  // const { signupUserWithEmailAndPassword } = useFirebase();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 6) {
        errors.password = "Password must be at least 6 characters long";
      }
      return errors;
    },

    onSubmit: (values) => {
      console.log("values", values);

      navigate("/home");
      // Store email and password in local storage
      localStorage.setItem("email", values.email);
      localStorage.setItem("password", values.password);
      // You can redirect the user to another page after submission if needed
    },
  });
  // const handleSubmit=(e, values)=>{
  //   e.preventDefault()
  //   console.log(e,"events");
  //   localStorage.setItem("email", values.email);
  //     localStorage.setItem("password", values.password);
  // }

  return (
    <div>
      <Container>
        <Row className="justify-content-center py-5">
          <Col sm={10} md={7} lg={6} xxl={5}>
            <div className="card text-center">
              <div className="card-header">
                <h4>Sign Up</h4>
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
                    {formik.touched.email && formik.errors.email && (
                      <div className="text-danger">{formik.errors.email}</div>
                    )}
                  </Form.Group>
                  <Form.Group
                    className="custom-fr-group"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    />
                    {formik.touched.password && formik.errors.password && (
                      <div className="text-danger">
                        {formik.errors.password}
                      </div>
                    )}
                  </Form.Group>
                  <button className="btn btn-primary mt-4 mb-2" type="submit">
                    Sign Up
                  </button>
                </Form>
              </div>
              <div className="card-footer">
                Already have an account? <Link to="/">Login</Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
