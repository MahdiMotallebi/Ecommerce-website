import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';
import Breadcrumb from '../breadCrumb/breadCrumb';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { t } = useTranslation();
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
    remember: yup.bool().required().oneOf([true], 'Terms must be accepted'),
  });

  return (
    <>
      <Breadcrumb />
      <section className="login-form my-5">
        <Container>
          <Row className="p-1 gx-2 gx-md-2">
            <Col className="mb-4 mb-lg-0 mx-md-auto" xs={12} md={10} lg={6}>
              <div className="p-3 border">
                <h4 className="fw-bold text-uppercase mb-3">{t('login')}</h4>
                <Formik
                  validationSchema={schema}
                  initialValues={{
                    email: '',
                    password: '',
                    remember: false,
                  }}
                  onSubmit={console.log('hi')}
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
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>{t('email address')}</Form.Label>
                        <Form.Control
                          name="email"
                          type="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          placeholder={t('Enter email')}
                          isInvalid={touched.email && errors.email}
                          isValid={touched.email && !errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {t('email error')}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>{t('password')}</Form.Label>
                        <Form.Control
                          name="password"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="password"
                          placeholder={t('password')}
                          isInvalid={touched.password && errors.password}
                          isValid={touched.password && !errors.password}
                        />
                        <Form.Control.Feedback type="invalid">
                          {t('password error')}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check
                          name="remember"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="custom-checkbox"
                          type="checkbox"
                          label={t('check me out')}
                          isInvalid={errors.remember && touched.remember}
                          isValid={!errors.remember && touched.remember}
                        />
                      </Form.Group>
                      <Button
                        variant="none"
                        className="custom-button rounded-0 py-2 px-4 text-uppercase"
                        type="submit"
                      >
                        {t('login')}
                      </Button>
                    </Form>
                  )}
                </Formik>
              </div>
            </Col>

            <Col className="register mx-md-auto" xs={12} md={10} lg={6}>
              <div className="p-3 border h-100">
                <h4 className="fw-bold text-uppercase mb-3">
                  {t('new coustomer')}
                </h4>
                <h6>{t('create an account')}</h6>
                <p>{t('login description')}</p>
                <Link className="register-button mt-3 px-4" to="/register">
                  {t('register')}
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Login;
