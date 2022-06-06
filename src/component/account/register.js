import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import formImage from "../../img/account/img4.webp";
import { Formik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";

const Register = () => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email("enter a valid email.").required(),
    password: yup.string().required(),
    confirm_password: yup
      .string()
      .required("confirm password is required field")
      .oneOf([yup.ref("password")], "passwords do not match."),

    term: yup
      .bool()
      .required()
      .oneOf([true], "you must agree before submitting."),
  });
  console.log("hello");
  return (
    <section className="form-register m-4">
      <Container>
        <Row>
          <Col xs={12} lg={5} className="d-none d-lg-block">
            <Image src={formImage} alt="image-form" />
          </Col>
          <Col xs={12} md={9} lg={7} className="mx-md-auto">
            <Card className="rounded-0 h-100 py-3 px-4 py-lg-4">
              <Card.Body>
                <h2 className="fw-bold text-uppercase text-center mb-5">
                  create an account
                </h2>

                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    password: "",
                    confirm_password: "",
                    term: false,
                  }}
                  onSumbit={console.log()}
                  validationSchema={schema}
                >
                  {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    isValid,
                    errors,
                  }) => (
                    <Form onSubmit={handleSubmit}>
                      <Row>
                        <Form.Group
                          as={Col}
                          lg="6"
                          className="form-outline mb-4"
                        >
                          <Form.Label className="form-label">
                            your name
                          </Form.Label>
                          <Form.Control
                            type="text"
                            id="form3Example1cg"
                            className="form-control form-control-lg"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={errors.name && touched.name}
                            isValid={!errors.name && touched.name}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.name}
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group
                          as={Col}
                          lg="6"
                          className="form-outline mb-4"
                        >
                          <Form.Label className="form-label">
                            your email
                          </Form.Label>
                          <Form.Control
                            type="email"
                            id="form3Example3cg"
                            className="form-control form-control-lg"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={errors.email && touched.email}
                            isValid={!errors.email && touched.email}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.email}
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group
                          as={Col}
                          lg="6"
                          className="form-outline mb-4"
                        >
                          <Form.Label className="form-label">
                            password
                          </Form.Label>
                          <Form.Control
                            type="password"
                            id="form3Example4cg"
                            className="form-control form-control-lg"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={errors.password && touched.password}
                            isValid={!errors.password && touched.password}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.password}
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group
                          as={Col}
                          lg="6"
                          className="form-outline mb-4"
                        >
                          <Form.Label className="form-label">
                            repeat your password
                          </Form.Label>
                          <Form.Control
                            type="password"
                            id="form3Example4cdg"
                            className="form-control form-control-lg"
                            name="confirm_password"
                            value={values.confirm_password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={
                              errors.confirm_password &&
                              touched.confirm_password
                            }
                            isValid={
                              !errors.confirm_password &&
                              touched.confirm_password
                            }
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.confirm_password}
                          </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group
                          as={Col}
                          lg="12"
                          className="position-relative term d-flex gap-2 align-items-center mb-3"
                        >
                          <Form.Check
                            id="form2Example3cg"
                            name="term"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={!!errors.term && touched.term}
                            feedback={errors.term}
                            feedbackType="invalid"
                          />
                          <Form.Label className="mb-0">
                            i agree all statements in
                            <Link to="#" className="ms-2 text-body">
                              <u>Terms of service</u>
                            </Link>
                          </Form.Label>
                        </Form.Group>
                      </Row>
                      <Button
                        type="submit"
                        className="custom-button rounded-0 text-uppercase mt-2 py-2 px-4"
                        variant="none"
                      >
                        register
                      </Button>

                      <p class="text-center  mt-3 mt-lg-5 mb-0">
                        have already an account?
                        <Link to="login" className="fw-bold text-body ms-1">
                          <u>Login here</u>
                        </Link>
                      </p>
                    </Form>
                  )}
                </Formik>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;
