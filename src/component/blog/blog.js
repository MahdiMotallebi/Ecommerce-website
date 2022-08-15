import React from 'react';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Blog = ({ img }) => {
  const { t } = useTranslation();
  return (
    <Row className="m-0">
      <Col>
        <Link to="/singleBlog/blogDetail">
          <div className="blog-img position-relative">
            <Image src={img} loading="lazy" />
            <span className="one"></span>
            <span className="two"></span>
            <span className="three"></span>
            <span className="four"></span>
          </div>
          <div className="blog-body">
            <h6 className="my-2">25 June 2018</h6>
            <p className="mb-2">{t('some quick example')}</p>
            <small>{t('by')}: jhon diom, 2 comments</small>
          </div>
        </Link>
      </Col>
    </Row>
  );
};

export default Blog;
