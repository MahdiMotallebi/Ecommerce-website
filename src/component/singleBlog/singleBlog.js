import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import Breadcrumb from '../breadCrumb/breadCrumb';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import headerSingleBlog from '../../img/singleBlog/header.jpg';
import img1 from '../../img/singleBlog/1.jpg';
import img2 from '../../img/singleBlog/2.jpg';
import avatar from '../../img/singleBlog/comment2.jpg';
import { v4 as uuidv4 } from 'uuid';
import Comments from '../../component/comments/comments';
import { BsHeart, BsChat } from 'react-icons/bs';
import { Formik } from 'formik';
import * as yup from 'yup';
import { addComment, postComment } from '../../features/shopSlice';
import { useTranslation } from 'react-i18next';

const SingleBlog = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    textComment: yup.string().required(),
  });

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Breadcrumb />
      <div className="singleBlog mt-2 mt-lg-5 mb-5 p-3 p-md-0">
        <Container>
          <div className="top-singleBlog">
            <Row>
              <Col xs={12}>
                <Link to="about">
                  <Image src={headerSingleBlog} alt="single-blog-image"></Image>
                </Link>
              </Col>
              <Col xs={12}>
                <div className="mt-3 detail-post-container border-bottom pb-3">
                  <h3 className="text-uppercase fw-bold">
                    {t('title_singleBlog')}
                  </h3>
                  <div className="detail-blog-post">
                    <Row className="gy-2">
                      <Col xs={12} lg={3}>
                        <div className="date">25 January 2021</div>
                      </Col>
                      <Col xs={12} lg={3}>
                        <div className="author text-capitalize">
                          {t('post_by')}: mahdi motallebi shariar
                        </div>
                      </Col>
                      <Col xs={12} lg={3}>
                        <div className="count-like-post ">
                          <BsHeart />
                          <span className="d-inline-block ms-2">
                            235 {t('hits')}
                          </span>
                        </div>
                      </Col>
                      <Col xs={12} lg={3}>
                        <div className="count-comment-post">
                          <BsChat />

                          <span className="d-inline-block ms-2">
                            104 {t('comments')}
                          </span>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
              <Col xs={12}>
                <p className="my-3 single-blog-content">
                  {t('des_singleBlog')}
                </p>
              </Col>
            </Row>
          </div>
          <div className="middle-singelBlog">
            <Row className="gy-4">
              <Col xs={12} md={6}>
                <Image src={img1}></Image>
              </Col>
              <Col xs={12} md={6}>
                <Image src={img2}></Image>
              </Col>
              <Col xs={12} md={6}>
                <ListGroup as="ol" numbered>
                  <ListGroup.Item as="li">
                    {t('question_singleBlog')}
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    {t('question_singleBlog')}
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    {t('question_singleBlog')}
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    {t('question_singleBlog')}
                  </ListGroup.Item>
                  <ListGroup.Item as="li">
                    {t('question_singleBlog')}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col xs={12} md={6} className="single-blog-content">
                <p>{t('des_singleBlog')}</p>
              </Col>
            </Row>
          </div>
          <div className="comments my-5">
            <Container>
              <Comments />
            </Container>
          </div>

          <div className="form-comment">
            <h4 className="text-uppercase fw-bold mb-3">
              {t('leave_comment')}
            </h4>
            <Row>
              <Col md={8} lg={5}>
                <Formik
                  initialValues={{
                    name: '',
                    email: '',
                    textComment: '',
                  }}
                  onSubmit={(values, props) => {
                    const newComment = {
                      id: uuidv4(),
                      body: values.textComment,
                      username: values.name,
                      userId: '2',
                      parentId: null,
                      children: [],
                      avatar: `${avatar}`,
                      createdAt: new Date().toISOString(),
                    };
                    dispatch(addComment(newComment));
                    dispatch(postComment(newComment));
                    props.resetForm();
                  }}
                  validationSchema={schema}
                >
                  {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    errors,
                    resetForm,
                  }) => (
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="form.Name">
                        <Form.Label>{t('name')}</Form.Label>
                        <Form.Control
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="text"
                          isInvalid={touched.name && errors.name}
                          isValid={!errors.name && touched.name}
                        />
                        <Form.Control.Feedback type="invalid">
                          {t('name error')}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="form.Email">
                        <Form.Label>{t('email address')}</Form.Label>
                        <Form.Control
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          type="email"
                          isInvalid={touched.email && errors.email}
                          isValid={!errors.email && touched.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {t('email error')}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="form.Textarea">
                        <Form.Label>{t('comment')}</Form.Label>
                        <Form.Control
                          name="textComment"
                          value={values.textComment}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          as="textarea"
                          rows={3}
                          isInvalid={touched.textComment && errors.textComment}
                          isValid={!errors.textComment && touched.textComment}
                        />
                        <Form.Control.Feedback type="invalid">
                          {t('comment error')}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Button
                        type="submit"
                        className="mt-3 custom-button py-2 px-3 rounded-0 text-uppercase"
                        variant="none"
                      >
                        {t('post comment')}
                      </Button>
                    </Form>
                  )}
                </Formik>
              </Col>
            </Row>
          </div>
        </Container>
        <Outlet />
      </div>
    </>
  );
};

export default SingleBlog;
